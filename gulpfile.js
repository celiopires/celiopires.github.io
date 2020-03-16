// gulp
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
//var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var rev = require('gulp-rev');

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

// rename
gulp.task('rev', function() {
	gulp.src(['assets/css/*.css', 'assets/js/*.js'])
		.pipe(gulp.dest('build/assets'))  // Copy original assets to build dir
		.pipe(rev())
		.pipe(gulp.dest('build/assets'))  // Write rev'd assets to build dir
		.pipe(rev.manifest())
		.pipe(gulp.dest('build/assets'))  // Write manifest to build dir
});

// Default Task
gulp.task('default', ['sass', 'watch', 'rev']);