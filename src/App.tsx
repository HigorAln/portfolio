import { motion as m } from "framer-motion";
import { useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { SayHello } from "./components/SayHello";
import { MyStack } from "./components/Stacks";
import { Welcome } from "./components/Welcome";

function App() {
  const [messageIsSend, setMessageIsSend] = useState(false);

  return (
    <m.div className="overflow-x-hidden bg-white">
      <Welcome
        messageIsSend={messageIsSend}
        setMessageIsSend={setMessageIsSend}
      />
      <AboutMe />
      <Projects />
      <MyStack />
      <SayHello
        setMessageIsSend={setMessageIsSend}
        messageIsSend={messageIsSend}
      />
      <Footer />
    </m.div>
  );
}

export default App;
