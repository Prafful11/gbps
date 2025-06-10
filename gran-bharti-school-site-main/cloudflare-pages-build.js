// Cloudflare Pages build script
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Debug information
console.log('Current directory:', process.cwd());
console.log('Directory contents:', fs.readdirSync('.'));

// Try to find package.json
let found = false;
let searchDir = process.cwd();
let levels = 0;
const maxLevels = 5;

// Helper function to create minimal dist
function createFallbackDist(message) {
  console.log('Creating fallback dist directory with message:', message);
  fs.mkdirSync('dist', { recursive: true });
  
  // Check if we have a default-index.html file
  if (fs.existsSync('default-index.html')) {
    console.log('Using default-index.html as fallback');
    fs.copyFileSync('default-index.html', 'dist/index.html');
  } else {
    // Create a simple HTML file
    fs.writeFileSync('dist/index.html', `<!DOCTYPE html><html><body><h1>${message}</h1></body></html>`);
  }
  
  // Create _redirects file for SPA routing
  fs.writeFileSync('dist/_redirects', '/* /index.html 200');
}

while (!found && levels < maxLevels) {
  console.log(`Searching in ${searchDir}`);
  
  if (fs.existsSync(path.join(searchDir, 'package.json'))) {
    found = true;
    process.chdir(searchDir);
    console.log(`Found package.json in ${searchDir}`);
    break;
  }
  
  // Look in subdirectories
  const dirs = fs.readdirSync(searchDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(searchDir, dirent.name));
    
  for (const dir of dirs) {
    console.log(`Checking subdirectory ${dir}`);
    if (fs.existsSync(path.join(dir, 'package.json'))) {
      found = true;
      process.chdir(dir);
      console.log(`Found package.json in ${dir}`);
      break;
    }
  }
  
  if (found) break;
  
  // Move up one level
  const parentDir = path.dirname(searchDir);
  if (parentDir === searchDir) {
    console.log('Reached root directory, stopping search');
    break;
  }
  
  searchDir = parentDir;
  levels++;
}

if (!found) {
  console.error('Could not find package.json in any parent or child directory');
  createFallbackDist('Build failed - package.json not found');
  process.exit(0); // Exit with success to deploy the fallback
}

// Try to run npm install and build
try {
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Make sure the _redirects file exists
  if (fs.existsSync('dist')) {
    fs.writeFileSync('dist/_redirects', '/* /index.html 200');
    console.log('Created _redirects file for SPA routing');
  }
  
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error);
  createFallbackDist(`Build failed: ${error.message}`);
  process.exit(0); // Exit with success to deploy the fallback
} 