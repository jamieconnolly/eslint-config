'use strict';

module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    'compat',
  ],
  rules: {
    // disallow features that are unsupported by the browsers that you are targeting
    'compat/compat': 'error',
  },
};
