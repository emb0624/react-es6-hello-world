var gulp = require('gulp');
var changed    = require('gulp-changed');
var config = require('../config').bootstrap;

gulp.task('bootstrap', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
