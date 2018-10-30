# tslint-microsoft-contrib

[tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib) is a set of TSLint rules used on some Microsoft projects.

## Rules in Use

### insecure-random

Do not use insecure sources for random bytes. Use a secure random number generator instead. Bans all uses of `Math.random` and `crypto.pseudoRandomBytes`. Better alternatives are `crypto.randomBytes` and `window.crypto.getRandomValues`.

**References:**

- [CWE 330](https://cwe.mitre.org/data/definitions/330.html)
- [MDN Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Node.js `crypto.randomBytes()`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback)
- [`window.crypto.getRandomValues()`](https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues)
