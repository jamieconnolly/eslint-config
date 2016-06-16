const OFF = 'off';

module.exports = {
  parser: 'babel-eslint',
  extends: require.resolve('./src/base'),
  rules: {
    'max-len': OFF,
    'no-magic-numbers': OFF,
    'object-curly-newline': OFF,
    'object-property-newline': OFF,
    'quote-props': OFF,
  },
};
