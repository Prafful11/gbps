// gulpfile.js
import gulp from 'gulp';
import { deleteAsync } from 'del';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import cleanCSS from 'gulp-clean-css';
import rev from 'gulp-rev';
import revRewrite from 'gulp-rev-rewrite';
import { readFileSync } from 'fs';
import path from 'path';

// Clean dist folder
const clean = () => deleteAsync(['dist']);

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
  const manifest = readFileSync('dist/assets/rev-manifest.json');
  return gulp.src('dist/**/*.html')
    .pipe(revRewrite({ manifest }))
    .pipe(gulp.dest('dist'));
};

// Copy other assets that don't need processing
const copyAssets = () => {
  return gulp.src([
    'public/**/*',
    '!public/**/*.html'
  ])
    .pipe(gulp.dest('dist'));
};

// Post-build optimization tasks
const postBuild = gulp.series(
  minifyHTML,
  optimizeJS,
  optimizeCSS,
  revision,
  rewrite
);

// Define complex tasks
const build = gulp.series(
  clean,
  optimizeImages,
  copyAssets,
  postBuild
);

// Export tasks
export { 
  clean,
  optimizeImages,
  minifyHTML,
  optimizeJS,
  optimizeCSS,
  revision,
  rewrite,
  copyAssets,
  postBuild,
  build as default
}; 