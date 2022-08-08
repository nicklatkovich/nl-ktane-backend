module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "tsconfig.json", sourceType: "module" },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  root: true,
  env: { node: true },
  rules: {
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling"], "index"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [{
          pattern: "@{apps|libs}/**",
          group: "internal",
          position: "after",
        }],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
