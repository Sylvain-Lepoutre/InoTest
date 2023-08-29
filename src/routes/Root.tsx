import { useState, createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { LiveRegion } from "@components/LiveRegion";
import NavBar from "@components/header/NavBar";
import { Breadcrumb } from "@components/header/Breadcrumb_";

import "../App.css";

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
            <Breadcrumb
              path={useLocation().pathname}
              styles={{
                nav: "",
                ol: "flex p-2",
                li: "py-2",
                a: {
                  interactive:
                    "p-2 focus:bg-black focus:text-white transition ease-in-out duration-500 hover:underline hover:underline-offset-4",
                  nonInteractive: "p-2 focus:bg-black focus:text-white transition ease-in-out duration-500",
                },
              }}
            />
          </header>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </LiveRegion>
  );
}

export default Root;
