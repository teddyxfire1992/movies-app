module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    es6: true
  },
  parser: "babel-eslint",
  plugins: ["react", "prettier"],
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": ["error", {allow: ["info", "warn"]}],
    "react/display-name": [0],
    "react/no-deprecated": [0],
    "react/no-string-refs": [0],
    "no-case-declarations": [0],
    "prettier/prettier": "error"
  }
};
