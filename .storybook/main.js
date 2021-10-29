const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

// https://github.com/radix-ui/primitives/blob/e30fccc1769721041293ee3475d81ccd6394bbfa/.storybook/main.js#L21-L30
function convertTsConfigPathsToWebpackAliases() {
  const rootDir = path.resolve(__dirname, '../')
  const tsconfig = require('../tsconfig.json')
  const tsconfigPaths = Object.entries(tsconfig.compilerOptions.paths)

  return tsconfigPaths.reduce((aliases, [realPath, mappedPath]) => {
    aliases[realPath] = path.join(rootDir, mappedPath[0])
    return aliases
  }, {})
}

module.exports = {
  stories: ['../packages/chungking-react/**/*.stories.mdx', '../packages/chungking-react/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://github.com/storybookjs/storybook/issues/10231
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...convertTsConfigPathsToWebpackAliases(),
          // TODO: Remove once Storybook supports Emotion 11.
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react')
        }
      }
    }
  }
}
