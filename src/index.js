module.exports = {
  extends: [
    './base',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
