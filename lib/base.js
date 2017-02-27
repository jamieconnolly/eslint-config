'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/ecmascript-6',
    './rules/import',
    './rules/node',
    './rules/possible-errors',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
};
