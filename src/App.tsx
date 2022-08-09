import { motion as m } from "framer-motion";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { SayHello } from "./components/SayHello";
import { MyStack } from "./components/Stacks";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <m.div className="overflow-x-hidden bg-white">
      <Welcome />
      <AboutMe />
      <Projects />
      <MyStack />
      <SayHello />
      <Footer />
    </m.div>
  );
}

export default App;
