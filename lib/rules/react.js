'use strict';

var ERROR = 'error';
var OFF = 'off';
var WARNING = 'warn';

module.exports = {
  plugins: [
    'react',
  ],
  rules: {
    // prevent missing displayName in a React component definition
    'react/display-name': ERROR,
    // forbid certain propTypes
    'react/forbid-prop-types': ERROR,
    // enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': ERROR,
    // validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': ERROR,
    // enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': ERROR,
    // enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': ERROR,
    // restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ERROR,
    // enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': [ERROR, 'multiline'],
    // enforce event handler naming conventions in JSX
    'react/jsx-handler-names': ERROR,
    // validate JSX indentation
    'react/jsx-indent': [ERROR, 2],
    // validate props indentation in JSX
    'react/jsx-indent-props': [ERROR, 2],
    // validate JSX has key prop when in array or iterator
    'react/jsx-key': ERROR,
    // limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': OFF,
    // prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': ERROR,
    // prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': ERROR,
    // prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': OFF,
    // prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': ERROR,
    // disallow undeclared variables in JSX
    'react/jsx-no-undef': ERROR,
    // enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': ERROR,
    // enforce props alphabetical sorting
    'react/jsx-sort-props': [ERROR, {callbacksLast: true, ignoreCase: false, shorthandFirst: true}],
    // validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': ERROR,
    // prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': ERROR,
    // prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': ERROR,
    // prevent comments from being inserted as text nodes
    'react/no-comment-textnodes': ERROR,
    // prevent usage of dangerous JSX properties
    'react/no-danger': ERROR,
    // prevent usage of deprecated methods
    'react/no-deprecated': WARNING,
    // prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': [ERROR, 'allow-in-func'],
    // prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': [ERROR, 'allow-in-func'],
    // prevent direct mutation of this.state
    'react/no-direct-mutation-state': ERROR,
    // prevent usage of isMounted
    'react/no-is-mounted': ERROR,
    // prevent multiple component definition per file
    'react/no-multi-comp': [ERROR, {ignoreStateless: true}],
    // prevent usage of the return value of React.render
    'react/no-render-return-value': ERROR,
    // prevent usage of setState
    'react/no-set-state': ERROR,
    // prevent using string references in ref attribute
    'react/no-string-refs': ERROR,
    // prevent usage of unknown DOM property
    'react/no-unknown-property': ERROR,
    // enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': ERROR,
    // enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': ERROR,
    // prevent missing props validation in a React component definition
    'react/prop-types': ERROR,
    // prevent missing React when using JSX
    'react/react-in-jsx-scope': ERROR,
    // restrict file extensions that may be required
    'react/require-extension': ERROR,
    // enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': ERROR,
    // enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': ERROR,
    // prevent extra closing tags for components without children
    'react/self-closing-comp': ERROR,
    // enforce component methods order
    'react/sort-comp': ERROR,
    // enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': [ERROR, {callbacksLast: true}],
    // prevent missing parentheses around multilines JSX
    'react/wrap-multilines': [ERROR, {assignment: false, declaration: false}],
  },
};
