# `tslint-config`

[![`NPM version`](https://img.shields.io/npm/v/@aaronchenwei/tslint-config.svg?style=flat)](https://www.npmjs.com/package/@aaronchenwei/tslint-config) [![`Downloads`](http://img.shields.io/npm/dm/@aaronchenwei/tslint-config.svg?style=flat)](https://www.npmjs.com/package/@aaronchenwei/tslint-config) [![`Dependencies`](https://david-dm.org/aaronchenwei/tslint-config.svg)](https://david-dm.org/aaronchenwei/tslint-config.svg)

This is an opinioned `tslint` configuration with `prettier`.

## Installation

```sh
yarn add --dev @aaronchenwei/tslint-config tslint
```

## Usage

In file `tslint.json`

```json
{
  "extends": ["@aaronchenwei/tslint-config", "tslint-config-prettier"]
}
```

In order to configure `pretitier`, install packages and then add following to file `package.json`

```sh
yarn add --dev husky prettier pretty-quick
```

```json
  "prettier": {
    "singleQuote": true,
    "trailingComma": "es5"
  },
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
```

## Versioning

```sh
+----- Major version.
| +--- Minor version has BREAKING CHANGE and feature.
| | +- Patch version has patch.
| | |
x.x.x
```

## License

MIT
