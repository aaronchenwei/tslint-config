/**
 * tslint-misc-rules
 * URL: https://github.com/jwbay/tslint-misc-rules
 */

module.exports = {
  rules: {
    'class-method-newlines': true,
    'react-lifecycle-order': [
      true,
      'componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount',
      'render',
    ],
  },
};
