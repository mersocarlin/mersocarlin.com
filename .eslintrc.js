module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "strict": 0,
    "semi": [2, "never"],
    "space-before-function-paren": [2, { "anonymous": "always", "named": "always" }],
    "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": true, "peerDependencies": true}],
    "class-methods-use-this": 0,
    "jsx-a11y/label-has-for": 0,
    "react/no-children-prop": 0
  }
};
