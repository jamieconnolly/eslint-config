'use strict';

var config = require('../lib/legacy'),
    eslint = require('eslint'),
    isObject = require('is-object'),
    path = require('path'),
    test = require('tape');

test('test basic properties of legacy config', function(t) {
  t.ok(isObject(config.extends), 'extends is an object');
  t.end();
});

test('load legacy config in eslint to validate rule syntax is correct', function(t) {
  var cli = new eslint.CLIEngine({
    configFile: path.join(__dirname, '../lib/legacy.js'),
    useEslintrc: false,
  });

  t.ok(cli.executeOnText('var foo;\n'), 'can executeOnText');
  t.end();
});
