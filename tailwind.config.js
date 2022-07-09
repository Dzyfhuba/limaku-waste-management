/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                fadeIn: 'fadeIn 5s ease-in-out',
            },
            keyframes: theme => ({
                fadeIn: {
                  '0%': { opacity: theme('opacity.0') },
                  '100%': { opacity: theme('opacity.70') },
                },
              }),

        },
    },
    darkMode: 'class',

    plugins: [require('@tailwindcss/forms')],
};
