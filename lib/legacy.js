'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/possible-errors',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
};
