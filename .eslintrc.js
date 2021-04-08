module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // "comma-dangle": 2,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "vue/no-unused-components": process.env.NODE_ENV === "production" ? "error" : "warn",
    "operator-linebreak": [2, "after", { overrides: { "?": "before", ":": "before" } }],
    "no-new": "off",
    "implicit-arrow-linebreak": 0,
    "function-paren-newline": 0,
    "import/no-cycle": ["error", { maxDepth: 5 }],
  },
};
