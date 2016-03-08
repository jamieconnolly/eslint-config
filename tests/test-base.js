import config from '../base';
import eslint from 'eslint';
import isObject from 'is-object';
import path from 'path';
import test from 'tape';

test('test basic properties of base config', (t) => {
  t.ok(isObject(config.extends), 'extends is an object');
  t.ok(isObject(config.rules), 'rules is an object');
  t.end();
});

test('load base config in eslint to validate rule syntax is correct', (t) => {
  const cli = new eslint.CLIEngine({
    configFile: path.join(__dirname, '..', 'base.js'),
    useEslintrc: false
  });

  t.ok(cli.executeOnText('var foo;\n'), 'can executeOnText');
  t.end();
});
