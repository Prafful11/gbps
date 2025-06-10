#!/bin/bash
echo "Current directory: $(pwd)"
echo "Listing files:"
ls -la
echo "Running npm install..."
npm install
echo "Running build command..."
npm run build 