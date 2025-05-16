// app/components/Header.test.tsx
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // أو MemoryRouter
import Header from "./Header"; // <-- أعد تفعيل هذا
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders brand name and navigation links", () => {
    render(
      <BrowserRouter>
        {" "}
        {/* أو <MemoryRouter> */}
        <Header />
      </BrowserRouter>
    );

    // تحقق من وجود اسم العلامة التجارية
    expect(screen.getByText("Ramadan Waly")).toBeInTheDocument();
    expect(screen.getByText("CraftedByHand")).toBeInTheDocument();

    // تحقق من وجود روابط التنقل
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /services/i })).toBeInTheDocument();
  });
});
