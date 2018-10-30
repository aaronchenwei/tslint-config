# [tslint-react](https://github.com/palantir/tslint-react)

## Rules In Use

### [`jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

- Rule options: `["always", "never"]`
- change the tslint-react default value to: [true, 'never']

  ```tsx
  // Bad:
  <Router exact={true} path="/" />;

  // Good:
  <Router exact path="/" />;
  ```

### [`jsx-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

### [`jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

### [`jsx-no-lambda`](https://github.com/palantir/tslint-react#rules)

### [`jsx-no-string-ref`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

### [`jsx-self-close`](https://github.com/palantir/tslint-react#rules)

## Rules Not In Use

### [`jsx-alignment`](https://github.com/palantir/tslint-react#rules)

### [`jsx-ban-elements`](https://github.com/palantir/tslint-react#rules)

- default: not set
- example:
  When `jsx-ban-elements` is set as follows: [reference from tslint-react test rules](https://github.com/palantir/tslint-react/blob/master/test/rules/jsx-ban-elements/tslint.json)

  ```json
  {
    "rules": {
      "jsx-ban-elements": {
        "options": [["span", "Use div instead."]]
      }
    }
  }
  ```

  The following patterns are considered warnings: [reference from tslint-react test rules](https://github.com/palantir/tslint-react/blob/master/test/rules/jsx-ban-elements/test.tsx.lint)

  ```tsx
  // Bad ~~~~ [JSX element 'span' is banned. Use div instead.]:
  <span className="primary" foo="bar">
    baz
  </span>
  ```

  The following patterns are not warnings:

  ```tsx
  // Good:
  <div className="primary" foo="bar">
    bar
  </div>
  ```

### [`jsx-ban-props`](https://github.com/palantir/tslint-react#rules)

- Default: not set
- Example:
  When `jsx-ban-props` is set as follows: [reference from tslint-react test rules](https://github.com/palantir/tslint-react/blob/master/test/rules/jsx-ban-props/tslint.json)

  ```json
  {
    "rules": {
      "jsx-ban-props": [true, ["foo"], ["bar", "It is obsolete."]]
    }
  }
  ```

  The following patterns are considered warnings: [reference from tslint-react test rules](https://github.com/palantir/tslint-react/blob/master/test/rules/jsx-ban-props/test.tsx.lint)

  ```tsx
  // Bad ~~~ [Use of the prop 'foo' is not allowed.]:
  <span className="primary" foo="bar">baz</span>

  // Bad ~~~ [Use of the prop 'bar' is not allowed. It is obsolete.]:
  <span bar={5}>baz</span>
  ```

  The following patterns are not warnings:

  ```tsx
  // Good:
  <button type="button">bar</button>
  ```

### [`jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

### [`jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)

### [`jsx-no-multiline-js`](https://github.com/palantir/tslint-react#rules)

### [`jsx-space-before-trailing-slash`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)

### [`jsx-use-translation-function`](https://github.com/palantir/tslint-react#rules)

### [`jsx-wrap-multiline`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)
