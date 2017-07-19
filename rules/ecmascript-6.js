'use strict';

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    // require braces around arrow function bodies
    'arrow-body-style': 'error',

    // require parentheses around arrow function arguments
    'arrow-parens': ['error', 'as-needed'],

    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': 'error',

    // require super() calls in constructors
    'constructor-super': 'error',

    // enforce consistent spacing around * operators in generator functions
    'generator-star-spacing': 'error',

    // disallow reassigning class members
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['error', {allowParens: true}],

    // disallow reassigning const variables
    'no-const-assign': 'error',

    // disallow duplicate class members
    'no-dupe-class-members': 'error',

    // disallow duplicate module imports
    'no-duplicate-imports': 'off',

    // disallow new operators with the Symbol object
    'no-new-symbol': 'error',

    // disallow specified modules when loaded by import
    'no-restricted-imports': 'off',

    // disallow this/super before calling super() in constructors
    'no-this-before-super': 'error',

    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',

    // require let or const instead of var
    'no-var': 'error',

    // require or disallow method and property shorthand syntax for object literals
    'object-shorthand': 'error',

    // require arrow functions as callbacks
    'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],

    // require const declarations for variables that are never reassigned after declared
    'prefer-const': 'error',

    // require destructuring from arrays and/or objects
    'prefer-destructuring': 'error',

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // require rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // require spread operators instead of .apply()
    'prefer-spread': 'error',

    // require template literals instead of string concatenation
    'prefer-template': 'error',

    // require generator functions to contain yield
    'require-yield': 'error',

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': 'error',

    // enforce sorted import declarations within modules
    'sort-imports': 'off',

    // require symbol descriptions
    'symbol-description': 'error',

    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 'error',

    // require or disallow spacing around the * in yield* expressions
    'yield-star-spacing': 'error',
  },
};
