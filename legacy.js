'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/possible-errors',
    './rules/variables'
  ].map(require.resolve),
  ecmaFeatures: {},
  env: {},
  globals: {},
  rules: {}
};
