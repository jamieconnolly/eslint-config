'use strict';

var ERROR = 'error',
    OFF = 'off';

module.exports = {
  env: {
    es6: true,
  },
  rules: {
    // require braces in arrow function body
    'arrow-body-style': ERROR,
    // require parens in arrow function arguments
    'arrow-parens': ERROR,
    // require space before/after arrow function's arrow
    'arrow-spacing': ERROR,
    // verify calls of super() in constructors
    'constructor-super': ERROR,
    // enforce spacing around the * in generator functions
    'generator-star-spacing': ERROR,
    // disallow modifying variables of class declarations
    'no-class-assign': ERROR,
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ERROR,
    // disallow modifying variables that are declared using const
    'no-const-assign': ERROR,
    // disallow duplicate name in class members
    'no-dupe-class-members': ERROR,
    // disallow duplicate module imports
    'no-duplicate-imports': OFF,
    // disallow use of the new operator with the Symbol object
    'no-new-symbol': ERROR,
    // disallow use of this/super before calling super() in constructors
    'no-this-before-super': ERROR,
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': ERROR,
    // disallow unnecessary constructor
    'no-useless-constructor': ERROR,
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ERROR,
    // require let or const instead of var
    'no-var': ERROR,
    // require method and property shorthand syntax for object literals
    'object-shorthand': ERROR,
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
    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ERROR,
    // enforce sorted import declarations within modules
    'sort-imports': OFF,
    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': ERROR,
    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': ERROR,
  },
};
