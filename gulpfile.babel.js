import gulp from 'gulp';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babel from 'babelify';

import postcss from 'gulp-postcss';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';

import pjson from './package.json';

const paths = {
	src: './src',
	dist: './dist'
};

gulp.task('js', () => {
	let bundler = browserify(`${paths.src}/main.js`, { debug: true }).transform(babel);
	return bundler
		.bundle()
		.on('error', function(err) { console.error(err); this.emit('end'); })
		.pipe(source(pjson.name))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(paths.dist));
});

gulp.task('styles', () => {
	return gulp
		.src(`${paths.src}/*.css`)
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(gulp.dest(`${paths.dist}`));
});

gulp.task('watch', () => {
	gulp.watch(`${paths.src}/*.js`, ['js']);
	gulp.watch(`${paths.src}/*.css`, ['styles']);
});
