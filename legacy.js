'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors'
  ].map(require.resolve),
  ecmaFeatures: {},
  env: {},
  globals: {},
  rules: {}
};
