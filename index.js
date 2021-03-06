module.exports = {
  root: true,
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: ["jest", "@typescript-eslint", "react-hooks"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    // "tsconfigRootDir": "./"
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [
          ["~/components", "./components"],
          ["components", "./components"],
          ["~/features", "./features"],
          ["~/types", "./types"],
          ["types", "./types"],
          ["~/utils", "./utils"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    "jest/globals": true,
    es6: true,
  },
  rules: {
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-var-requires": 0,
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "class-methods-use-this": 0,
    "comma-dangle": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-named-as-default-member": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "lines-between-class-members": 0,
    "max-len": [1, 100, 2, { ignoreComments: true }],
    "no-console": 0,
    "no-plusplus": 0,
    "object-curly-newline": 0,
    radix: 0,
    "react-hooks/rules-of-hooks": "error",
    "react/display-name": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "require-atomic-updates": 0,
    "spaced-comment": 0,
  },
  overrides: [
    {
      files: ["*.js", "*.d.ts"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "implicit-arrow-linebreak": 0,
      },
    },
  ],
};
