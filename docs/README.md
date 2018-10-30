# tslint Configuration

## Severity

`defaultSeverity` has been set to `warning`. We do respect the configured rules but don't need tslint rules to prevent project building.

## Rules Directory

Following rules directory are in use for this `tslint-config` project.

## [tslint](./tslint)

## [tslint-react](./tslint-react)

## [tslint-microsoft-contrib](./tslint-microsoft-contrib)

## [tslint-consistent-codestyle](./tslint-consistent-codestyle)

## [tslint-eslint-rules](./tslint-eslint-rules)

## tslint-plugin-prettier

[`tslint-plugin-prettier`](https://github.com/ikatyang/tslint-plugin-prettier) runs `Prettier` as a `TSLint` rule and reports differences as individual `TSLint` issues.

```json
"prettier": [
  true,
  {
    "singleQuote": true,
    "trailingComma": "es5",
  },
],
```
