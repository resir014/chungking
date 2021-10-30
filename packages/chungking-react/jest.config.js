module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.story.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/stories/**/*.{ts,tsx}',
    '!src/index.{ts,tsx}'
  ]
}
