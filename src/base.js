module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './rules/best-practices',
    './rules/ecmascript-6',
    './rules/node',
    './rules/possible-errors',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
  rules: {},
};
