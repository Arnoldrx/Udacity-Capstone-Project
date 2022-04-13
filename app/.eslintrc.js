module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es2021": true,
    "browser": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended"
  ],
  "plugins": ["react", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/prop-types": 0,
    "indent": ["error", 2],
    "linebreak-style": 1,
  }
};
