'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/possible-errors',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
};
