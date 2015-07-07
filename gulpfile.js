var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify       = require('gulp-uglify'),
	rename       = require('gulp-rename'),
	minifyCSS    = require('gulp-minify-css'),
	plumber	     = require('gulp-plumber'),
	svgmin		 = require('gulp-svgmin'),
	svgSprite    = require('gulp-svg-sprites'),
	cheerio	     = require('gulp-cheerio');

gulp.task('css', function () {
	return gulp.src('src/scss/screen.scss')
	.pipe(sass({errLogToConsole: true}))
	.pipe(autoprefixer('last 4 version'))
	.pipe(gulp.dest('app/css'))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('svg-sprite', function() {
	return gulp.src('src/svg/*.svg')
	.pipe(svgmin({
		js2svg: {
			pretty: true
		},
		plugins: [{
			removeDesc: true
		}, {
			cleanupIDs: true
		}, {
			mergePaths: false
		}]
	}))
	.pipe(cheerio({
		run: function($, file) {
			$('[fill]:not([fill="currentColor"])').removeAttr('fill');
			$('title').remove();
			$('[fill-rule]').removeAttr('fill-rule');
			$('[opacity]').removeAttr('opacity');
		},
		parserOptions: {
			xmlMode: true
		}
	}))
	.pipe(svgSprite({
		mode: 'symbols',
		selector: 'icon-%f',
		preview: false,
		svg: {
			symbols: 'icons.svg'
		}
	}))
	.pipe(gulp.dest('app/img'));
});

gulp.task('browser-sync', function() {
	browserSync.init(null, {
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});

gulp.task('default', ['css', 'browser-sync'], function () {
	gulp.watch('src/scss/*.scss', ['css']);
	gulp.watch('app/*.html', ['bs-reload']);
});






