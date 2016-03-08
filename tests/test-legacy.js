import eslint from 'eslint';
import isObject from 'is-object';
import path from 'path';
import test from 'tape';

import config from '../legacy';

test('test basic properties of legacy config', (t) => {
  t.ok(isObject(config.extends), 'extends is an object');
  t.ok(isObject(config.rules), 'rules is an object');
  t.end();
});

test('load legacy config in eslint to validate rule syntax is correct', (t) => {
  const cli = new eslint.CLIEngine({
    configFile: path.join(__dirname, '..', 'legacy.js'),
    useEslintrc: false
  });

  t.ok(cli.executeOnText('var foo;\n'), 'can executeOnText');
  t.end();
});
