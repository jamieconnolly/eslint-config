'use strict';

module.exports = {
  extends: [
    './base',
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
