'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/possible-errors',
    './rules/stylistic-issues',
    './rules/variables'
  ].map(require.resolve),
  rules: {
    // disallow trailing commas in object literals
    'comma-dangle': ['error', 'never'],
    // require effective use of strict mode directives
    'strict': ['error', 'global']
  }
};
