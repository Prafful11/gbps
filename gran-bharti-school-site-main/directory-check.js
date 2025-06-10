// Debug script to check directory structure
const fs = require('fs');
const path = require('path');

// Log current directory
console.log('Current directory:', process.cwd());

// Try to move up one directory
try {
  process.chdir('..');
  console.log('Parent directory:', process.cwd());
  console.log('Parent directory contents:', fs.readdirSync('.'));
} catch (error) {
  console.error('Error accessing parent directory:', error);
}

// Reset to current directory
try {
  process.chdir(path.dirname(__filename));
  console.log('Back to script directory:', process.cwd());
  console.log('Script directory contents:', fs.readdirSync('.'));
} catch (error) {
  console.error('Error resetting directory:', error);
}

// Check for important files
console.log('package.json exists:', fs.existsSync('package.json'));
console.log('wrangler.toml exists:', fs.existsSync('wrangler.toml'));
console.log('cloudflare.json exists:', fs.existsSync('cloudflare.json'));

// Try to create a simple build
try {
  fs.mkdirSync('dist', { recursive: true });
  fs.writeFileSync('dist/index.html', '<!DOCTYPE html><html><body><h1>Built by directory-check.js</h1></body></html>');
  console.log('Created simple build in dist/index.html');
} catch (error) {
  console.error('Error creating build:', error);
} 