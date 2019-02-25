/**
 * tslint-microsoft-contrib
 * URL: https://github.com/Microsoft/tslint-microsoft-contrib
 */

module.exports = {
  /**
   * Security Rules. The following rules should be turned on because they find security issues
   * or are recommended in the Microsoft Secure Development Lifecycle (SDL)
   */
  'insecure-random': false,
  'no-banned-terms': true,
  'no-cookies': true,
  'no-delete-expression': true,
  'no-disable-auto-sanitization': true,
  'no-document-domain': true,
  'no-document-write': true,
  'no-exec-script': true,
  'no-function-constructor-with-string-args': true,
  'no-http-string': [
    true,
    'http://www.example.com/?.*',
    'http://localhost:?.*',
  ],
  'no-inner-html': true,
  'no-octal-literal': true,
  'no-reserved-keywords': false,
  'no-string-based-set-immediate': false,
  'no-string-based-set-interval': false,
  'no-string-based-set-timeout': false,
  'non-literal-fs-path': true,
  'non-literal-require': false,
  'possible-timing-attack': true,
  'react-anchor-blank-noopener': true,
  'react-iframe-missing-sandbox': true,
  'react-no-dangerous-html': true,

  /**
   * Common Bugs and Correctness. The following rules should be turned on because they find
   * common bug patterns in the code or enforce type safety.
   */
  'jquery-deferred-must-complete': true,
  'mocha-avoid-only': false,
  'mocha-no-side-effect-code': false,
  'no-backbone-get-set-outside-model': false,
  'no-constant-condition': true,
  'no-control-regex': false,
  'no-increment-decrement': true,
  'no-invalid-regexp': false,
  'no-jquery-raw-elements': true,
  'no-regex-spaces': false,
  'no-unnecessary-bind': true,
  'no-unnecessary-override': true,
  'no-with-statement': true,
  'promise-must-complete': true,
  "react-this-binding-issue": [true, { "allow-anonymous-listeners": true }],
  'react-unused-props-and-state': true,
  'use-named-parameter': true,
  'use-simple-attributes': true,

  /**
   * Code Clarity. The following rules should be turned on because they make the code
   * generally more clear to the reader.
   */
  'chai-prefer-contains-to-index-of': false, // Chai is an assertion library. Not in use.
  'chai-vague-errors': false,
  'export-name': false,
  'function-name': false,
  'import-name': false,
  'informative-docs': true,
  'max-func-body-length': false,
  'mocha-unneeded-done': false,
  'no-for-in': false, // use tslint:no-for-in-array
  'no-function-expression': true,
  'no-multiline-string': false,
  'no-relative-imports': false, // TODO
  'no-suspicious-comment': true, // TODO
  'no-typeof-undefined': true,
  'no-unnecessary-field-initialization': true,
  'no-unnecessary-local-variable': true,
  'no-unsupported-browser-code': true,
  'no-useless-files': true,
  'prefer-array-literal': true,
  'underscore-consistent-invocation': true,

  /**
   * Accessibility. The following rules should be turned on to guarantee the best user
   * experience for keyboard and screen reader users.
   */
  'react-a11y-anchors': false,
  'react-a11y-aria-unsupported-elements': false,
  'react-a11y-event-has-role': false,
  'react-a11y-image-button-has-alt': false,
  'react-a11y-img-has-alt': false,
  'react-a11y-input-elements': false,
  'react-a11y-lang': false,
  'react-a11y-meta': false,
  'react-a11y-no-onchange': false,
  'react-a11y-props': false,
  'react-a11y-proptypes': false,
  'react-a11y-required': false,
  'react-a11y-role': false,
  'react-a11y-role-has-required-aria-props': false,
  'react-a11y-role-supports-aria-props': false,
  'react-a11y-tabindex-no-positive': false,
  'react-a11y-titles': false,

  /**
   * Whitespace related rules. The only recommended whitespace strategy is to pick a single format and
   * be consistent.
   */
  'no-empty-line-after-opening-brace': false,
  'no-single-line-block-comment': true,
  'no-unnecessary-semicolons': false,

  /**
   * Controversial/Configurable rules.
   */
  'no-unexternalized-strings': false, // TODO
  'prefer-type-cast': false, // TODO

  /**
   * Deprecated rules.  The following rules are deprecated for various reasons.
   */
  'missing-jsdoc': false,
  'missing-optional-annotation': false, // now supported by TypeScript compiler
  'no-duplicate-case': false,
  'no-duplicate-parameter-names': false, // now supported by TypeScript compiler
  'no-empty-interfaces': false, // use tslint no-empty-interface rule instead
  'no-missing-visibility-modifiers': false, // use tslint member-access rule instead
  'no-multiple-var-decl': false, // use tslint one-variable-per-declaration rule instead
  'no-stateless-class': false,
  'no-var-self': false,
  'react-tsx-curly-spacing': false,
};
