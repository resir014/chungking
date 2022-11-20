/* eslint-disable no-unused-vars */
const { colors } = require('@resir014/chungking-core');
const plugin = require('tailwindcss/plugin');
const Alert = require('./components/alert');
const Badge = require('./components/badge');

const components = [Alert, Badge];

const chungkingPlugin = plugin.withOptions(
  function handler(options = { colors: [], cssBase: true }) {
    const optionColors = [
      ...(Object.keys(colors).filter(color => color !== 'white' && color !== 'black') || []),
      ...(options.colors || []),
    ];
    const componentMap = components.map(component => component(optionColors));

    return function pluginFn({ addComponents, theme: _ }) {
      addComponents(componentMap, { respectPrefix: false });
    };
  },
  function config() {
    return require('@resir014/tailwind-preset-chungking');
  },
);

module.exports = chungkingPlugin;
