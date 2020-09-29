// gulp
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
//var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var rev = require('gulp-rev');
var revRewrite = require('gulp-rev-rewrite');

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

// Adding hash to the file name
gulp.task('rev', function() {
    gulp.src('assets/css/*.css')
        .pipe(gulp.dest('assets/css')) // Add the generated hash file to the packaging directory
        .pipe(rev())
        .pipe(gulp.dest('assets/css'))// write rev'd assets to build dir
        .pipe(rev.manifest('css-rev.json'))
        .pipe(gulp.dest('assets/css'))   // Add map mapping files to the packaging directory
});

// Rewriting html url
gulp.task('revRewrite', function() {
    const cssManifest = gulp.src('assets/css/css-rev.json'); //Get the css mapping file
    return gulp.src('./*.html')
      .pipe(revRewrite({manifest: cssManifest})) // Replace the referenced css with a version number name
      .pipe(gulp.dest(''))
  });

// Default Task
// gulp.task('default', ['sass', 'watch', 'rev', 'revRewrite']);
gulp.task('default', ['sass', 'watch']);