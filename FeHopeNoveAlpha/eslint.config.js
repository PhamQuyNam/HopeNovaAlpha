import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

/*
 * Cấu hình ESLint
 * Mục tiêu: bắt lỗi code (biến không dùng, thiếu dependency trong useEffect...)
 * NGAY khi đang gõ code, trước khi commit/PR — giảm thời gian review qua lại.
 *
 * eslintConfigPrettier đặt CUỐI CÙNG để tắt các rule định dạng (dấu cách, dấu chấm phẩy...)
 * vì việc đó đã giao cho Prettier xử lý, tránh ESLint và Prettier "đánh nhau".
 */
export default defineConfig([
  globalIgnores(["dist", "node_modules"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+ không cần import React ở mỗi file
      "react/prop-types": "off", // dự án không dùng PropTypes (có thể bật lại nếu muốn)
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  eslintConfigPrettier,
]);
