/* eslint-disable no-unused-vars */
const plugin = require('tailwindcss/plugin');

const chungkingPlugin = plugin.withOptions(
  function handler(_options = { colors: [], cssBase: true }) {
    return function pluginFn({ addComponents, theme: _ }) {
      addComponents(
        {
          '.ck-alert': {
            '@apply p-4 border-l-2': {},
          },
          '.ck-alert--default': {
            '@apply border-l-chungking-grey-500 bg-chungking-grey-500 bg-opacity-25': {},
            '& a': {
              '@apply text-chungking-turquoise-400': {},
            },
          },
          '.ck-alert--primary': {
            '@apply border-l-chungking-blue-500 bg-chungking-blue-500 bg-opacity-25': {},
            '& a': {
              '@apply text-chungking-turquoise-400': {},
            },
          },
          '.ck-alert--success': {
            '@apply border-l-chungking-green-500 bg-chungking-green-500 bg-opacity-25': {},
            '& a': {
              '@apply text-chungking-turquoise-400': {},
            },
          },
          '.ck-alert--warning': {
            '@apply border-l-chungking-orange-500 bg-chungking-orange-500 bg-opacity-25': {},
            '& a': {
              '@apply text-chungking-turquoise-400': {},
            },
          },
          '.ck-alert--error': {
            '@apply border-l-chungking-red-500 bg-chungking-red-500 bg-opacity-25': {},
            '& a': {
              '@apply text-chungking-turquoise-400': {},
            },
          },
        },
        { respectPrefix: false },
      );
    };
  },
  function config() {
    return require('@resir014/tailwind-preset-chungking');
  },
);

module.exports = chungkingPlugin;
