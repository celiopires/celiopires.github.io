// gulp
var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    plumber     = require('gulp-plumber'),
    cleanCSS    = require('gulp-clean-css'),
    sourcemaps  = require('gulp-sourcemaps'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename');

// css
gulp.task('sass', function() {
    return gulp.src('assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'));
});

// watch
gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
});

// CSS MINIFY
gulp.task('minify-css', function() {
    return gulp.src('assets/css/*.css')
    //.pipe(sourcemaps.init())
    .pipe(cleanCSS())
    //.pipe(sourcemaps.write())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('assets/css/'));
  });

// Default Task
//gulp.task('default', ['sass', 'watch', 'rev', 'revRewrite']);
gulp.task('default', ['watch', 'sass']);
