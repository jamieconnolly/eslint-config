'use strict';

var eslint = require('eslint');
var path = require('path');

it('load config in eslint to validate rule syntax', function() {
  var data = new eslint.CLIEngine({
    configFile: path.join(__dirname, '../lib/index.js'),
    useEslintrc: false,
  }).executeOnText("export default 'foo';\n", 'valid.js');

  expect(data).toBeTruthy();
  expect(data.errorCount).toBe(0);
  expect(data.warningCount).toBe(0);
  expect(data.results[0].messages.length).toBe(0);
});
