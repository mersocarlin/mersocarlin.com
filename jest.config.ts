export default {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@mersocarlin.com/(.*)': '<rootDir>/src/$1',
    '@blog/(.*)': '<rootDir>/src/modules/blog/$1',
    '@common/(.*)': '<rootDir>/src/modules/common/$1',
    '@twitter/(.*)': '<rootDir>/src/modules/twitter/$1',
  },
}
