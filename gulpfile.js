import gulp, { paths, task, plugins } from './gulp/index.js'

const { html, styles, fonts, scripts, img } = task

function copyFiles() {
	return gulp.src(`${paths.src}**/*.*`).pipe(gulp.dest(`${paths.dist}`))
}

function cleanDist() {
	return gulp.src(`${paths.dist}**/`, { read: false }).pipe(plugins.clean())
}
function startServer() {
	plugins.browserSync.reload()
}

function watching() {
	gulp.watch(`${paths.src}styles/**/*.scss`, styles)
	gulp.watch(`${paths.src}js/**/*.js`, scripts)
	gulp.watch(`${paths.src}**/*.{html,htm}`, html).on('change', () => startServer())
}

const dev = gulp.series(
	cleanDist,
	gulp.parallel(html, fonts, styles, img, scripts),
	gulp.parallel(watching, startServer)
)

const build = gulp.series(
	cleanDist,
	gulp.parallel(html, fonts, styles, img, scripts),
)

export default dev
export { scripts, build, watching, cleanDist, copyFiles, startServer }
