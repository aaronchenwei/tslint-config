# Rules

## [tslint-plugin-prettier](https://github.com/ikatyang/tslint-plugin-prettier)

```javascript
prettier: [
  true,
  {
    singleQuote: true,
    trailingComma: 'es5',
  },
],
```

## [tslint-react](https://github.com/palantir/tslint-react)

- [`jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

  - Rule options: `["always", "never"]`
  - change the tslint-react default value to: [true, 'never']

  ```ts
  // Bad:
  <Router exact={true} path="/" />;
  
  // Good:
  <Router exact path="/" />;
  ```

- [`jsx-alignment`](https://github.com/palantir/tslint-react#rules)

- [`jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

- [`jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)

- [`jsx-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

- [`jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

- [`jsx-no-lambda`](https://github.com/palantir/tslint-react#rules)

- [`jsx-no-multiline-js`](https://github.com/palantir/tslint-react#rules)

- [`jsx-no-string-ref`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

- [`jsx-self-close`](https://github.com/palantir/tslint-react#rules)

- [`jsx-wrap-multiline`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)
