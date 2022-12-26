import { useState, useEffect } from "react";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { MyStack } from "../components/Stacks";
import { Welcome } from "../components/Welcome";

import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { SayHello } from "../components/SayHello";
import { Footer } from "../components/Footer";

export function Home() {
  const [messageIsSend, setMessageIsSend] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.replace("#", ""))?.scrollIntoView();
    }
  }, []);

  return (
    <m.div className="overflow-x-hidden relativ scroll-smooth">
      <Header />
      <Welcome
        messageIsSend={messageIsSend}
        setMessageIsSend={setMessageIsSend}
      />
      <AboutMe />
      <Projects />
      <MyStack />

      <SayHello />
      <Footer />

      <Contact />
    </m.div>
  );
}
