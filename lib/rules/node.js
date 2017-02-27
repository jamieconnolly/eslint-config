'use strict';

var ERROR = 'error';
var OFF = 'off';

module.exports = {
  env: {
    node: true,
  },
  rules: {
    // enforce return after a callback
    'callback-return': ERROR,
    // disallow require() outside of the top-level module scope
    'global-require': ERROR,
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': [ERROR, '^.*(e|E)rr(or)?$'],
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': [ERROR, {allowCall: false, grouping: true}],
    // disallow use of new operator with the require function
    'no-new-require': ERROR,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': ERROR,
    // disallow process.exit()
    'no-process-exit': ERROR,
    // restrict usage of specified node imports
    'no-restricted-imports': OFF,
    // restrict usage of specified node modules
    'no-restricted-modules': OFF,
    // disallow use of synchronous methods
    'no-sync': ERROR,
  },
};
