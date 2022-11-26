import { AnimatePresence, motion as m } from "framer-motion";

interface Props {
  setMessageIsSend: (value: boolean) => void;
  messageIsSend: boolean;
}

export function Welcome({ messageIsSend }: Props) {
  return (
    <m.div className="z-10 w-screen h-[calc(100vh)] flex flex-col items-center justify-center">
      {!messageIsSend ? (
        <AnimatePresence>
          <div className="w-fit -mb-40">
            <m.h1
              className="text-6xl md:text-7xl 2xl:text-[82px] font-poiret dark:text-style-g-ed"
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
              className="font-poiret text-xl md:text-3xl w-full mb-24 text-end dark:text-style-g-ed"
              layout
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.5 },
              }}
            >
              Software Engineer
            </m.h2>

            <div className="items-center flex justify-center mb-20">
              <m.button
                initial={{ opacity: 0, y: -110 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1.2 }}
                className="animate-bounce group"
                onClick={() => {
                  scrollTo(0, window.innerHeight);
                }}
              >
                <m.svg
                  width="23"
                  height="128"
                  viewBox="0 0 23 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4393 127.063C11.0251 127.648 11.9749 127.648 12.5607 127.063L22.1066 117.517C22.6924 116.931 22.6924 115.981 22.1066 115.395C21.5208 114.81 20.5711 114.81 19.9853 115.395L11.5 123.881L3.01472 115.395C2.42893 114.81 1.47918 114.81 0.893398 115.395C0.307612 115.981 0.307612 116.931 0.893398 117.517L10.4393 127.063ZM10 0.998047L10 63.5H13L13 0.998047L10 0.998047ZM10 63.5L10 126.002H13L13 63.5H10Z"
                    className="fill-black dark:fill-white group-hover:opacity-50 transition-opacity"
                  />
                </m.svg>
              </m.button>
            </div>
          </div>
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
