// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('sources/assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('sources/assets/js/**/*.js', ['jshint', 'build-js']);
  gulp.watch('sources/assets/css/**/*.css', ['build-css']);
});

// concat js files.
gulp.task('build-js', function() {
  return gulp.src('sources/assets/js/**/*.js')
    .pipe(sourcemaps.init())
	.pipe(concat('app.js'))
	.pipe(uglify()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

// concat js files.
gulp.task('build-css', function() {
  return gulp.src('sources/assets/css/**/*.css')
    .pipe(sourcemaps.init())
	.pipe(concat('app.css'))
	.pipe(minify()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});