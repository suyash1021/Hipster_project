import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const themeMap = {
  light: {
    wrapper: "bg-blue-50 text-gray-800 font-sans min-h-screen",
    header: "bg-white shadow-md text-gray-900 w-full p-4 fixed top-0 z-50",
    content: "pt-10 p-4",
  },
  dark: {
    wrapper:
      "bg-gray-900 text-white space-y-20 xl:ml-24 ml-10  font-serif font-bold min-h-screen xl:p-6 xl:w-full xl:flex",
    header:
      "bg-gray-800 shadow-lg text-white  w-1/5 min-h-screen p-4 fixed left-0 top-0",
    content: "ml-[10%]  <p-4></p-4> ",
  },
  colorful: {
    wrapper: "bg-pink-100 text-pink-900 font-pacifico min-h-screen",
    header: "bg-pink-500 text-white shadow-md w-full p-4 fixed top-0 z-50",
    content: "",
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("appTheme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("appTheme", currentTheme);
  }, [currentTheme]);

  const changeTheme = (themeName) => setCurrentTheme(themeName);

  return (
    <ThemeContext.Provider
      value={{ theme: themeMap[currentTheme], currentTheme, changeTheme }}
    >
      <div className={themeMap[currentTheme].wrapper}>{children}</div>
    </ThemeContext.Provider>
  );
};
