/**
 * tslint
 */

module.exports = {
  /**
   * TypeScript-specific
   * These rules find errors related to TypeScript features
   */
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
  'no-import-side-effect': [
    true,
    { 'ignore-module': '(\\.html|\\.css|\\.less)$' },
  ],
  'no-parameter-reassignment': true,

  /**
   * Functionality
   * These rules catch common errors in JS programming or otherwise confusing constructs that are prone to producing bugs
   */
  'await-promise': true,
  'ban-comma-operator': true,
  'no-console': false,
  'no-for-in-array': true,
  'no-implicit-dependencies': false,
  'no-null-keyword': true,
  'no-submodule-imports': false,
  'no-this-assignment': [true, 'allow-destructuring'],
  'triple-equals': [true, 'allow-undefined-check'],

  /**
   * Maintainability
   * These rules make code maintenance easier
   */
  'max-classes-per-file': false,
  'no-duplicate-imports': true,
  'object-literal-sort-keys': false,

  /**
   * Style
   * These rules enforce consistent style across your codebase
   */
  'array-type': {
    options: ['array'],
  },
  'arrow-return-shorthand': true,
  'newline-before-return': true,
  'no-boolean-literal-compare': false,
  'object-literal-key-quotes': false,
  'prefer-template': true,
  'variable-name': [
    true,
    'ban-keywords',
    'check-format',
    'allow-pascal-case',
    'allow-leading-underscore',
  ],
};
