// 'use strict';

// module.exports = function() {
//   $.gulp.task('js:process', function() {
//     return $.gulp.src($.path.app)
//       .pipe($.gp.sourcemaps.init())
//       .pipe($.gp.concat('app.js'))
//       .pipe($.gp.sourcemaps.write())
//       .pipe($.gulp.dest($.config.root + '/assets/js'))
//   })
// };

'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.browserify({
        entries: $.path.app,
        debug: true
      })
      .transform($.babel, {presets: ["es2015"]})
      .bundle()
      .on('error', $.gp.notify.onError({ title: 'JS' }))
      .pipe($.source('app.js'))
      .pipe($.buffer())
      .pipe($.gp.sourcemaps.init({
        loadMaps: true
      }))
      .pipe($.gp.uglify())
      .pipe($.gp.sourcemaps.write('./maps'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
