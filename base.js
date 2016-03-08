'use strict';

module.exports = {
  extends: [
    './legacy',
    './rules/ecmascript-6'
  ].map(require.resolve),
  rules: {}
};
