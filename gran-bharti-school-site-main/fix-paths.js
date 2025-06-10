// This script attempts to identify and fix path issues in the Cloudflare Pages environment
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Environment check:');
console.log('Current directory:', process.cwd());
console.log('Node version:', process.version);
console.log('Files in current directory:', fs.readdirSync('.'));

// Check for Cloudflare deployment environment
const isCloudflare = process.env.CF_PAGES === 'true';
console.log('Is Cloudflare Pages:', isCloudflare);

if (isCloudflare) {
  console.log('Cloudflare Pages detected, checking for repo directory...');
  
  // Common paths to check
  const possibleRepoPaths = [
    '/opt/buildhome/repo',
    '/opt/build/repo',
    '/opt/repo',
    path.join(process.cwd(), 'repo')
  ];
  
  let repoPath = null;
  
  for (const p of possibleRepoPaths) {
    console.log(`Checking ${p}...`);
    try {
      if (fs.existsSync(p)) {
        console.log(`Found ${p}, checking contents...`);
        const files = fs.readdirSync(p);
        console.log(`Files in ${p}:`, files);
        
        // Check if it contains our expected files
        if (files.some(f => f === '.git' || f === 'package.json' || f === 'index.html')) {
          repoPath = p;
          console.log(`Selected ${p} as repository root`);
          break;
        }
      }
    } catch (error) {
      console.error(`Error checking ${p}:`, error.message);
    }
  }
  
  if (repoPath) {
    console.log(`Moving to ${repoPath}...`);
    process.chdir(repoPath);
    console.log('New current directory:', process.cwd());
    console.log('Files in new directory:', fs.readdirSync('.'));
    
    // Copy our build script here if needed
    if (!fs.existsSync('cloudflare-pages-build.js')) {
      console.log('Copying build script to repo root...');
      const scriptPath = path.join(__dirname, 'cloudflare-pages-build.js');
      if (fs.existsSync(scriptPath)) {
        fs.copyFileSync(scriptPath, path.join(repoPath, 'cloudflare-pages-build.js'));
        console.log('Build script copied successfully');
      } else {
        console.error('Could not find build script to copy');
      }
    }
    
    // Create _redirects file at root
    fs.writeFileSync('_redirects', '/* /index.html 200');
    console.log('Created _redirects file');
    
    if (fs.existsSync('package.json')) {
      console.log('package.json found, ready to proceed with build');
      process.exit(0);
    } else {
      console.error('package.json still not found in repo root');
      
      // Let's look deeper
      const findPackageJson = (dir, maxDepth = 3, currentDepth = 0) => {
        if (currentDepth > maxDepth) return null;
        
        try {
          const items = fs.readdirSync(dir, { withFileTypes: true });
          
          // First check for package.json in current directory
          if (fs.existsSync(path.join(dir, 'package.json'))) {
            return dir;
          }
          
          // Then check subdirectories
          for (const item of items) {
            if (item.isDirectory()) {
              const subdir = path.join(dir, item.name);
              const result = findPackageJson(subdir, maxDepth, currentDepth + 1);
              if (result) return result;
            }
          }
        } catch (error) {
          console.error(`Error searching in ${dir}:`, error.message);
        }
        
        return null;
      };
      
      const packageJsonDir = findPackageJson(repoPath);
      if (packageJsonDir) {
        console.log(`Found package.json in subdirectory: ${packageJsonDir}`);
        process.chdir(packageJsonDir);
        console.log('Changed to directory with package.json:', process.cwd());
        process.exit(0);
      } else {
        console.error('Could not find package.json in any subdirectory');
        process.exit(1);
      }
    }
  } else {
    console.error('Could not find repository root directory');
    process.exit(1);
  }
} else {
  console.log('Not running in Cloudflare Pages environment, exiting normally');
  process.exit(0);
} 