# [tslint](https://github.com/palantir/tslint)

## Rules In Use

### `array-type`

Requires using either `T[]` or `Array` for arrays.

#### Config

One of the following arguments must be provided:

- `"array"` enforces use of `T[]` for all types T.
- `"generic"` enforces use of `Array<T>` for all types T.
- `"array-simple"` enforces use of `T[]` if `T` is a simple type (primitive or type reference).

#### Override

```json
"array-type": [true, "array"]
```
