// gulp
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
//var rename = require('gulp-rename');
//var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

// css
gulp.task('sass', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css'));
});

// watch
gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);