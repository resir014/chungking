/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  // transform typescript files with esbuild-jest
  transform: {
    '^.+\\.tsx?$': ['esbuild-jest'],
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.story.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/stories/**/*.{ts,tsx}',
    '!src/index.{ts,tsx}',
  ],
};

module.exports = config;
