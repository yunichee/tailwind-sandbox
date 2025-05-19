import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  { files: ["**/*.{ts,tsx}"] },
  { ignores: ["**/generated/**/*", "**/components/ui/**/*"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // eslint-plugin-importに関する設定
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always", // import groups 1行空ける
          pathGroups: [
            { pattern: "src/components/**", group: "internal", position: "before" },
            { pattern: "src/lib/**", group: "internal", position: "before" },
          ],
        },
      ],
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
  },
  eslintConfigPrettier, // Prettierとの競合防止
];

export default eslintConfig;
