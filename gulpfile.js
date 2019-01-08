const gulp = require('gulp'),
    browserSync = require('browser-sync').create();
    reload = browserSync.reload;

function reload() {
    browserSync.reload();
}

function watch() {
    browserSync.init({
		proxy: "localhost:81",
		port: "3000",
		notify: false,
		tunnel: true
	});
    gulp.watch(["*.html", "custom/styles/**/*css", "custom/scripts/**/*js"]).on('change', browserSync.reload);
}

exports.watch = watch

var build = gulp.parallel(watch);

gulp.task('default', build);
