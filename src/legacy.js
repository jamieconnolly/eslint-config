const ERROR = 2;

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/possible-errors',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
  rules: {
    // disallow trailing commas in object literals
    'comma-dangle': [ERROR, 'never'],
    // require effective use of strict mode directives
    'strict': [ERROR, 'global'],
  },
};
