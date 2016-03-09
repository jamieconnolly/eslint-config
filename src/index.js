module.exports = {
  extends: [
    './base',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
