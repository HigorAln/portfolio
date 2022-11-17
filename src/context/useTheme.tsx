import React, { useContext } from "react";

interface ThemeContextProps {
  forceRender: () => void;
  handleChangeTheme: () => void;
  theme: string;
}

const ThemeContext = React.createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [_, setRender] = React.useState({});
  const forceRender = React.useCallback(() => setRender({}), []);

  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    const themeLocal = localStorage.getItem("theme");
    if (themeLocal) {
      return themeLocal as any;
    }
    return "light";
  });

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  function handleChangeTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.theme = theme === "dark" ? "light" : "dark";
  }

  return (
    <ThemeContext.Provider
      value={{
        forceRender,
        theme,
        handleChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
