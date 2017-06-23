'use strict';

module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    // ensure a default export is present, given a default import
    'import/default': 'error',

    // report any invalid exports, i.e. re-export of the same name
    'import/export': 'error',

    // ensure consistent use of file extension within the import path
    'import/extensions': ['error', {js: 'never', json: 'always'}],

    // ensure all imports appear before other statements
    'import/first': ['error', 'absolute-first'],

    // limit the maximum number of dependencies a module can have
    'import/max-dependencies': 'error',

    // ensure named imports correspond to a named export in the remote file
    'import/named': 'error',

    // ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': 'error',

    // enforce a newline after import statements
    'import/newline-after-import': 'error',

    // forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // report AMD require and define calls
    'import/no-amd': 'error',

    // forbid anonymous values as default exports
    'import/no-anonymous-default-export': ['error', {allowArray: true}],

    // report CommonJS require calls and module.exports or exports.*
    'import/no-commonjs': 'error',

    // report imported names marked with @deprecated documentation tag
    'import/no-deprecated': 'warn',

    // report repeated import of the same module in multiple places
    'import/no-duplicates': 'warn',

    // forbid require() calls with expressions
    'import/no-dynamic-require': 'error',

    // forbid the use of extraneous packages
    'import/no-extraneous-dependencies': 'error',

    // prevent importing the submodules of other modules
    'import/no-internal-modules': 'off',

    // forbid the use of mutable exports with var or let
    'import/no-mutable-exports': 'error',

    // report use of exported name as identifier of default export
    'import/no-named-as-default': 'warn',

    // report use of exported name as property of default export
    'import/no-named-as-default-member': 'warn',

    // forbid named default exports
    'import/no-named-default': 'error',

    // report namespace imports
    'import/no-namespace': 'error',

    // no Node.js builtin modules
    'import/no-nodejs-modules': 'off',

    // restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // forbid unassigned imports
    'import/no-unassigned-import': 'off',

    // ensure imports point to a file/module that can be resolved
    'import/no-unresolved': 'error',

    // forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // enforce a convention in module import order
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
    }],

    // prefer a default export if module exports a single name
    'import/prefer-default-export': 'error',

    // report potentially ambiguous parse goal (script vs. module)
    'import/unambiguous': 'off',
  },
};
