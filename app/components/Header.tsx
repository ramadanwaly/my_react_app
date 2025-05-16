import { NavLink } from "react-router-dom"; // <--- هنا التصحيح: استورد NavLink

export default function Header() {
  // لم نعد بحاجة لـ useLocation هنا

  return (
    <header className="bg-sky-100 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-baseline mb-4 sm:mb-0">
            <div className="text-2xl font-bold text-sky-600">Ramadan Waly</div>
            <div className="text-sm md:ml-2 text-sky-800">CraftedByHand</div>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-sky-600 font-medium"
                    : "text-sky-800 hover:text-sky-600 transition-colors"
                } px-2 py-1`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-sky-600 font-medium"
                    : "text-sky-800 hover:text-sky-600 transition-colors"
                } px-2 py-1`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-sky-600 font-medium"
                    : "text-sky-800 hover:text-sky-600 transition-colors"
                } px-2 py-1`
              }
            >
              Services
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
