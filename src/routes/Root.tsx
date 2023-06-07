import { useState, createContext } from "react";

import "../App.css";
import { Outlet } from "react-router-dom";

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
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <body id={theme} className="h-full w-full">
          <Outlet />
        </body>
      </ThemeContext.Provider>
    </div>
  );
}

export default Root;
