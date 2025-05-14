import gulp, { paths, plugins } from './index.js'

function html() {
	return gulp
		.src(`${paths.src}*.html`)
		.pipe(
			plugins.fileInclude({
				prefix: '@@',
				basepath: '@file'
			})
		)
		.pipe(plugins.replace(/@img\//g, 'img/'))
		.pipe(gulp.dest(`${paths.dist}`))
		.pipe(plugins.browserSync.stream())
}

function styles() {
	return gulp
		.src(`${paths.src}styles/*.scss`)
		.pipe(plugins.scss())
		.pipe(plugins.replace(/@img\//g, '../img/'))
		.pipe(plugins.replace('../../fonts/', '../fonts/'))
		.pipe(plugins.autoPrefixer({ cascade: false }))
		.pipe(gulp.dest(`${paths.dist}styles/`))
		.pipe(plugins.browserSync.stream())
}

function fonts() {
	return gulp
		.src(`${paths.src}fonts/**/*.*`)
		.pipe(
			plugins.fonter({
				formats: ['woff', 'ttf', 'woff2']
			})
		)
		.pipe(gulp.dest(`${paths.dist}fonts/`))
}

function img() {
	return (
		gulp
			.src(`${paths.src}img/**/*.*`)
			// .pipe(plugins.newer(`${paths.dist}img/`))
			// .pipe(plugins.webp())
			// .pipe(gulp.dest(`${paths.dist}img/`))
			// .pipe(gulp.src(`${paths.src}img/**/*.*`))
			.pipe(plugins.newer(`${paths.dist}img/`))
			.pipe(plugins.imagemin())
			.pipe(gulp.dest(`${paths.dist}img/`))
			.pipe(plugins.browserSync.stream())
	)
}

function scripts(cb) {
	gulp
		.src(`${paths.src}js/**/*.js`, { sourcemaps: true })
		.pipe(plugins.webpack())
		.pipe(gulp.dest(`${paths.dist}js/`))
		.pipe(plugins.browserSync.stream())
	cb()
}

const task = {
	html,
	styles,
	fonts,
	img,
	scripts
}

export default task
