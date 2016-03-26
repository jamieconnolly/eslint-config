const OFF = 'off';
const ERROR = 'error';

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    'init-declarations': [ERROR, 'always'],
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': ERROR,
    // disallow deletion of variables
    'no-delete-var': ERROR,
    // disallow labels that share a name with a variable
    'no-label-var': ERROR,
    // restrict usage of specified global variables
    'no-restricted-globals': OFF,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': ERROR,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': ERROR,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': ERROR,
    // disallow use of undefined when initializing variables
    'no-undef-init': ERROR,
    // disallow use of undefined variable
    'no-undefined': ERROR,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [ERROR, {'vars': 'all', 'args': 'after-used'}],
    // disallow use of variables before they are defined
    'no-use-before-define': [ERROR, 'nofunc'],
  },
};
