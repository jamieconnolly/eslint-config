const ERROR = 'error';

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    // require braces in arrow function body
    'arrow-body-style': [ERROR, 'as-needed'],
    // require parens in arrow function arguments
    'arrow-parens': [ERROR, 'always'],
    // require space before/after arrow function's arrow
    'arrow-spacing': [ERROR, {'before': true, 'after': true}],
    // verify calls of super() in constructors
    'constructor-super': ERROR,
    // enforce spacing around the * in generator functions
    'generator-star-spacing': [ERROR, {'before': true, 'after': true}],
    // disallow modifying variables of class declarations
    'no-class-assign': ERROR,
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ERROR,
    // disallow modifying variables that are declared using const
    'no-const-assign': ERROR,
    // disallow duplicate name in class members
    'no-dupe-class-members': ERROR,
    // disallow duplicate module imports
    'no-duplicate-imports': ERROR,
    // disallow use of the new operator with the Symbol object
    'no-new-symbol': ERROR,
    // disallow use of this/super before calling super() in constructors
    'no-this-before-super': ERROR,
    // disallow unnecessary constructor
    'no-useless-constructor': ERROR,
    // require let or const instead of var
    'no-var': ERROR,
    // require method and property shorthand syntax for object literals
    'object-shorthand': [ERROR, 'always'],
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ERROR,
    // suggest using const declaration for variables that are never modified after declared
    'prefer-const': ERROR,
    // suggest using Reflect methods where applicable
    'prefer-reflect': ERROR,
    // suggest using the rest parameters instead of arguments
    'prefer-rest-params': ERROR,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': ERROR,
    // suggest using template literals instead of strings concatenation
    'prefer-template': ERROR,
    // disallow generator functions that do not have yield
    'require-yield': ERROR,
    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': [ERROR, 'never'],
    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': [ERROR, {'before': true, 'after': true}],
  },
};
