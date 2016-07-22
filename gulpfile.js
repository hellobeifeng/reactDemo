var gulp = require('gulp'),
  connect = require('gulp-connect'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  source = require('vinyl-source-stream'),
  uglify = require('gulp-uglify'),
  streamify = require('gulp-streamify'),
  zip = require('gulp')
  port = process.env.port || 5000;

gulp.task('browserify',function(){
  browserify('./app/js/main.js')
    .transform(reactify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist/js'))
});

// live reload 
gulp.task('connect',function(){
  connect.server({
    // root:'./',
    port: port,
    livereload: true,
  })
})

// reload Js 
gulp.task('js',function(){
  gulp.src('./dist/**/*.js')
    .pipe( connect.reload() )
})

// reload html
gulp.task('html',function(){
  gulp.src('./app/**/*.html')
    .pipe( connect.reload() )
});

gulp.task('watch',function(){
  gulp.watch('./dist/**/*.js',['js']);
  gulp.watch('./app/**/*.html',['html']);
  gulp.watch('./app/js/**/*.js',['browserify']);
})

gulp.task('default',['browserify']);

gulp.task('serve',['browserify','connect','watch']);
