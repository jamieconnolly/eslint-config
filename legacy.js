'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/possible-errors',
    './rules/variables'
  ].map(require.resolve),
  rules: {
    // disallow trailing commas in object literals
    'comma-dangle': [2, 'never']
  }
};
