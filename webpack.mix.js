const mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

mix.postCss('resources/css/app.css', 'css', [
  tailwindcss('./tailwind.js'),
]);