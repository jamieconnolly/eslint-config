'use strict';

module.exports = {
  rules: {
    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': 'error',

    // enforce consistent spacing inside single-line blocks
    'block-spacing': 'error',

    // enforce consistent brace style for blocks
    'brace-style': 'error',

    // enforce camelcase naming convention
    'camelcase': 'error',

    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // require or disallow trailing commas
    'comma-dangle': ['error', 'always-multiline'],

    // enforce consistent spacing before and after commas
    'comma-spacing': 'error',

    // enforce consistent comma style
    'comma-style': 'error',

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': 'error',

    // enforce consistent naming when capturing the current execution context
    'consistent-this': 'error',

    // require or disallow newline at the end of files
    'eol-last': 'error',

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'error',

    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'error',

    // require or disallow named function expressions
    'func-names': 'off',

    // enforce the consistent use of either function declarations or expressions
    'func-style': ['error', 'declaration'],

    // disallow specified identifiers
    'id-blacklist': 'off',

    // enforce minimum and maximum identifier lengths
    'id-length': ['error', {exceptions: ['x', 'y', 'i', 'j', 't', '_', '$']}],

    // require identifiers to match a specified regular expression
    'id-match': 'off',

    // enforce consistent indentation
    'indent': ['error', 2, {MemberExpression: 1, SwitchCase: 1, VariableDeclarator: {const: 3, let: 2, var: 2}}],

    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': 'error',

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': 'error',

    // enforce consistent spacing before and after keywords
    'keyword-spacing': 'error',

    // enforce position of line comments
    'line-comment-position': 'error',

    // enforce consistent linebreak style
    'linebreak-style': 'error',

    // require empty lines around comments
    'lines-around-comment': 'error',

    // require or disallow newlines around directives
    'lines-around-directive': 'error',

    // enforce a maximum depth that blocks can be nested
    'max-depth': 'error',

    // enforce a maximum line length
    'max-len': ['error', 119, 2, {ignoreComments: false, ignoreUrls: true}],

    // enforce a maximum number of lines per file
    'max-lines': ['error', {skipBlankLines: true, skipComments: true}],

    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': ['error', 3],

    // enforce a maximum number of parameters in function definitions
    'max-params': 'error',

    // enforce a maximum number of statements allowed per line
    'max-statements': 'error',

    // enforce a maximum number of statements allowed in function blocks
    'max-statements-per-line': 'error',

    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 'error',

    // require constructor names to begin with a capital letter
    'new-cap': 'off',

    // require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // require or disallow an empty line after variable declarations
    'newline-after-var': 'error',

    // require an empty line before return statements
    'newline-before-return': 'error',

    // require a newline after each call in a method chain
    'newline-per-chained-call': 'error',

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow bitwise operators
    'no-bitwise': 'error',

    // disallow continue statements
    'no-continue': 'error',

    // disallow inline comments after code
    'no-inline-comments': 'error',

    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',

    // disallow mixed binary operators
    'no-mixed-operators': 'error',

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1}],

    // disallow negated conditions
    'no-negated-condition': 'error',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow Object constructors
    'no-new-object': 'error',

    // disallow the unary operators ++ and --
    'no-plusplus': 'error',

    // disallow specified syntax
    'no-restricted-syntax': ['error', 'ForInStatement', 'ForOfStatement', 'LabeledStatement', 'WithStatement'],

    // disallow all tabs
    'no-tabs': 'error',

    // disallow ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error',

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 'error',

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'error',

    // enforce consistent line breaks inside braces
    'object-curly-newline': 'off',

    // enforce consistent spacing inside braces
    'object-curly-spacing': 'off',

    // enforce placing object properties on separate lines
    'object-property-newline': ['error', {allowMultiplePropertiesPerLine: true}],

    // enforce variables to be declared either together or separately in functions
    'one-var': 'error',

    // require or disallow newlines around variable declarations
    'one-var-declaration-per-line': 'error',

    // require or disallow assignment operator shorthand where possible
    'operator-assignment': 'error',

    // enforce consistent linebreak style for operators
    'operator-linebreak': 'error',

    // require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],

    // require quotes around object literal property names
    'quote-props': ['error', 'consistent-as-needed'],

    // enforce the consistent use of either backticks, double, or single quotes
    'quotes': ['error', 'single', {avoidEscape: true}],

    // require JSDoc comments
    'require-jsdoc': 'off',

    // require or disallow semicolons instead of ASI
    'semi': 'off',

    // enforce consistent spacing before and after semicolons
    'semi-spacing': 'error',

    // require object keys to be sorted
    'sort-keys': 'error',

    // require variables within the same declaration block to be sorted
    'sort-vars': 'error',

    // enforce consistent spacing before blocks
    'space-before-blocks': 'error',

    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      asyncArrow: 'always',
      named: 'never',
    }],

    // enforce consistent spacing inside parentheses
    'space-in-parens': 'error',

    // require spacing around infix operators
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error', {
      nonwords: false,
      overrides: {},
      words: true,
    }],

    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': 'error',

    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': 'error',

    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'error',

    // require parenthesis around regex literals
    'wrap-regex': 'off',
  },
};
