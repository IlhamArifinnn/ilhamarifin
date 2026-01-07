import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

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

    // Scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`flex justify-between items-center py-4 px-4 lg:px-20 fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 dark:bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-light m-0">
        <a href="/" className="block">
          IlhamArifinnn
        </a>
      </motion.h1>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-12">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.a
              className={`relative text-base tracking-wider transition-colors hover:text-[#e99b63] z-50 ${
                location.pathname === item.path
                  ? "text-[#e99b63] font-medium"
                  : ""
              }`}
              href={item.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#e99b63]"
                  layoutId="navbar-indicator"
                />
              )}
            </motion.a>
          </motion.div>
        ))}

        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className="text-xl md:mr-4 mr-2 transition-colors hover:text-[#e99b63] z-50"
          aria-label="Toggle theme"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </motion.button>
      </nav>

      {/* Mobile menu button */}
      <motion.button
        className="md:hidden text-3xl p-2 z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isMobile ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.div>
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black/75 dark:bg-white/75 backdrop-blur-md"
          >
            <motion.nav
              className="flex flex-col gap-6 items-center text-gray-200 dark:text-gray-800"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    closed: { opacity: 0, x: -50 },
                    open: { opacity: 1, x: 0 },
                  }}
                >
                  <motion.a
                    className={`text-xl tracking-wider transition-colors ${
                      location.pathname === item.path
                        ? "text-[#e99b63] font-medium"
                        : "hover:text-[#e99b63]"
                    }`}
                    href={item.path}
                    onClick={() => setIsMobile(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.div>
              ))}
              <motion.button
                onClick={toggleTheme}
                className="text-2xl transition-colors hover:text-[#e99b63] mt-4"
                aria-label="Toggle theme"
                variants={{
                  closed: { opacity: 0, scale: 0.5 },
                  open: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? <Moon /> : <Sun />}
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
