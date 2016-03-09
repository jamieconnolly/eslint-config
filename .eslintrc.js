const OFF = 0;

module.exports = {
  parser: 'babel-eslint',
  extends: require.resolve('./src/base'),
  rules: {
    'no-magic-numbers': OFF,
    'quote-props': OFF,
  },
};
