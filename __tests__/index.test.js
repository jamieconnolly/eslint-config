'use strict';

const eslint = require('eslint');
const isPlainObj = require('is-plain-obj');

it('should export an object', () => {
  const config = require('../index');

  expect(isPlainObj(config)).toBe(true);
  expect(config.extends).toBeTruthy();
  expect(config.parser).toBeTruthy();
});

it('should not contain invalid rules', () => {
  const cli = new eslint.CLIEngine({
    configFile: 'index.js',
    useEslintrc: false,
  });

  const report = cli.executeOnText(
    'export default [];\n'
  );

  expect(report).toBeTruthy();
  expect(report.errorCount).toBe(0);
  expect(report.warningCount).toBe(0);
});
