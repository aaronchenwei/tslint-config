## [tslint-react](https://github.com/palantir/tslint-react#rules)

- [`jsx-ban-elements`](https://github.com/palantir/tslint-react#rules)

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
  <span className="primary" foo="bar">
    baz
  </span>
  ```

  The following patterns are not warnings:

  ```ts
  // Good:
  <div className="primary" foo="bar">
    bar
  </div>
  ```

- [`jsx-ban-props`](https://github.com/palantir/tslint-react#rules)

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
