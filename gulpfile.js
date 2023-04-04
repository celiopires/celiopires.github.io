// gulp
const gulp = require("gulp");
const {src, dest, watch} = require("gulp");

const pug = require("gulp-pug");

const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

const sitemap = require('gulp-sitemap');
const save = require('gulp-save');

// HTML
function html() {
    return src("assets/pug/*.pug")
    .pipe(pug({pretty: true}))
    .pipe(dest("./"))
}

exports.html = html;

// SITEMAPS
function sitemapxml() {
    gulp.src('*.html', {
        read: false
      })
      .pipe(save('before-sitemap'))
      .pipe(sitemap({
              siteUrl: 'https://celiopires.com'
      }))
      .pipe(gulp.dest('./'))
      .pipe(save.restore('before-sitemap')) 
}

exports.sitemapxml = sitemapxml;

// SASS
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
    watch("*.html", sitemapxml);
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



