import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";

import { LiveRegion } from "../components/LiveRegion";

import "../App.css";
import NavBar from "@components/header/NavBar";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({ theme: "", toggleTheme: () => undefined });

function Root() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <LiveRegion live="assertive" className="sr-only">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme} className="h-full w-full">
          <header id="header">
            <NavBar href="#main" />
          </header>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </LiveRegion>
  );
}

export default Root;
