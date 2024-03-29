import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./screens/Home";

export function Router() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
