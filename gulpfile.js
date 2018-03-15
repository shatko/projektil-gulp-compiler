// Gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');


// Adds sass prefixer
gulp.task('app_scss', function(){
  return gulp.src('styles/main.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('gulp-compiled/css'));
});

// Adds sass compiler
gulp.task('sass', ['app_scss'], function() {
  gulp.src('gulp-compiled/css/main.css')
  .pipe(sass({style: 'expanded'}))
  // Adds minifier
  .pipe(cleanCSS({compatibility: '*'}))
  .pipe(gulp.dest('gulp-compiled/css'))
});

// Adds gulp watch tasks
gulp.task('watch', function () {
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('styles/common/*.scss', ['sass']);
    gulp.watch('styles/components/*.scss', ['sass']);
    gulp.watch('styles/layouts/*.scss', ['sass']);
});
