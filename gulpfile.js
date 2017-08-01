/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');


gulp.task('connect', function () {
    connect.server({
        root: 'app/',
        port: 8888
    });
});
/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
gulp.task('sass', function(){
    return gulp.src('src/assets/styles/sass/*.scss')
        .pipe(sass())    // ici on utilise gulp-sass
        .pipe(gulp.dest('src/assets/styles/css/'))
});
gulp.task('watch', function(){
    gulp.watch('src/assets/styles/sass/*.scss', ['sass']);
    // autres observations
});