import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, UserConfig, PluginOption } from "vite"; // استورد PluginOption
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

export default defineConfig(({ mode }): UserConfig => {
  const isTest = mode === "test" || process.env.VITEST;

  const plugins: PluginOption[] = [tailwindcss(), tsconfigPaths()];

  if (!isTest) {
    plugins.push(reactRouter()); // أضف الإضافة فقط إذا لم يكن وضع اختبار
  }

  return {
    plugins: plugins, // استخدم المصفوفة المعدلة
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      exclude: [...configDefaults.exclude, "e2e/**"],
      // قد تحتاج إلى إضافة تحويل JSX/TS هنا إذا كانت إضافة reactRouter تقوم به عادةً
      // مثال (قد يحتاج إلى تعديل):
      // transform: {
      //   '^.+\\.(t|j)sx?$': ['@swc/jest', { /* ... options ... */ }],
      // },
      // أو الاعتماد على تحويل esbuild المدمج في Vitest إذا كان كافيًا
    },
  };
});
