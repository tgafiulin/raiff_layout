'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
 
gulp.task('sass', () => {
  return gulp.src('./assets/scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
});

gulp.task('js', function() {
  return gulp.src('./assets/js/*.js') // путь к папке со скриптами
   .pipe(concat('script.js')) // в какой файл объединить
   .pipe(minify({
      ext: {
          min: '.min.js'
      },
      ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('./js/'));
});

gulp.task('watch', () => {
  gulp.watch('./assets/scss/**/*.scss', (done) => {
      gulp.series(['sass'])(done);
  });

  gulp.watch('./assets/js/**/*.js', (done) => {
    gulp.series(['js'])(done);
});
});