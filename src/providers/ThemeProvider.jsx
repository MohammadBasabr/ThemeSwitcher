import React, { useState } from "react";
import { THEME_TYPE } from "../constants";

const InitialState = THEME_TYPE.LIGHT;

export const ThemeContext = React.createContext(InitialState);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(InitialState);

  const switcher = (currentTheme) => {
    switch (currentTheme) {
      case THEME_TYPE.LIGHT:
        setTheme(THEME_TYPE.DARK);
        break;
      case THEME_TYPE.DARK:
        setTheme(THEME_TYPE.LIGHT);
        break;

      default:
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ themeMode: theme, switch: switcher }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
