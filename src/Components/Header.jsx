import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { changeTheme, currentTheme, theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = currentTheme === "dark";

  return (
    <header className={`${theme.header} z-50`}>
      {!isDark ? (
        <div className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50 px-4 sm:px-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-4 sm:gap-0">
            <div className="flex justify-between items-center w-full sm:w-auto">
              <img src="finovalogo2.jpg" alt="Logo" className="h-14" />

              <div className="flex items-center gap-3 sm:hidden">
                <select
                  value={currentTheme}
                  onChange={(e) => changeTheme(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded text-sm"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="colorful">Colorful</option>
                </select>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="block sm:hidden w-full space-y-2">
                {["Home", "About", "Contact"].map((label) => (
                  <Link
                    key={label}
                    to={`/${label.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-sm font-medium"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            <div className="hidden sm:flex flex-row gap-6 items-center">
              <nav className="flex gap-4">
                {["Home", "About", "Contact"].map((label) => (
                  <Link
                    to={`/${label.toLowerCase()}`}
                    key={label}
                    className="relative px-4 py-2 text-black font-semibold transition duration-300 ease-in-out group"
                  >
                    <span>{label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#01C4C6] to-[#008DF6] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>

              <select
                value={currentTheme}
                onChange={(e) => changeTheme(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded text-sm"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
              </select>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center w-full px-4 py-3 text-white sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          <aside
            className={`${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } sm:translate-x-0 transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full w-64 sm:w-32 text-white z-50 p-4 flex flex-col gap-4 `}
          >
            <div className="flex justify-between items-center sm:justify-center">
              <img src="finovalogo2.jpg" alt="Logo" className="h-10 w-10" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="sm:hidden text-white text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Sidebar Nav */}
            <nav className="flex flex-col gap-4 mt-4">
              {["Home", "About", "Contact"].map((label) => (
                <Link
                  to={`/${label.toLowerCase()}`}
                  key={label}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white text-left relative group transition duration-200"
                >
                  <span className="relative z-10">{label}</span>
                  <span className="absolute left-4 bottom-2 h-0.5 w-0 bg-gradient-to-r from-[#01C4C6] to-[#008DF6] transition-all duration-300 group-hover:w-[70%]"></span>
                </Link>
              ))}
            </nav>

            <div className="flex-grow" />

            <select
              value={currentTheme}
              onChange={(e) => changeTheme(e.target.value)}
              className="px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="colorful">Colorful</option>
            </select>
          </aside>
        </>
      )}
    </header>
  );
};

export default Header;
