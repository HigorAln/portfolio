import { AnimatePresence } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Tooltip } from "../ToolTip/index";
import { motion as m } from "framer-motion";

export function Contact() {
  return (
    <>
      <AnimatePresence>
        <m.div
          className="fixed bottom-0 left-5 w-10 z-30 \
       h-fit hidden md:flex flex-col items-center gap-4 \
       after:content[''] after:block after:w-[1px] after:h-[90px] \ 
       after:mx-auto after:my-0 after:bg-slate-900 dark:after:bg-style-w"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Tooltip content="Github" side="right">
            <a
              href="https://github.com/higoraln"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsGithub
                size={24}
                className="cursor-pointer dark:fill-style-g-ed hover:opacity-60 transition-opacity"
              />
            </a>
          </Tooltip>
          <Tooltip content="LinkedIn" side="right">
            <a href="https://www.linkedin.com/in/higor-allan/">
              <BsLinkedin
                size={24}
                className="cursor-pointer dark:fill-style-g-ed hover:opacity-60 transition-opacity"
              />
            </a>
          </Tooltip>

          <Tooltip content="Twitter" side="right">
            <a href="https://twitter.com/HigorAllan4">
              <BsTwitter
                size={24}
                className="cursor-pointer dark:fill-style-g-ed hover:opacity-60 transition-opacity"
              />
            </a>
          </Tooltip>
        </m.div>
      </AnimatePresence>

      <AnimatePresence>
        <m.div
          className="fixed bottom-0 right-5 w-10 z-30 \
       h-fit hidden md:flex flex-col items-center gap-4 \
       after:content[''] after:block after:w-[1px] after:h-[90px] \ 
       after:mx-auto after:my-0 after:bg-slate-900 dark:after:bg-style-w"
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          <a
            href="mailto:higor.allan21@gmail.com"
            className="hover:opacity-60 text-black dark:text-style-w transition-opacity"
            style={{ writingMode: "vertical-lr" }}
          >
            higor.allan21@gmail.com
          </a>
        </m.div>
      </AnimatePresence>
    </>
  );
}
