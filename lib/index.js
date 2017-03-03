'use strict';

module.exports = {
  extends: [
    './rules/babel',
    './rules/best-practices',
    './rules/ecmascript-6',
    './rules/import',
    './rules/node',
    './rules/possible-errors',
    './rules/prefer-object-spread',
    './rules/promise',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
};
