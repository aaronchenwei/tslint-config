const tslint_config_base = require('./rules/tslint-config-base');
const rules_tslint_config_custom = require('./rules/tslint-config-custom');
const rules_tslint_react = require('./rules/tslint-react');
const rules_tslint_microsoft_contrib = require('./rules/tslint-microsoft-contrib');
const rules_tslint_consistent_codestyle = require('./rules/tslint-consistent-codestyle');
const rules_tslint_eslint_rules = require('./rules/tslint-eslint-rules');
const rules_tslint_misc_rules = require('./rules/tslint-misc-rules');

const tslint_config = {
  ...tslint_config_base,
  rules: {
    ...rules_tslint_config_custom,
    ...rules_tslint_react,
    ...rules_tslint_microsoft_contrib,
    ...rules_tslint_consistent_codestyle,
    ...rules_tslint_eslint_rules,
    ...rules_tslint_misc_rules,
  },
};

// console.log(tslint_config);

module.exports = tslint_config;
