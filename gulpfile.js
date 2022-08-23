// gulp
const {src, dest, watch} = require("gulp");
const pug = require("gulp-pug");

// HTML
function html() {
    return src("assets/pug/*.pug")
    .pipe(pug({pretty: true}))
    .pipe(dest("./"))
}

exports.html = html;

// SASS
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

function css() {
    return src("assets/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("assets/css"));
}

exports.css = css;

// Watch files
module.exports.default = function () {
    watch("assets/scss/**/*.scss", css);
    watch("assets/pug/**/*.pug", html);
}


// var gulp        = require('gulp'),
//     watch       = require('gulp-watch'),
//     pug         = require('gulp-pug'),
//     plumber     = require('gulp-plumber'),
//     cleanCSS    = require('gulp-clean-css'),
//     sourcemaps  = require('gulp-sourcemaps'),
//     sass        = require('gulp-sass')(require('sass'));

// // watch
// gulp.task('watch', function() {
//     gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
// });

// // HTML


// // css
// gulp.task('sass', function() {
//     return gulp.src('assets/scss/**/*.scss')
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//     .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('assets/css'));
// });

// // CSS MINIFY
// gulp.task('minify-css', function() {
//     return gulp.src('assets/css/*.css')
//     //.pipe(sourcemaps.init())
//     .pipe(cleanCSS())
//     //.pipe(sourcemaps.write())
//     .pipe(rename('styles.min.css'))
//     .pipe(gulp.dest('assets/css/'));
//   });

// // Default Task
// //gulp.task('default', ['sass', 'watch', 'rev', 'revRewrite']);
// //gulp.task('default', ['watch', 'sass']);
// gulp.task('default', gulp.series('watch'));



