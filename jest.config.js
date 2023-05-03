/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// eslint-disable-next-line no-undef
module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: ['@emotion/jest/serializer'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  //moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}
