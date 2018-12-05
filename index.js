const path = require('path');

const config_overall = {
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

const config_tslint = require('./libs/tslint');
const config_tslint_react = require('./libs/tslint-react');
const config_tslint_microsoft_contrib = require('./libs/tslint-microsoft-contrib');
const config_tslint_consistent_codestyle = require('./libs/tslint-consistent-codestyle');
const config_tslint_eslint_rules = require('./libs/tslint-eslint-rules');
const config_tslint_misc_rules = require('./libs/tslint-misc-rules');

module.exports = {
  ...config_overall,
  ...config_tslint,
  ...config_tslint_react,
  ...config_tslint_microsoft_contrib,
  ...config_tslint_consistent_codestyle,
  ...config_tslint_eslint_rules,
  ...config_tslint_misc_rules,
};
