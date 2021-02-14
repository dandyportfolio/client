const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('sass', function(done) {
  gulp
    .src('./src/components/scss/*.scss')
    .pipe(rename({ suffix: '.min' }))
    .pipe(
      sass({
        errLogToConsole: true,
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./src/components/css'));
  done();
});

gulp.task('watch', function(done) {
  gulp.watch('./src/components/scss/*.scss', gulp.series('sass'));
  done();
});

gulp.task('default', gulp.parallel('watch', 'sass'));
