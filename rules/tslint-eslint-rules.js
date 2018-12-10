/**
 * tslint-eslint-rules
 * URL: https://github.com/buzinas/tslint-eslint-rules
 */

module.exports = {
  // Possible Errors
  'no-constant-condition': false, // tslint-microsoft-contrib:no-constant-condition
  'no-control-regex': false,
  'no-duplicate-case': false, // tslint:no-duplicate-switch-case
  'no-empty-character-class': false,
  'no-ex-assign': true,
  'no-extra-boolean-cast': true,
  'no-extra-semi': false, // conflict with tslint-config-prettier
  'no-inner-declarations': false,
  'no-invalid-regexp': false,
  'no-regex-spaces': false,
  'no-unexpected-multiline': false,
  'ter-no-irregular-whitespace': false,
  'ter-no-sparse-arrays': false, // tslint:no-sparse-arrays
  'valid-jsdoc': false,
  'valid-typeof': false, // tslint:typeof-compare

  // Best Practices
  'no-multi-spaces': false,
  'ter-no-proto': true,
  'ter-no-script-url': true,
  'ter-no-self-compare': true,

  // Node.js and CommonJS
  'handle-callback-err': false,

  // Stylistic Issues
  'array-bracket-spacing': false,
  'block-spacing': false,
  'brace-style': false,
  'ter-computed-property-spacing': false,
  'ter-func-call-spacing': false,
  'ter-indent': false,
  'ter-max-len': false,
  'ter-newline-after-var': true, // TODO
  'ter-no-mixed-spaces-and-tabs': false,
  'object-curly-spacing': false,
  'ter-padded-blocks': false,
  'sort-imports': false, // TODO
  'space-in-parens': false,
  'ter-no-tabs': false,

  // ECMAScript 6
  'ter-arrow-body-style': [
    true,
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  'ter-arrow-parens': false,
  'ter-arrow-spacing': false,
  'ter-prefer-arrow-callback': [
    true,
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
};
