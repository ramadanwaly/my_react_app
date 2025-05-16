// eslint.config.js
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: [
      "node_modules/",
      "build/",
      "dist/",
      ".react-router/",
      "coverage/",
      "vite.config.ts.timestamp-*.mjs",
      "eslint.config.js", // <--- أضف هذا لتجاهل ملف التكوين نفسه
    ],
  },

  tseslint.configs.eslintRecommended,

  // إعدادات TypeScript - سيتم تطبيقها على الملفات المطابقة (TS/TSX بشكل افتراضي)
  ...tseslint.configs.recommendedTypeChecked, // أو .recommended إذا استمرت المشاكل
  {
    // هذا الكائن يخصص إعدادات recommendedTypeChecked أعلاه
    languageOptions: {
      parserOptions: {
        project: true, // هذا سيستخدم tsconfig.json في جذر المشروع
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // يمكن إضافة rules هنا لتخصيص قواعد TypeScript إذا لزم الأمر
  },

  // إعدادات React
  {
    files: ["**/*.test.ts", "**/*.test.tsx"], // طبق هذه فقط على ملفات TS/TSX
    ...pluginReactConfig,
    languageOptions: {
      // يجب أن تكون languageOptions داخل هذا الكائن أيضًا
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReactConfig.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },

  // إعدادات Globals (للمتصفح و Node.js)
  // من الأفضل دمجها مع الإعدادات التي تحتاجها أو تطبيقها بشكل أوسع
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  eslintConfigPrettier
);
