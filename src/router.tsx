import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./screens/Home";
import { Project } from "./screens/Project";

export function Router() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<Project />} />
    </Routes>
  );
}
