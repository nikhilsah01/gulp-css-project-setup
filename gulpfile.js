var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');
    rename = require('gulp-rename'),
    clean = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    notify = require("gulp-notify"),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
    concatCss = require('gulp-concat-css');
    



gulp.task('js', function(){
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Styles js task complete' }));
});



 
gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(concatCss("style.min.css"))
        .pipe(cssmin())
        .pipe(clean())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
        .pipe(notify({ message: 'Styles cs task complete' }))
});



gulp.task('images', function() {
    return gulp.src('images/*')
      .pipe(gulp.dest('dist/images'))
      .pipe(browserSync.stream())
      .pipe(notify({ message: 'Images task complete' }));
  });





  gulp.task('serve',['css'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('js/*.js',['js']);
    gulp.watch('images/*',['images']);
    gulp.watch('css/*.css',['css']);
    gulp.watch("*.html").on("change", reload);
});






 // Watch
gulp.task('watch', function(done) {

    // Watch .scss files
    gulp.watch('css/*', ['css']);
  
    // Watch .js files
    gulp.watch('js/*.js', ['js']);
  
    // Watch image files
    gulp.watch('images/*', ['images']);

    browserSync.reload();
    done();
  

  }); 


gulp.task('default', [ 'js' ,'css' , 'images', 'watch' , 'serve']);