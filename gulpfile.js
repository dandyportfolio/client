var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

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
