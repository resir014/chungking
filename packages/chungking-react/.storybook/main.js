const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://github.com/storybookjs/storybook/issues/10231
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // TODO: Remove once Storybook supports Emotion 11.
          '@emotion/core': toPath('../../node_modules/@emotion/react'),
          '@emotion/styled': toPath('../../node_modules/@emotion/styled'),
          'emotion-theming': toPath('../../node_modules/@emotion/react')
        }
      }
    }
  }
}
