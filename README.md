# tslint-config
[![NPM version](https://img.shields.io/npm/v/@aaronchenwei/tslint-config.svg?style=flat)](https://www.npmjs.com/package/@aaronchenwei/tslint-config)
[![Downloads](http://img.shields.io/npm/dm/@aaronchenwei/tslint-config.svg?style=flat)](https://www.npmjs.com/package/@aaronchenwei/tslint-config)

## Installation

```sh
yarn add --dev @aaronchenwei/tslint-config
```

## Usage

In file `tslint.json`

```json
{
  "extends": ["@aaronchenwei/tslint-config"]
}
```

In order to configure `pretitier`, install packages and then add following to file `package.json`
```sh
yarn add --dev husky prettier pretty-quick tslint
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

## Rules

### prettier

### tslint-react

#### jsx-boolean-value"

## Versioning

```
+----- Major version.
| +--- Minor version has BREAKING CHANGE and feat.
| | +- Patch version has patch.
| | |
x.x.x
```

## License

MIT
