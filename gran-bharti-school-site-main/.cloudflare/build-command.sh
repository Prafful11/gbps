#!/bin/bash
echo "Installing dependencies..."
npm install
echo "Running build script..."
node build.js
echo "Build completed!" 