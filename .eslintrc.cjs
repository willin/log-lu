/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
  root: true,
  extends: ['@hono/eslint-config'],
  rules: {
    semi: ['error', 'always']
  }
};
