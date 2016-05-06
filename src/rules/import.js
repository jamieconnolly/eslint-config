const OFF = 'off';
const ERROR = 'error';

module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    // disable original `eslint` rule, enabled by `eslint-plugin-import`
    'no-duplicate-imports': OFF,
    // ensure a default export is present, given a default import
    'import/default': ERROR,
    // disallow any invalid exports, i.e. re-export of the same name
    'import/export': ERROR,
    // ensure consistent use of file extension within the import path
    'import/extensions': [ERROR, 'never'],
    // ensure all imports appear before other statements
    'import/imports-first': [ERROR, 'absolute-first'],
    // ensure named imports correspond to a named export in the remote file
    'import/named': ERROR,
    // ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': OFF,
    // enforce a newline after import statements
    'import/newline-after-import': ERROR,
    // disallow AMD require and define calls
    'import/no-amd': ERROR,
    // disallow CommonJS require calls and module.exports or exports.*
    'import/no-commonjs': ERROR,
    // disallow imported names marked with @deprecated documentation tag
    'import/no-deprecated': ERROR,
    // disallow repeated import of the same module in multiple places
    'import/no-duplicates': ERROR,
    // disallow the use of extraneous packages
    'import/no-extraneous-dependencies': [ERROR, {'devDependencies': false, 'optionalDependencies': false}],
    // disallow the use of mutable exports with `var` or `let`
    'import/no-mutable-exports': ERROR,
    // disallow use of exported name as identifier of default export
    'import/no-named-as-default': ERROR,
    // disallow use of exported name as property of default export
    'import/no-named-as-default-member': ERROR,
    // disallow namespace imports
    'import/no-namespace': ERROR,
    // disallow the use of Node.js builtin modules
    'import/no-nodejs-modules': OFF,
    // ensure imports point to a file/module that can be resolved
    'import/no-unresolved': ERROR,
    // enforce a convention in module import order
    'import/order': [ERROR, {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],
  },
};
