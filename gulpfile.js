// Gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');

// Adds sass compiler
gulp.task('sass', function() {
  gulp.src('styles/main.scss')
  .pipe(sass({style: 'expanded'}))
  .pipe(gulp.dest('gulp-compiled/css'))
});
