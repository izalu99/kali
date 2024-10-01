/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",


  // A list of paths to modules that run some code to configure or set up the testing framework before each test
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],


  // The test environment that will be used for testing
  testEnvironment: "jest-environment-jsdom",


  // The glob patterns Jest uses to detect test files
   testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
   ],
};

export default createJestConfig(config);
