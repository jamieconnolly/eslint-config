const OFF = 'off';
const ERROR = 'error';

module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [ERROR, 'never'],
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': [ERROR, 'always'],
    // enforce one true brace style
    'brace-style': [ERROR, '1tbs', {'allowSingleLine': true}],
    // require camel case names
    'camelcase': [ERROR, {'properties': 'always'}],
    // enforce spacing before and after comma
    'comma-spacing': [ERROR, {'before': false, 'after': true}],
    // enforce one true comma style
    'comma-style': [ERROR, 'last'],
    // require or disallow padding inside computed properties
    'computed-property-spacing': [ERROR, 'never'],
    // enforce consistent naming when capturing the current execution context
    'consistent-this': [ERROR, 'self'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': [ERROR, 'unix'],
    // require function expressions to have a name
    'func-names': ERROR,
    // enforce use of function declarations or expressions
    'func-style': [ERROR, 'declaration'],
    // blacklist certain identifiers to prevent them being used
    'id-blacklist': OFF,
    // this option enforces minimum and maximum identifier lengths
    'id-length': OFF,
    // require identifiers to match the provided regular expression
    'id-match': OFF,
    // specify tab or space width for your code
    'indent': [ERROR, 2, {'SwitchCase': 1}],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [ERROR, 'prefer-double'],
    // enforce spacing between keys and values in object literal properties
    'key-spacing': [ERROR, {'beforeColon': false, 'afterColon': true}],
    // enforce spacing before and after keywords
    'keyword-spacing': [ERROR, {'before': true, 'after': true}],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': [ERROR, 'unix'],
    // enforce empty lines around comments
    'lines-around-comment': [ERROR, {'beforeBlockComment': true}],
    // specify the maximum depth that blocks can be nested
    'max-depth': [ERROR, 4],
    // specify the maximum length of a line in your program
    'max-len': [ERROR, 119, 2, {'ignoreUrls': true, 'ignoreComments': false}],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [ERROR, 3],
    // limits the number of parameters that can be used in the function declaration
    'max-params': [ERROR, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': [ERROR, 10],
    // specify the maximum number of statements allowed per line
    'max-statements-per-line': [ERROR, {'max': 1}],
    // require a capital letter for constructors
    'new-cap': [ERROR, {'newIsCap': true, 'capIsNew': true}],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': ERROR,
    // require or disallow an empty newline after variable declarations
    'newline-after-var': ERROR,
    // require newline before return statement
    'newline-before-return': ERROR,
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': [ERROR, {'ignoreChainWithDepth': 3}],
    // disallow use of the Array constructor
    'no-array-constructor': ERROR,
    // disallow use of bitwise operators
    'no-bitwise': ERROR,
    // disallow use of the continue statement
    'no-continue': ERROR,
    // disallow comments inline after code
    'no-inline-comments': OFF,
    // disallow if as the only statement in an else block
    'no-lonely-if': ERROR,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': ERROR,
    // disallow multiple empty lines
    'no-multiple-empty-lines': [ERROR, {'max': 2, 'maxEOF': 1}],
    // disallow negated conditions
    'no-negated-condition': ERROR,
    // disallow nested ternary expressions
    'no-nested-ternary': ERROR,
    // disallow the use of the Object constructor
    'no-new-object': ERROR,
    // disallow use of unary operators, ++ and --
    'no-plusplus': ERROR,
    // disallow use of certain syntax in code
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    // disallow space between function identifier and application
    'no-spaced-func': ERROR,
    // disallow the use of ternary operators
    'no-ternary': OFF,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ERROR,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ERROR,
    // disallow the use of ternary operators when a simpler alternative exists
    'no-unneeded-ternary': [ERROR, {'defaultAssignment': false}],
    // disallow whitespace before properties
    'no-whitespace-before-property': ERROR,
    // require or disallow padding inside curly braces
    'object-curly-spacing': [ERROR, 'never'],
    // require or disallow one variable declaration per function
    'one-var': [ERROR, {'initialized': 'never'}],
    // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': [ERROR, 'initializations'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': [ERROR, 'always'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': [ERROR, 'after', {'overrides': {'?': 'before', ':': 'before'}}],
    // enforce padding within blocks
    'padded-blocks': [ERROR, 'never'],
    // require quotes around object literal property names
    'quote-props': [ERROR, 'as-needed'],
    // specify whether backticks, double or single quotes should be used
    'quotes': [ERROR, 'single', 'avoid-escape'],
    // require JSDoc comment
    'require-jsdoc': OFF,
    // require or disallow use of semicolons instead of ASI
    'semi': [ERROR, 'always'],
    // enforce spacing before and after semicolons
    'semi-spacing': [ERROR, {'before': false, 'after': true}],
    // sort import declarations within module
    'sort-imports': OFF,
    // sort variables within the same declaration block
    'sort-vars': ERROR,
    // require or disallow a space before blocks
    'space-before-blocks': [ERROR, 'always'],
    // require or disallow a space before function opening parenthesis
    'space-before-function-paren': [ERROR, 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': [ERROR, 'never'],
    // require spaces around operators
    'space-infix-ops': ERROR,
    // require or disallow spaces before/after unary operators
    'space-unary-ops': [ERROR, {'words': true, 'nonwords': false}],
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [ERROR, 'always'],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': OFF,
  },
};
