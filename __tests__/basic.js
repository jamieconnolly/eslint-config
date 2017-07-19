'use strict';

var isPlainObj = require('is-plain-obj');

it('load config in eslint to validate rule syntax', function() {
  var config = require('../index.js');

  expect(isPlainObj(config)).toBe(true);
  expect(config.extends).toBeTruthy();
  expect(config.parser).toBeTruthy();
});
