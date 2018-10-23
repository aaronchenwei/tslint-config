module.exports = {
  defaultSeverity: 'warning',
  rulesDirectory: ['tslint-plugin-prettier'],
  extends: [
    'tslint:recommended',
    'tslint-react',
    'tslint-config-airbnb',
    'tslint-config-prettier',
  ],
  rules: {
    // prettier
    prettier: [
      true,
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],

    // override default rules
    'array-type': [true, 'array'],

    "arrow-return-shorthand": true,

    'import-name': false, // #tslint-microsoft-contrib
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
    'no-boolean-literal-compare': false,
    'no-console': false,
    'no-implicit-dependencies': false,
    'no-null-keyword': true,
    'no-submodule-imports': false,
    'object-literal-sort-keys': false,
    'prefer-template': [true, 'allow-single-concat'],
    'triple-equals': [true, 'allow-undefined-check'],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
    ],

    // tslint-react
    'jsx-boolean-value': [true, 'never'],
  },
};
