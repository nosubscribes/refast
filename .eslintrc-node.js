/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['./.eslintrc-base.js'],
  env: {
    'node': true,
    'jest/globals': true
  }
}
