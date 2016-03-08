'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/ecmascript-6',
    './rules/node',
    './rules/possible-errors',
    './rules/strict-mode',
    './rules/variables'
  ].map(require.resolve),
  rules: {}
};
