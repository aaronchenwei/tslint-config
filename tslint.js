const path = require('path');

module.exports = {
  defaultSeverity: 'warning',
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
     * tslint:recommanded
     */
    'adjacent-overload-signatures': true,
    align: false,
    'array-type': {
      options: ['array'],
    },
    'arrow-parens': false,
    'arrow-return-shorthand': true,
    'ban-types': {
      options: [
        ['Object', 'Avoid using the `Object` type. Did you mean `object`?'],
        [
          'Function',
          'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
        ],
        ['Boolean', 'Avoid using the `Boolean` type. Did you mean `boolean`?'],
        ['Number', 'Avoid using the `Number` type. Did you mean `number`?'],
        ['String', 'Avoid using the `String` type. Did you mean `string`?'],
        ['Symbol', 'Avoid using the `Symbol` type. Did you mean `symbol`?'],
      ],
    },
    'callable-types': true,
    'class-name': true,
    'comment-format': {
      options: ['check-space'],
    },
    curly: true,
    'cyclomatic-complexity': false,
    eofline: false,
    forin: true,
    'import-spacing': false,
    indent: false,
    'interface-name': {
      options: ['always-prefix'],
    },
    'interface-over-type-literal': true,
    'jsdoc-format': true,
    'label-position': true,
    'max-classes-per-file': {
      options: [1],
    },
    'max-line-length': false,
    'member-access': [true, 'no-public'],
    'member-ordering': [
      true,
      {
        order: [
          'static-field',
          'static-method',
          'instance-field',
          'constructor',
          'instance-method',
        ],
      },
    ],
    'new-parens': false,
    'no-angle-bracket-type-assertion': true,
    'no-any': false,
    'no-arg': true,
    'no-bitwise': true,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': false,
    'no-console': false,
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-empty': true,
    'no-empty-interface': true,
    'no-eval': true,
    'no-internal-module': true,
    'no-invalid-this': false,
    'no-misused-new': true,
    'no-namespace': true,
    'no-null-keyword': true,
    'no-parameter-properties': false,
    'no-reference': true,
    'no-reference-import': true,
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': false,
    'no-trailing-whitespace': false,
    'no-unnecessary-initializer': true,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    // disable this rule as it is very heavy performance-wise and not that useful
    'no-use-before-declare': false,
    'no-var-keyword': true,
    'no-var-requires': true,
    'object-literal-key-quotes': false,
    'object-literal-shorthand': true,
    'object-literal-sort-keys': false,
    'one-line': false,
    'one-variable-per-declaration': {
      options: ['ignore-for-loop'],
    },
    'only-arrow-functions': {
      options: ['allow-declarations', 'allow-named-functions'],
    },
    'ordered-imports': {
      options: {
        'import-sources-order': 'case-insensitive',
        'module-source-path': 'full',
        'named-imports-order': 'case-insensitive',
      },
    },
    'prefer-const': true,
    'prefer-for-of': true,
    'prefer-template': [true, 'allow-single-concat'],
    quotemark: false,
    radix: true,
    semicolon: false,
    'space-before-function-paren': false,
    'trailing-comma': false,
    'triple-equals': {
      options: ['allow-undefined-check'],
    },
    typedef: false,
    'typedef-whitespace': false,
    'typeof-compare': false,
    'unified-signatures': true,
    'use-isnan': true,
    'variable-name': {
      options: ['ban-keywords', 'check-format', 'allow-pascal-case'],
    },
    whitespace: false,

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
    'chai-prefer-contains-to-index-of': false, // Chai is an assertion library. Not in use.
    'chai-vague-errors': false,
    'export-name': false,
    'function-name': false,
    'import-name': false,
    'informative-docs': true,
    'insecure-random': true,
    'jquery-deferred-must-complete': true,
    'max-func-body-length': false,
    'missing-jsdoc': false, // Deprecated
    'missing-optional-annotation': false, // Deprecated
    'mocha-avoid-only': false,
    'mocha-no-side-effect-code': false,
    'mocha-unneeded-done': false,
    'no-backbone-get-set-outside-model': false,
    'no-banned-terms': true,
    'no-constant-condition': true,
    'no-control-regex': false,
    'no-cookies': true,
    'no-delete-expression': true,
    'no-disable-auto-sanitization': true,
    'no-document-domain': true,
    'no-document-write': true,
    'no-duplicate-case': false, // Deprecated
    'no-duplicate-parameter-names': false, // Deprecated
    'no-empty-interfaces': false, // Deprecated
    'no-empty-line-after-opening-brace': false,
    'no-exec-script': true,
    'no-for-in': true,
    'no-function-constructor-with-string-args': true,
    'no-function-expression': true,
    'no-http-string': [
      true,
      'http://www.example.com/?.*',
      'http://localhost:?.*',
    ],
    'no-increment-decrement': true,
    'no-inner-html': true,
    'no-invalid-regexp': false,
    'no-jquery-raw-elements': true,
    'no-missing-visibility-modifiers': false, // Deprecated
    'no-multiline-string': false,
    'no-multiple-var-decl': false, // Deprecated
    'no-octal-literal': true,
    'no-regex-spaces': false,
    'no-relative-imports': false, // TODO
    'no-reserved-keywords': true,
    'no-single-line-block-comment': true,
    'no-stateless-class': false, // Deprecated
    'no-string-based-set-immediate': true,
    'no-string-based-set-interval': true,
    'no-string-based-set-timeout': true,
    'no-suspicious-comment': true, // TODO
    'no-typeof-undefined': true,
    'no-unexternalized-strings': false, // TODO
    'no-unnecessary-bind': true,
    'no-unnecessary-field-initialization': true,
    'no-unnecessary-local-variable': true,
    'no-unnecessary-override': true,
    'no-unnecessary-semicolons': false,
    'no-unsupported-browser-code': true,
    'no-useless-files': true,
    'no-var-self': false, // Deprecated
    'no-with-statement': true,
    'non-literal-fs-path': true,
    'non-literal-require': true,
    'possible-timing-attack': true,
    'prefer-array-literal': true,
    'prefer-type-cast': false, // TODO
    'promise-must-complete': true,
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
    'react-anchor-blank-noopener': true,
    'react-iframe-missing-sandbox': true,
    'react-no-dangerous-html': true,
    'react-this-binding-issue': true,
    'react-tsx-curly-spacing': false, // Deprecated
    'react-unused-props-and-state': true,
    'underscore-consistent-invocation': true,
    'use-named-parameter': true,
    'valid-typeof': false,

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
    'no-extra-semi': false, // TODO
    'no-inner-declarations': false,
    'no-invalid-regexp': false,
    'no-regex-spaces': false,
    'no-unexpected-multiline': false,
    'ter-no-irregular-whitespace': false,
    'ter-no-sparse-arrays': false,
    'valid-jsdoc': false,
    'valid-typeof': true,

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
        requireReturnForObjectLiteral: true,
      },
    ],
    'ter-arrow-parens': false,
    'ter-arrow-spacing': false,
    'ter-prefer-arrow-callback': [
      true,
      {
        allowNamedFunctions: true,
        allowUnboundThis: false,
      },
    ],
  },
};
