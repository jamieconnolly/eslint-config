'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node'
  ].map(require.resolve),
  ecmaFeatures: {},
  env: {},
  globals: {},
  rules: {}
};
