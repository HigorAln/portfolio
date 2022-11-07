import { AnimatePresence } from "framer-motion";
import { Moon, Sun } from "phosphor-react";
import React from "react";
import { useTheme } from "../../context/useTheme";
import { Tooltip } from "../ToolTip";
import { motion as m } from "framer-motion";

export function ButtonTheme() {
  const { forceRender } = useTheme();
  const [scrollTop, setScrollTop] = React.useState(false);

  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    if (theme === "light") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    forceRender();
  }, [theme]);

  React.useEffect(() => {
    function changeScroll() {
      const B = document.body; //IE 'quirks'
      let D = document.documentElement; //IE with doctype
      D = D.clientHeight ? D : B;

      if (D.scrollTop < 100) {
        setScrollTop(false);
      } else {
        setScrollTop(true);
      }
    }

    document.addEventListener("scroll", changeScroll);
  }, []);

  return (
    <Tooltip duration={100} content="Change theme">
      <AnimatePresence>
        {scrollTop && (
          <m.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-700 fixed bottom-8 right-32 dark:bg-style-g-2 w-14 \
          h-14 rounded-full flex items-center justify-center \
          shadow-2xl after:content-[''] after:absolute \
          after:bg-slate-700 dark:after:bg-style-g-0 after:-bottom-6 after:w-12 after:h-4 after:blur \
          after:rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" && <Moon className="text-style-w" size={24} />}
            {theme === "light" && <Sun className="text-style-w" size={24} />}
          </m.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!scrollTop && (
          <AnimatePresence>
            <button
              className="absolute top-10 right-14"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" && <Moon className="text-style-w " size={32} />}
              {theme === "light" && (
                <Sun className="text-style-background" size={32} />
              )}
            </button>
          </AnimatePresence>
        )}
      </AnimatePresence>
    </Tooltip>
  );
}
