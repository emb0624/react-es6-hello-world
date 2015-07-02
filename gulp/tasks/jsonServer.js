var gulp = require('gulp');
var config = require('../config').jsonServer;
var server = require('gulp-json-server');
var rename = require("gulp-rename");

gulp.task('jsonServer', function() {
  return gulp.src(config.fakeDataSrc)
  .pipe(rename('db.json'))
  .pipe(gulp.dest(config.src))
  .pipe(server(
    {
      port: config.port
    }
  ));
} );
