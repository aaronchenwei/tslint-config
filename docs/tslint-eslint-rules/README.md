# [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)

## Rule In Use

### [`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi)

- Usage:

``` ts
"no-extra-semi": true
```

- Examples:

``` ts
// Bad
const x = 5;;

function foo() {
    // code
};
```

``` ts
// Good
const x = 5;

const foo = () => {
    // code
};
```
