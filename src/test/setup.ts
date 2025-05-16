// في ./src/test/setup.ts أو أعلى ملف Header.test.tsx
import { vi } from "vitest";

vi.mock("@react-router/dev/vite", () => ({
  reactRouter: () => {
    // قم بإرجاع كائن إضافة Vite فارغ أو محاكى لا يفعل شيئًا
    // أو يفعل الحد الأدنى المطلوب لتشغيل الاختبارات
    return {
      name: "mock-react-router-vite-plugin",
      // قد تحتاج إلى توفير بعض خطافات (hooks) التحويل الأساسية إذا لزم الأمر
      // transform(code, id) {
      //   if (id.includes('node_modules')) return;
      //   // ربما تحويل JSX بسيط إذا لم تقم به إضافة أخرى
      //   return code;
      // }
    };
  },
}));
