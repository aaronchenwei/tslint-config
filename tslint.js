const path = require('path');

module.exports = {
  defaultSeverity: 'warning',
  rulesDirectory: [
    'tslint-plugin-prettier',
    'tslint-consistent-codestyle',
    'tslint-eslint-rules',
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
    path.join(path.dirname(require.resolve('tslint-react')), 'rules'),
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
    'no-function-constructor-with-string-args': true,
    'import-name': false,
    'prefer-array-literal': true,

    /**
     * tslint-consistent-codestyle
     */
    'object-shorthand-properties-first': true,

    /**
     * tslint-eslint-rules
     */
  },
};
