'use strict';

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    // require braces in arrow function body
    'arrow-body-style': ['error', 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': ['error', 'always'],
    // require space before/after arrow function's arrow
    'arrow-spacing': ['error', {'before': true, 'after': true}],
    // verify calls of super() in constructors
    'constructor-super': 'error',
    // enforce spacing around the * in generator functions
    'generator-star-spacing': ['error', {'before': true, 'after': true}],
    // disallow modifying variables of class declarations
    'no-class-assign': 'error',
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 'error',
    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',
    // disallow duplicate name in class members
    'no-dupe-class-members': 'error',
    // disallow use of the new operator with the Symbol object
    'no-new-symbol': 'error',
    // disallow use of this/super before calling super() in constructors
    'no-this-before-super': 'error',
    // disallow unnecessary constructor
    'no-useless-constructor': 'error',
    // require let or const instead of var
    'no-var': 'error',
    // require method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'error',
    // suggest using const declaration for variables that are never modified after declared
    'prefer-const': 'error',
    // suggest using Reflect methods where applicable
    'prefer-reflect': 'error',
    // suggest using the rest parameters instead of arguments
    'prefer-rest-params': 'error',
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'error',
    // suggest using template literals instead of strings concatenation
    'prefer-template': 'error',
    // disallow generator functions that do not have yield
    'require-yield': 'error',
    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': ['error', 'never'],
    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': ['error', {'before': true, 'after': true}]
  }
};
