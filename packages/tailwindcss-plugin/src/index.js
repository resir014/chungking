const plugin = require('tailwindcss/plugin');

const chungkingPlugin = plugin.withOptions(
  function handler(options = { colors: [], cssBase: true }) {
    return function pluginFn({ addComponents, theme }) {
      addComponents({
        '.alert': {
          '@apply p-4 border-l-2': {},
        },
        '.alert--default': {
          '@apply border-l-chungking-grey-500 bg-chungking-grey-500 bg-opacity-25': {},
          '& a': {
            '@apply text-chungking-turquoise-400': {},
          },
        },
      });
    };
  },
  function config() {
    return require('@resir014/tailwind-preset-chungking');
  },
);

module.exports = chungkingPlugin;
