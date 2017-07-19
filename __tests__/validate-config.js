'use strict';

var eslint = require('eslint');

it('load config in eslint to validate rule syntax', function() {
  var data = new eslint.CLIEngine({
    configFile: 'index.js',
    useEslintrc: false,
  }).executeOnText('export default [];\n', 'valid.js');

  expect(data).toBeTruthy();
  expect(data.errorCount).toBe(0);
  expect(data.warningCount).toBe(0);
  expect(data.results[0].messages.length).toBe(0);
});
