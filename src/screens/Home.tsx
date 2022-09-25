import { useState, useEffect } from "react";
import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";
import { SayHello } from "../components/SayHello";
import { MyStack } from "../components/Stacks";
import { Welcome } from "../components/Welcome";

import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";

export function Home() {
  const [messageIsSend, setMessageIsSend] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.replace("#", ""))?.scrollIntoView();
    }
  }, []);

  return (
    <m.div
      className="overflow-x-hidden bg-white"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ translateX: -5000 }}
    >
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
