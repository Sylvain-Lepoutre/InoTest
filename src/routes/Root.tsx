import { useState, createContext } from "react";

import Home from "@pages/Home";
import "../App.css";

function Root() {
  const ThemeContext = createContext("light");
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id="light">
          <Home />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default Root;
