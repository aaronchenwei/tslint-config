const path = require('path');

module.exports = {
  defaultSeverity: 'warning',
  extends: ['tslint:all', 'tslint-config-prettier'],
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-plugin-prettier')), './'),
    path.join(path.dirname(require.resolve('tslint-react')), 'rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
    path.join(
      path.dirname(require.resolve('tslint-consistent-codestyle')),
      './'
    ),
    path.join(
      path.dirname(require.resolve('tslint-eslint-rules')),
      'dist/rules'
    ),
  ],
  rules: {
    /**
     * tslint-plugin-prettier
     */
    prettier: [
      true,
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],

    /**
     * tslint
     * tslint:all is in use by default.
     */
    'member-access': [true, 'no-public'],
    'no-console': false,
    'object-literal-sort-keys': false,

    /**
     * tslint-react
     */
    'jsx-alignment': false,
    'jsx-ban-elements': false,
    'jsx-ban-props': false,
    'jsx-boolean-value': [true, 'never'],
    'jsx-curly-spacing': false,
    'jsx-equals-spacing': false,
    'jsx-key': true,
    'jsx-no-bind': true,
    'jsx-no-lambda': true,
    'jsx-no-multiline-js': false,
    'jsx-no-string-ref': true,
    'jsx-self-close': true,
    'jsx-space-before-trailing-slash': false,
    'jsx-wrap-multiline': false,
    'jsx-use-translation-function': false,

    /**
     * tslint-microsoft-contrib
     */
    /**
     * Security Rules. The following rules should be turned on because they find security issues
     * or are recommended in the Microsoft Secure Development Lifecycle (SDL)
     */
    'insecure-random': true,
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
    'no-reserved-keywords': true,
    'no-string-based-set-immediate': true,
    'no-string-based-set-interval': true,
    'no-string-based-set-timeout': true,
    'non-literal-fs-path': true,
    'non-literal-require': true,
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
    'react-this-binding-issue': true,
    'react-unused-props-and-state': true,
    'use-named-parameter': true,

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
    'no-for-in': true,
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
    'react-a11y-anchors': true,
    'react-a11y-aria-unsupported-elements': true,
    'react-a11y-event-has-role': true,
    'react-a11y-image-button-has-alt': true,
    'react-a11y-img-has-alt': true,
    'react-a11y-input-elements': true,
    'react-a11y-lang': true,
    'react-a11y-meta': true,
    'react-a11y-no-onchange': true,
    'react-a11y-props': true,
    'react-a11y-proptypes': true,
    'react-a11y-required': true,
    'react-a11y-role': true,
    'react-a11y-role-has-required-aria-props': true,
    'react-a11y-role-supports-aria-props': true,
    'react-a11y-tabindex-no-positive': true,
    'react-a11y-titles': true,

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

    /**
     * tslint-consistent-codestyle
     */
    'const-parameters': false, // tslint:no-parameter-reassignment
    'early-exit': false,
    'ext-curly': false, // tslint:curly
    'naming-convention': false, // TODO
    'no-as-type-assertion': false, // TODO
    'no-accessor-recursion': true,
    'no-collapsible-if': false,
    'no-else-after-return': false, // TODO
    'no-return-undefined': [true, 'allow-void-expression'],
    'no-static-this': false,
    'no-unnecessary-else': false, // TODO
    'no-unnecessary-type-annotation': false,
    'no-unused': false,
    'no-var-before-return': false,
    'object-shorthand-properties-first': true,
    'parameter-properties': false, // TODO
    'prefer-const-enum': false, // TODO
    'prefer-while': false,

    /**
     * tslint-eslint-rules
     */
    // Possible Errors
    'no-constant-condition': false, // tslint-microsoft-contrib:no-constant-condition
    'no-control-regex': false,
    'no-duplicate-case': false,
    'no-empty-character-class': false,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': false, // conflict to  tslint-config-prettier
    'no-inner-declarations': false,
    'no-invalid-regexp': false,
    'no-regex-spaces': false,
    'no-unexpected-multiline': false,
    'ter-no-irregular-whitespace': false,
    'ter-no-sparse-arrays': false,
    'valid-jsdoc': false,
    'valid-typeof': false, // tslint:typeof-compare

    // Best Practices
    'no-multi-spaces': false,
    'ter-no-proto': false, // TODO
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
  },
};
