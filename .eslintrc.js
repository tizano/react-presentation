module.exports = {
  "extends": [
    "formidable/configurations/es6-react",
    // "airbnb",
  ],
  "rules": {
    "indent": [2, 2, {"SwitchCase": 1}],
    "max-len": 0,
    "no-magic-numbers": 0,
    "react/prefer-es6-class": 0,
    "react/no-multi-comp": 0
  },
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "afterEach": true,
    "describe": true,
    "expect": true,
    "it": true,
    "jest": true,
    "test": true
  }
};
