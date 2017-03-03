/**
 * Created by Yan on 2017/3/2.
 */

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch(['script/**/*.js','css/**/*.css','html/**/*.html']).on('change', reload);

})