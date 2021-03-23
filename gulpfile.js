const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const JS_SRC = 'src/js/**/*.js';
const JS_DEST_FILENAME = '/app-js.min.js';
const JS_DEST_FOLDER = 'js';
const CSS_SRC = 'src/scss/**/*.scss'
const CSS_DEST_FILENAME = '/app-js.style.css';
const CSS_DEST_FOLDER = 'css';

sass.compiler = require('node-sass');

gulp.task('build:js', function (cb) {
  gulp.src(JS_SRC)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat(JS_DEST_FILENAME))
    .pipe(uglify())
    .pipe(gulp.dest(JS_DEST_FOLDER));
  cb();
});

gulp.task('build:css', function (cb) {
  gulp.src(CSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(CSS_DEST_FILENAME))
    .pipe(gulp.dest(CSS_DEST_FOLDER));
  cb();
})

gulp.task('build', gulp.parallel(
  'build:js',
  'build:css'
))

gulp.task('watch', function () {
  gulp.watch(JS_SRC, { delay: 500 }, gulp.series('build:js'))
  gulp.watch(CSS_SRC, { delay: 500 }, gulp.series('build:css'))
});


gulp.task('default', gulp.parallel('build'));