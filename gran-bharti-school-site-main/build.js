// Simple build script for environments where gulp isn't available
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Running Vite build...');
try {
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('Vite build completed successfully.');
} catch (error) {
  console.error('Vite build failed:', error);
  process.exit(1);
}

// Simple optimization functions
function minifyHTML() {
  console.log('Optimizing HTML files...');
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
}

function findFiles(dir, extension) {
  let results = [];
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

// Run optimizations
try {
  minifyHTML();
  console.log('Build and optimization completed successfully.');
} catch (error) {
  console.error('Optimization failed:', error);
  process.exit(1);
} 