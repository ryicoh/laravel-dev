const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

glob.sync('resources/sass/*.scss').map(function(file) {
	mix.sass(file, 'public/css');
});

glob.sync('resources/js/*.js').map(function(file) {
	mix.js(file, 'public/js').webpackConfig({
		module: {
			rules: [{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			}]
		}
	});
});
