import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import { LiveRegion } from "../components/LiveRegion";

import "../App.css";
import NavBar from "@components/header/NavBar";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function Root() {
  const [theme, setTheme] = useState("light");

  const toggleTheme: void = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="h-full w-full">
        <header id="header">
          <NavBar href="#main" />
        </header>
        <Outlet />
      </div>
      <LiveRegion />
    </ThemeContext.Provider>
  );
}

export default Root;
