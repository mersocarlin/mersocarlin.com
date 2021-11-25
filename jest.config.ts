import nextJest from 'next/jest'

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: '.' })

// Any custom config you want to pass to Jest
const customJestConfig = {
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

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
const jestConfig = createJestConfig(customJestConfig)

export default jestConfig
