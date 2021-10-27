const { guessProductionMode } = require("@ngneat/tailwind");

/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/tailwind-config').TailwindConfig } TailwindConfig  */
/** @type { TailwindConfig } */
module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        height: {
          'fit-content': 'fit-content'
        },
        width: {
          'fit-content': 'fit-content'
        },
      },
    },
    variants: {

      extend: {
        backgroundOpacity: ['active'],
        opacity: ['disabled'],
        cursor: ['disabled'],
      },
    },
    plugins: [
    ],
};
