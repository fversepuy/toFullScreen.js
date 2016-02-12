var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('compress', function() {
  return gulp.src('./js/toFullScreen.js')
    .pipe(uglify())
    .pipe(rename('toFullScreen.min.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['compress'], function (){

});
