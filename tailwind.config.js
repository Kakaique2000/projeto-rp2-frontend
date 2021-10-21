const { guessProductionMode } = require("@ngneat/tailwind");

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
        }
      },
    },
    variants: {
      extend: {
      },
    },
    plugins: [
    ],
};
