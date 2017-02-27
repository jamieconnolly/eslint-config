'use strict';

var ERROR = 'error';
var OFF = 'off';

module.exports = {
  extends: require.resolve('./lib/legacy'),
  rules: {
    'comma-dangle': [ERROR, 'always-multiline'],
    'max-len': OFF,
    'no-magic-numbers': OFF,
    'object-curly-newline': OFF,
    'object-property-newline': OFF,
    'quote-props': OFF,
  },
};
