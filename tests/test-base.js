'use strict';

var config = require('../lib/base'),
    eslint = require('eslint'),
    isObject = require('is-object'),
    path = require('path'),
    test = require('tape');

test('test basic properties of base config', function(t) {
  t.ok(isObject(config.extends), 'extends is an object');
  t.ok(isObject(config.rules), 'rules is an object');
  t.end();
});

test('load base config in eslint to validate rule syntax is correct', function(t) {
  var cli = new eslint.CLIEngine({
    configFile: path.join(__dirname, '../lib/base.js'),
    useEslintrc: false,
  });

  t.ok(cli.executeOnText('var foo;\n'), 'can executeOnText');
  t.end();
});
