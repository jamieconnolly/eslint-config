'use strict';

module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': ['error', 'always'],
    // enforce one true brace style
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
    // require camel case names
    'camelcase': ['error', {'properties': 'always'}],
    // enforce spacing before and after comma
    'comma-spacing': ['error', {'before': false, 'after': true}],
    // enforce one true comma style
    'comma-style': ['error', 'last'],
    // require or disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],
    // enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'self'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'unix'],
    // require function expressions to have a name
    'func-names': 'error',
    // enforce use of function declarations or expressions
    'func-style': ['error', 'declaration'],
    // blacklist certain identifiers to prevent them being used
    'id-blacklist': 'off',
    // this option enforces minimum and maximum identifier lengths
    'id-length': 'off',
    // require identifiers to match the provided regular expression
    'id-match': 'off',
    // specify tab or space width for your code
    'indent': ['error', 2, {'SwitchCase': 1}],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],
    // enforce spacing between keys and values in object literal properties
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
    // enforce spacing before and after keywords
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': ['error', 'unix'],
    // enforce empty lines around comments
    'lines-around-comment': ['error', {'beforeBlockComment': true}],
    // specify the maximum depth that blocks can be nested
    'max-depth': ['error', 4],
    // specify the maximum length of a line in your program
    'max-len': ['error', 119, 2, {'ignoreUrls': true, 'ignoreComments': false}],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': ['error', 3],
    // limits the number of parameters that can be used in the function declaration
    'max-params': ['error', 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': ['error', 10],
    // require a capital letter for constructors
    'new-cap': ['error', {'newIsCap': true, 'capIsNew': true}],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // require or disallow an empty newline after variable declarations
    'newline-after-var': 'error',
    // require newline before return statement
    'newline-before-return': 'error',
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': ['error', {'ignoreChainWithDepth': 3}],
    // disallow use of the Array constructor
    'no-array-constructor': 'error',
    // disallow use of bitwise operators
    'no-bitwise': 'error',
    // disallow use of the continue statement
    'no-continue': 'error',
    // disallow comments inline after code
    'no-inline-comments': 'off',
    // disallow if as the only statement in an else block
    'no-lonely-if': 'error',
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', {'max': 2, 'maxEOF': 1}],
    // disallow negated conditions
    'no-negated-condition': 'error',
    // disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // disallow the use of the Object constructor
    'no-new-object': 'error',
    // disallow use of unary operators, ++ and --
    'no-plusplus': 'error',
    // disallow use of certain syntax in code
    'no-restricted-syntax': ['error', 'WithStatement'],
    // disallow space between function identifier and application
    'no-spaced-func': 'error',
    // disallow the use of ternary operators
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error',
    // disallow the use of ternary operators when a simpler alternative exists
    'no-unneeded-ternary': ['error', {'defaultAssignment': false}],
    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // require or disallow padding inside curly braces
    'object-curly-spacing': ['error', 'never'],
    // require or disallow one variable declaration per function
    'one-var': ['error', {'initialized': 'never'}],
    // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': ['error', 'initializations'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'always'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': ['error', 'after', {'overrides': {'?': 'before', ':': 'before'}}],
    // enforce padding within blocks
    'padded-blocks': ['error', 'never'],
    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed'],
    // specify whether backticks, double or single quotes should be used
    'quotes': ['error', 'single', 'avoid-escape'],
    // require JSDoc comment
    'require-jsdoc': 'off',
    // require or disallow use of semicolons instead of ASI
    'semi': ['error', 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': ['error', {'before': false, 'after': true}],
    // sort import declarations within module
    'sort-imports': 'error',
    // sort variables within the same declaration block
    'sort-vars': 'error',
    // require or disallow a space before blocks
    'space-before-blocks': ['error', 'always'],
    // require or disallow a space before function opening parenthesis
    'space-before-function-paren': ['error', 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],
    // require spaces around operators
    'space-infix-ops': 'error',
    // require or disallow spaces before/after unary operators
    'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error', 'always'],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off'
  }
};
