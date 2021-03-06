# eslint-config

[![Build status][build-status-image]][build-status-url]
[![Dependency status][dependency-status-image]][dependency-status-url]
[![MIT License][license-image]][license-url]
[![Version][version-image]][version-url]

> My own opinionated ESLint configuration.

## Installation

```
$ npm install --save-dev @jamieconnolly/eslint-config
```

## Usage

To get started, add this to your `.eslintrc.js` file:

```js
module.exports = {
  extends: '@jamieconnolly'
};
```

*Note: We can omit the `/eslint-config` suffix since it is automatically assumed by ESLint.*

## License

[MIT License][license-url]

[build-status-image]: https://api.travis-ci.org/jamieconnolly/eslint-config.svg?branch=master
[build-status-url]: https://travis-ci.org/jamieconnolly/eslint-config

[dependency-status-image]: https://david-dm.org/jamieconnolly/eslint-config/master.svg
[dependency-status-url]: https://david-dm.org/jamieconnolly/eslint-config

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/jamieconnolly/eslint-config/blob/master/LICENSE

[version-image]: https://img.shields.io/npm/v/@jamieconnolly/eslint-config.svg
[version-url]: https://www.npmjs.com/package/@jamieconnolly/eslint-config
