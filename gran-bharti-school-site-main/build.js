// Simple build script for environments where gulp isn't available
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create a dist directory if it doesn't exist
function ensureDistDirectory() {
  console.log('Ensuring dist directory exists...');
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }
}

// Run the Vite build
function runViteBuild() {
  console.log('Running Vite build...');
  try {
    execSync('npx vite build', { stdio: 'inherit' });
    console.log('Vite build completed successfully.');
    return true;
  } catch (error) {
    console.error('Vite build failed:', error);
    return false;
  }
}

// Simple optimization functions
function minifyHTML() {
  console.log('Optimizing HTML files...');
  try {
    // This is a very basic implementation
    // In a real scenario, you'd want to use a proper HTML minifier
    const htmlFiles = findFiles('dist', '.html');
    htmlFiles.forEach(file => {
      console.log(`Processing ${file}...`);
      let content = fs.readFileSync(file, 'utf8');
      // Very basic minification - remove comments and extra whitespace
      content = content.replace(/<!--[\s\S]*?-->/g, '');
      content = content.replace(/\s{2,}/g, ' ');
      fs.writeFileSync(file, content);
    });
    return true;
  } catch (error) {
    console.error('HTML optimization failed:', error);
    return false;
  }
}

// Create a 404 page if it doesn't exist
function create404Page() {
  console.log('Creating 404 page if needed...');
  const notFoundPath = path.join('dist', '404.html');
  
  if (!fs.existsSync(notFoundPath)) {
    console.log('404 page not found, creating one...');
    const content = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Page Not Found - Gyan Bharti Public School</title>
          <style>
            body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 2rem; text-align: center; }
            h1 { color: #1a56db; margin-top: 2rem; }
            .logo { max-width: 200px; margin-bottom: 2rem; }
            .btn { display: inline-block; background: #1a56db; color: white; padding: 0.5rem 1.5rem; text-decoration: none; border-radius: 0.25rem; margin-top: 1rem; }
          </style>
        </head>
        <body>
          <h1>Page Not Found</h1>
          <p>We're sorry, but the page you were looking for doesn't exist.</p>
          <a href="/" class="btn">Go to Homepage</a>
        </body>
      </html>
    `;
    fs.writeFileSync(notFoundPath, content);
    console.log('404 page created successfully.');
  } else {
    console.log('404 page already exists.');
  }
}

// Helper function to find files with a specific extension
function findFiles(dir, extension) {
  let results = [];
  if (!fs.existsSync(dir)) {
    console.warn(`Directory ${dir} does not exist.`);
    return results;
  }
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(findFiles(filePath, extension));
    } else if (path.extname(file) === extension) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Main function to run the build process
function main() {
  console.log('Starting build process...');
  
  // Ensure dist directory exists
  ensureDistDirectory();
  
  // Run Vite build if not already built
  if (!fs.existsSync(path.join('dist', 'index.html'))) {
    if (!runViteBuild()) {
      process.exit(1);
    }
  } else {
    console.log('Skipping Vite build as dist/index.html already exists.');
  }
  
  // Run optimizations
  if (!minifyHTML()) {
    console.warn('HTML optimization failed, continuing with build...');
  }
  
  // Create 404 page
  create404Page();
  
  console.log('Build and optimization completed successfully.');
}

// Run the main function
try {
  main();
} catch (error) {
  console.error('Build process failed:', error);
  process.exit(1);
} 