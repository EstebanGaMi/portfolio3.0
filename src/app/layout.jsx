"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import { FaSun, FaMoon } from "react-icons/fa";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Verifica el tema guardado en el localStorage al cargar la página
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Guarda el nuevo modo en el localStorage
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <html lang="en" className={darkMode ? "dark" : "light"}>
      <body className="transition-colors duration-300 ease-in-out">
        <button
          onClick={toggleTheme}
          className="fixed top-5 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-full z-50"
        >
          {darkMode ? (
            <FaSun className="text-2xl" />
          ) : (
            <FaMoon className="text-2xl" />
          )}
        </button>

        {children}
      </body>
    </html>
  );
}
