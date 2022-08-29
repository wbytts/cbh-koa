export default {
  preset: 'ts-jest',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['node_modules'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/__tests__/fixtures/'],
};
