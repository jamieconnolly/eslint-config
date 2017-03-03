'use strict';

module.exports = {
  plugins: [
    'prefer-object-spread',
  ],
  rules: {
    // ensure a default export is present, given a default import
    'prefer-object-spread/prefer-object-spread': 'error',
  },
};
