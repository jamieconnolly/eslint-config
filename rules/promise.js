'use strict';

module.exports = {
  plugins: [
    'promise',
  ],
  rules: {
    // return inside each then to create readable and reusable Promise chains
    'promise/always-return': 'error',

    // avoid creating new promises outside of utility libs (use pify instead)
    'promise/avoid-new': 'off',

    // enforce the use of catch on un-returned promises
    'promise/catch-or-return': 'error',

    // avoid calling cb() inside of a then() (use nodeify instead)
    'promise/no-callback-in-promise': 'warn',

    // in an ES5 environment, make sure to create a Promise constructor before using
    'promise/no-native': 'off',

    // avoid nested .then() or .catch() statements
    'promise/no-nesting': 'warn',

    // avoid using promises inside of callbacks
    'promise/no-promise-in-callback': 'warn',

    // avoid wrapping values in Promise.resolve or Promise.reject when not needed
    'promise/no-return-wrap': 'error',

    // enforce consistent param names when creating new promises
    'promise/param-names': 'error',

    // prefer async/await to the callback pattern
    'promise/prefer-await-to-callbacks': 'warn',

    // prefer await to then() for reading Promise values
    'promise/prefer-await-to-then': 'warn',
  },
};
