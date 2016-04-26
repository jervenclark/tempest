'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    return gulp.src('src/views/**/*')
      .pipe(gulp.dest('dist'))
      .pipe(plugins.livereload())
      .pipe(plugins.notify({
        message: 'Views task complete'
      }));
  }
}
