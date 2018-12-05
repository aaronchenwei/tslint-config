const path = require('path');

const tslint_config_base = {
  defaultSeverity: 'warning',
  extends: ['tslint:latest', 'tslint-config-prettier'],
  rulesDirectory: [
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
    path.join(path.dirname(require.resolve('tslint-misc-rules')), './'),
  ],
};

const rules_tslint = require('./rules/tslint');
const rules_tslint_react = require('./rules/tslint-react');
const rules_tslint_microsoft_contrib = require('./rules/tslint-microsoft-contrib');
const rules_tslint_consistent_codestyle = require('./rules/tslint-consistent-codestyle');
const rules_tslint_eslint_rules = require('./rules/tslint-eslint-rules');
const rules_tslint_misc_rules = require('./rules/tslint-misc-rules');

const tslint_config = {
  ...tslint_config_base,
  rules: {
    ...rules_tslint,
    ...rules_tslint_react,
    ...rules_tslint_microsoft_contrib,
    ...rules_tslint_consistent_codestyle,
    ...rules_tslint_eslint_rules,
    ...rules_tslint_misc_rules,
  },
};

// console.log(tslint_config);

module.exports = tslint_config;
