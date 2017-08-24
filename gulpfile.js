var gulp = require('gulp')
var browsersync = require('browser-sync').create()
var reload = browsersync.reload

gulp.task('default', function () {
    
})

gulp.task('browser-sync', function () {
    browsersync.init({
        server: {
            baseDir: './'
        }
    })
})

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('*.html').on('change', reload)
    gulp.watch('./pages/*.html').on('change', reload)
    gulp.watch('./css/*.css').on('change', reload)
})