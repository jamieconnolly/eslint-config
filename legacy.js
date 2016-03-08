'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/possible-errors'
  ].map(require.resolve),
  ecmaFeatures: {},
  env: {},
  globals: {},
  rules: {}
};
