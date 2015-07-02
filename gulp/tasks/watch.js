/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['watchify','browserSync'], function() {
  gulp.watch(config.sass.src,   ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.jade.src, ['jade']);
  gulp.watch(config.pubfiles.src, ['pubfiles']);
  gulp.watch(config.eslint.src, ['eslint']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});