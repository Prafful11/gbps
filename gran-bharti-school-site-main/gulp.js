#!/usr/bin/env node

// This file is a shim for environments that try to call 'gulp build'
console.log('gulp.js: Forwarding to build.js...');
require('./build.js'); 