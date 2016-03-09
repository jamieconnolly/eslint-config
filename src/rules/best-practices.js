const WARNING = 1;
const ERROR = 2;

module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    'accessor-pairs': [ERROR, {'setWithoutGet': true}],
    // enforces return statements in callbacks of array’s methods
    'array-callback-return': ERROR,
    // treat var statements as if they were block scoped
    'block-scoped-var': ERROR,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [ERROR, 11],
    // require return statements to either always or never specify values
    'consistent-return': ERROR,
    // specify curly brace conventions for all control statements
    'curly': [ERROR, 'multi-line'],
    // require default case in switch statements
    'default-case': ERROR,
    // enforces consistent newlines before or after dots
    'dot-location': [ERROR, 'property'],
    // encourages use of dot notation whenever possible
    'dot-notation': [ERROR, {'allowKeywords': true}],
    // require the use of === and !==
    'eqeqeq': [ERROR, 'allow-null'],
    // make sure for-in loops have an if statement
    'guard-for-in': ERROR,
    // disallow the use of alert, confirm, and prompt
    'no-alert': WARNING,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': ERROR,
    // disallow lexical declarations in case clauses
    'no-case-declarations': ERROR,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': ERROR,
    // disallow else after a return in an if
    'no-else-return': ERROR,
    // disallow use of empty functions
    'no-empty-function': ERROR,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': ERROR,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': ERROR,
    // disallow use of eval()
    'no-eval': ERROR,
    // disallow adding to native types
    'no-extend-native': ERROR,
    // disallow unnecessary function binding
    'no-extra-bind': ERROR,
    // disallow unnecessary labels
    'no-extra-label': ERROR,
    // disallow fallthrough of case statements
    'no-fallthrough': ERROR,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': ERROR,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': ERROR,
    // disallow var and named functions in global scope
    'no-implicit-globals': ERROR,
    // disallow use of eval()-like methods
    'no-implied-eval': ERROR,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': ERROR,
    // disallow usage of __iterator__ property
    'no-iterator': ERROR,
    // disallow use of labeled statements
    'no-labels': [ERROR, {'allowLoop': false, 'allowSwitch': false}],
    // disallow unnecessary nested blocks
    'no-lone-blocks': ERROR,
    // disallow creation of functions within loops
    'no-loop-func': ERROR,
    // disallow the use of magic numbers
    'no-magic-numbers': ERROR,
    // disallow use of multiple spaces
    'no-multi-spaces': ERROR,
    // disallow use of multiline strings
    'no-multi-str': ERROR,
    // disallow reassignments of native objects
    'no-native-reassign': ERROR,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': ERROR,
    // disallow use of new operator for Function object
    'no-new-func': ERROR,
    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': ERROR,
    // disallow use of (old style) octal literals
    'no-octal': ERROR,
    // disallow use of octal escape sequences in string literals
    'no-octal-escape': ERROR,
    // disallow reassignment of function parameters
    'no-param-reassign': [ERROR, {'props': true}],
    // disallow use of process.env
    'no-process-env': ERROR,
    // disallow usage of __proto__ property
    'no-proto': ERROR,
    // disallow declaring the same variable more then once
    'no-redeclare': ERROR,
    // disallow use of assignment in return statement
    'no-return-assign': [ERROR, 'except-parens'],
    // disallow use of `javascript:` urls.
    'no-script-url': ERROR,
    // disallow assignments where both sides are exactly the same
    'no-self-assign': ERROR,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': ERROR,
    // disallow use of comma operator
    'no-sequences': ERROR,
    // restrict what can be thrown as an exception
    'no-throw-literal': ERROR,
    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': ERROR,
    // disallow usage of expressions in statement position
    'no-unused-expressions': ERROR,
    // disallow unused labels
    'no-unused-labels': ERROR,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': ERROR,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': ERROR,
    // disallow use of void operator
    'no-void': ERROR,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [WARNING, {'terms': ['todo', 'fixme', 'xxx'], 'location': 'start'}],
    // disallow use of the with statement
    'no-with': ERROR,
    // require use of the second argument for parseInt()
    'radix': [ERROR, 'always'],
    // requires to declare all vars on top of their containing scope
    'vars-on-top': ERROR,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [ERROR, 'inside'],
    // require or disallow Yoda conditions
    'yoda': [ERROR, 'never'],
  },
};
