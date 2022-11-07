import React, { useContext } from "react";

interface ThemeContextProps {
  forceRender: () => void;
}

const ThemeContext = React.createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [_, setRender] = React.useState({});
  const forceRender = React.useCallback(() => setRender({}), []);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <ThemeContext.Provider
      value={{
        forceRender,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
