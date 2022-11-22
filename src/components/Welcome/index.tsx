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
              <m.img
                initial={{ opacity: 0, y: -110 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1.2 }}
                src="/icons/arrow.svg"
              />
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
