module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](coverage|node_modules)[/\\\\]',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
}
