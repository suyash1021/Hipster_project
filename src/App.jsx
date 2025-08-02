// src/App.jsx
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";


// This is the inner content that needs access to the theme
const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme.content} mt-12  `}>
      

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

// Main App wrapped with providers
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;