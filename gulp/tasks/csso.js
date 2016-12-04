'use strict';

module.exports = function() {
  $.gulp.task('csso', function() {
    return $.gulp.src($.config.root + '/assets/css')
    	.pipe(csso())
    	.pipe(gulp.dest($.config.root + '/assets/css'))
  });
};


