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

### [tslint-react](https://github.com/palantir/tslint-react#rules)

- [`jsx-boolean-value` (since v2.5.0)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)
  - Rule options: `["always", "never"]`
  - change the tslint-react default value to: [true, 'never']
  ```ts
  // Good:
  <Router exact path='/' />;
  
  // Bad:
  <Router exact={true} path='/' />;
  ```

- [`jsx-alignment`](https://github.com/palantir/tslint-react#rules)
  
- [`jsx-ban-elements` (since v3.4.0)](https://github.com/palantir/tslint-react#rules)
  - default: not set
  - example:  
  When `jsx-ban-elements` is set as follows: [reference from tslint-react test rules](https://github.com/palantir/tslint-react/blob/master/test/rules/jsx-ban-elements/tslint.json)
  ```
  {
    "rules": {
        "jsx-ban-elements": {
            "options": [
                ["span", "Use div instead."]
            ]
        }
    }
  }
  ```
  The following patterns are considered warnings: [reference from tslint-react test rules](https://github.com/palantir/tslint-react/blob/master/test/rules/jsx-ban-elements/test.tsx.lint) 
  ```ts
  // Bad ~~~~ [JSX element 'span' is banned. Use div instead.]:
  <span className="primary" foo="bar">baz</span>
  ```
  The following patterns are not warnings:
  ```ts
  // Good:
  <div className="primary" foo="bar">bar</div>
  ```
  
- [`jsx-ban-props` (since v2.3.0)](https://github.com/palantir/tslint-react#rules)
  - default: not set
  - example:  
  When `jsx-ban-props` is set as follows: [reference from tslint-react test rules](https://github.com/palantir/tslint-react/blob/master/test/rules/jsx-ban-props/tslint.json)
  ```
  {
    "rules": {
        "jsx-ban-props": [true, ["foo"], ["bar", "It is obsolete."]]
    }
  }
  ```
  The following patterns are considered warnings: [reference from tslint-react test rules](https://github.com/palantir/tslint-react/blob/master/test/rules/jsx-ban-props/test.tsx.lint) 
  ```ts
  // Bad ~~~ [Use of the prop 'foo' is not allowed.]:
  <span className="primary" foo="bar">baz</span>
                          
  // Bad ~~~ [Use of the prop 'bar' is not allowed. It is obsolete.]:
  <span bar={5}>baz</span>
  ```
  The following patterns are not warnings:
  ```ts
  // Good:
  <button type="button">bar</button>
  ```

- [`jsx-curly-spacing` (since v1.1.0)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

- [`jsx-equals-spacing` (since v3.2.0)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)
  
- [`jsx-key` (since v3.2.0)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)
 
- [`jsx-no-bind` (since v2.6.0)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
  
- [`jsx-no-lambda`](https://github.com/palantir/tslint-react#rules)

- [`jsx-no-multiline-js`](https://github.com/palantir/tslint-react#rules)
  
- [`jsx-no-string-ref`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)
  
- [`jsx-use-translation-function` (since v2.4.0)](https://github.com/palantir/tslint-react#rules)
   
- [`jsx-self-close` (since v0.4.0)](https://github.com/palantir/tslint-react#rules)

- [`jsx-space-before-trailing-slash`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)

- [`jsx-wrap-multiline` (since v2.1)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

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
