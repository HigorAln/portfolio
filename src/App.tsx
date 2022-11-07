import React from "react";
import { ThemeProvider } from "./context/useTheme";
import { Router } from "./router";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
