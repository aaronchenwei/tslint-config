const path = require('path');

module.exports = {
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
