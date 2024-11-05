
export default {
  testEnvironment: 'node',            // Ensures Jest simulates a Node environment
  //transform: {},                       // Disables Jest's default transform
  //extensionsToTreatAsEsm: ['.js'],     // Specifies that .js files are ES modules
  verbose: true,                      // Prints detailed test results
  testMatch: ['**/tests/**/*.test.js'], // Matches test files in `tests` folder ending in `.test.js`
  collectCoverage: true,              // Enables coverage reporting
  coverageDirectory: 'coverage',      // Specifies the directory for coverage reports
};
