'use strict';

module.exports = {
  env: {
    node: true
  },
  rules: {
    // enforce return after a callback
    'callback-return': ['error', ['callback', 'cb', 'next']],
    // disallow require() outside of the top-level module scope
    'global-require': 'error',
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': ['error', '^.*(e|E)rr(or)?$'],
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['error', {'allowCall': false, 'grouping': true}],
    // disallow use of new operator with the require function
    'no-new-require': 'error',
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',
    // disallow process.exit()
    'no-process-exit': 'off',
    // restrict usage of specified node imports
    'no-restricted-imports': 'off',
    // restrict usage of specified node modules
    'no-restricted-modules': 'off',
    // disallow use of synchronous methods
    'no-sync': 'error'
  }
};
