import { AnimatePresence, motion as m } from "framer-motion";

interface Props {
  setMessageIsSend: (value: boolean) => void;
  messageIsSend: boolean;
}

export function Welcome({ messageIsSend }: Props) {
  return (
    <m.div
      id="home"
      className="z-10 w-screen h-[calc(100vh)] pt-4 flex flex-col items-center justify-center relative"
    >
      {!messageIsSend ? (
        <AnimatePresence>
          <m.h1
            className="text-6xl md:text-7xl 2xl:text-9xl font-title dark:text-style-g-ed"
            initial={{ opacity: 0, y: 20 }}
            layout
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2 },
            }}
            exit={{ opacity: 0, y: 20 }}
          >
            Higor Allan
          </m.h1>
          <m.h2
            className="font-poppins text-xl md:text-2xl mt-4 text-center w-[80%] dark:text-style-g-ed"
            layout
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.5 },
            }}
          >
            Front-end Developer & Ethical Hacking ❤️
          </m.h2>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <m.h1
            className="text-6xl md:text-7xl 2xl:text-9xl font-title"
            initial={{ opacity: 0, y: 20 }}
            layout
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2 },
            }}
            exit={{ opacity: 0, y: 20 }}
          >
            Mensagem enviada!
          </m.h1>
        </AnimatePresence>
      )}
    </m.div>
  );
}
