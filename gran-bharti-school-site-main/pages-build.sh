#!/bin/bash

# Debug information
echo "Current directory: $(pwd)"
echo "Listing files:"
ls -la

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Ensure the _redirects file exists
echo "Creating _redirects file..."
echo "/* /index.html 200" > dist/_redirects

echo "Build process completed." 