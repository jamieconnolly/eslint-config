'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
  ].map(require.resolve),
  ecmaFeatures: {},
  env: {},
  globals: {},
  rules: {},
};
