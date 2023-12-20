/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
  root: true,
  extends: ['@hono/eslint-config'],
  rules: {
    semi: ['error', 'always'],
    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=16.0.0',
        ignores: []
      }
    ]
  }
};
