/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [
    'nextjs-app/*',
    'public/build/*',
    'integration/*',
    'api/*',
    'build/*',
  ],
}
