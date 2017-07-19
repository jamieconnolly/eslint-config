'use strict';

module.exports = {
  extends: [
    './rules/babel',
    './rules/best-practices',
    './rules/ecmascript-6',
    './rules/import',
    './rules/node',
    './rules/possible-errors',
    './rules/promise',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
