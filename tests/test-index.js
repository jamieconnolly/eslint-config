'use strict';

var config = require('../lib/index');
var eslint = require('eslint');
var isObject = require('is-object');
var path = require('path');
var test = require('tape');

test('test basic properties of default config', function(t) {
  t.ok(isObject(config.extends), 'extends is an object');
  t.ok(isObject(config.parser), 'extends is an object');
  t.ok(isObject(config.parserOptions), 'extends is an object');
  t.end();
});

test('load default config in eslint to validate rule syntax is correct', function(t) {
  var cli = new eslint.CLIEngine({
    configFile: path.join(__dirname, '../lib/index.js'),
    useEslintrc: false,
  });

  t.ok(cli.executeOnText('var foo;\n'), 'can executeOnText');
  t.end();
});
