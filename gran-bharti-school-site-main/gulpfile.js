// gulpfile.js
const gulp = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
const fs = require('fs');
const path = require('path');

// Clean dist folder
const clean = () => del(['dist']);

// Optimize images
const optimizeImages = () => {
  return gulp.src('src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
};

// Minify HTML after Vite build
const minifyHTML = () => {
  return gulp.src('dist/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('dist'));
};

// Further optimize JS after Vite build
const optimizeJS = () => {
  return gulp.src('dist/assets/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/assets'));
};

// Further optimize CSS after Vite build
const optimizeCSS = () => {
  return gulp.src('dist/assets/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/assets'));
};

// Add cache busting with rev
const revision = () => {
  return gulp.src('dist/assets/**/*.{css,js}')
    .pipe(rev())
    .pipe(gulp.dest('dist/assets'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/assets'));
};

// Replace references in HTML to the revisioned filenames
const rewrite = () => {
  try {
    const manifest = fs.readFileSync('dist/assets/rev-manifest.json');
    return gulp.src('dist/**/*.html')
      .pipe(revRewrite({ manifest }))
      .pipe(gulp.dest('dist'));
  } catch (err) {
    console.error('Error in rewrite task:', err);
    // Return an empty stream to avoid breaking the pipeline
    return gulp.src('dist/**/*.html').pipe(gulp.dest('dist'));
  }
};

// Copy other assets that don't need processing
const copyAssets = () => {
  return gulp.src([
    'public/**/*',
    '!public/**/*.html'
  ])
    .pipe(gulp.dest('dist'));
};

// Define simpler tasks without rev
const simpleBuild = gulp.series(
  minifyHTML,
  optimizeJS,
  optimizeCSS
);

// Post-build optimization tasks
const postBuild = gulp.series(
  simpleBuild
);

// Define complex tasks
const build = gulp.series(
  copyAssets,
  postBuild
);

// Export tasks
exports.clean = clean;
exports.optimizeImages = optimizeImages;
exports.minifyHTML = minifyHTML;
exports.optimizeJS = optimizeJS;
exports.optimizeCSS = optimizeCSS;
exports.revision = revision;
exports.rewrite = rewrite;
exports.copyAssets = copyAssets;
exports.postBuild = postBuild;
exports.default = build;