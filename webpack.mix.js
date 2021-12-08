const mix = require('laravel-mix');
require('laravel-mix-purgecss');
require('@tinypixelco/laravel-mix-wp-blocks');

// Public path helper

// Source path helper
const src = (path) => `resources/assets/${path}`;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

// Public Path
mix.setPublicPath('./public');

// Browsersync
mix.browserSync('scr.demo.beeclover.pro');

// Styles
mix.sass(src`styles/app.scss`, 'styles');

// JavaScript
mix.js(src`scripts/app.js`, 'scripts').vue();
mix
  .js(src`scripts/customizer.js`, 'scripts')
  .blocks(src`scripts/editor.js`, 'scripts')
  .extract();

// Autoload
mix.autoload({
  jquery: ['$', 'window.jQuery'],
});

// Options
mix.options({
  processCssUrls: false,
  postCss: [require('tailwindcss')],
});

mix.purgeCss();

if (!mix.inProduction()) {
  // Assets
  mix
    .copyDirectory(src`images`, 'public/images')
    .copyDirectory(src`fonts`, 'public/fonts');
  mix.sourceMaps().version();
  mix.webpackConfig({
    devtool: 'inline-source-map',
  });
}
