import { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";
import { useLocation } from "react-router";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobile(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-light m-0">
        <a href="/">IlhamArifinnn</a>
      </h1>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-12">
        {navItems.map((item, index) => (
          <a
            key={index}
            className={`text-base tracking-wider transition-colors hover:text-[#e99b63] z-50 ${
              location.pathname === item.path
                ? "text-[#e99b63] font-medium"
                : ""
            }`}
            href={item.path}
          >
            {item.name}
          </a>
        ))}
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-xl md:mr-4 mr-2 transition-colors hover:text-[#e99b63] z-50"
          aria-label="Toggle theme"
        >
          <i className={`bx ${theme === "dark" ? "bx-moon" : "bx-sun"}`}></i>
        </button>
      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-3xl p-2 z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <i className={isMobile ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      {/* Mobile menu */}
      {isMobile && (
        <div className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-90 backdrop-blur-md">
          <nav className="flex flex-col gap-6 items-center">
            {navItems.map((item, i) => (
              <a
                key={i}
                className={`text-xl tracking-wider transition-colors ${
                  location.pathname === item.path
                    ? "text-[#e99b63] font-medium"
                    : "hover:text-gray-300"
                }`}
                href={item.path}
                onClick={() => setIsMobile(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="text-2xl transition-colors hover:text-[#e99b63] mt-4"
              aria-label="Toggle theme"
            >
              <i
                className={`bx ${theme === "dark" ? "bx-moon" : "bx-sun"}`}
              ></i>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
