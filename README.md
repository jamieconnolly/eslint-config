# ESLint Configuration

[![build-status-image]][travis-ci]
[![license-image]][license]

This package provides my own personal `.eslintrc` as an extensible shared config.

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.

You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

## Usage

### Default

The default ESLint configuration lints for ECMAScript 6+ and React.

First, install this config package and ESLint:

```bash
$ npm install --save-dev eslint @jamieconnolly/eslint-config
```

Then, add the following to your `.eslintrc` file:

```json
{
    "extends": "@jamieconnolly"
}
```

*Note: We can omit the `/eslint-config` suffix since it is automatically assumed by ESLint.*

[build-status-image]: https://img.shields.io/travis/jamieconnolly/eslint-config/master.svg
[travis-ci]: https://travis-ci.org/jamieconnolly/eslint-config
[license-image]: https://img.shields.io/npm/l/@jamieconnolly/eslint-config.svg
[license]: https://github.com/jamieconnolly/eslint-config/blob/master/LICENSE
