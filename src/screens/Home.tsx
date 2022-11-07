import { useState, useEffect } from "react";
import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";
import { SayHello } from "../components/SayHello";
import { MyStack } from "../components/Stacks";
import { Welcome } from "../components/Welcome";

import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ButtonOtherPortfolio } from "../components/ButtonOtherPortfolio";
import { ButtonTheme } from "../components/ButtonTheme";

export function Home() {
  const [messageIsSend, setMessageIsSend] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.replace("#", ""))?.scrollIntoView();
    }
  }, []);

  return (
    <m.div className="overflow-x-hidden">
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

      <ButtonOtherPortfolio />
      <ButtonTheme />
    </m.div>
  );
}
