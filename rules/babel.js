'use strict';

module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    // require constructor names to begin with a capital letter (ignores decorators)
    'babel/new-cap': ['error', {capIsNew: false, newIsCap: true}],

    // disallow this keywords outside of classes or class-like objects (includes class properties)
    'babel/no-invalid-this': 'error',

    // enforce consistent spacing inside braces (doesn't complain about export x from "mod";)
    'babel/object-curly-spacing': 'error',

    // require or disallow semicolons instead of ASI (includes class properties)
    'babel/semi': 'error',
  },
};
