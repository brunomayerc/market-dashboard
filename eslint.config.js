import { defineConfig } from "eslint";
import react from "eslint-plugin-react";
import typescript from "@typescript-eslint/eslint-plugin";
import tailwindcss from "eslint-plugin-tailwindcss";

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "tailwindcss"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "tailwindcss/no-custom-classname": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
