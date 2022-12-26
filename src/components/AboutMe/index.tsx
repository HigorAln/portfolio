import { motion as m } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { stacks, stacks2 } from "../../utils/stacks";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
    },
  },
  // exit: {
  //   transition: {
  //     staggerChildren: 0.07,
  //     staggerDirection: -1,
  //   },
  // },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AboutMe() {
  const ref = useRef(null);
  const windows = useRef(400);
  const [_, render] = useState({});
  const forceUpdated = useCallback(() => render({}), []);

  useEffect(() => {
    windows.current = window.innerWidth;
    forceUpdated();
  }, []);

  return (
    <m.div
      className="z-10 pt-20 w-screen min-h-[800px] h-full flex flex-col items-center justify-center relative px-4 md:px-20 2xl:px-0"
      ref={ref}
      id="about"
    >
      <div className="max-w-7xl relative w-full h-full flex">
        <m.h1
          className={`font-poppins tracking-widest text-[50px] sm:text-[80px] md:text-[100px] lg:text-[145px] 2xl:text-[210px] font-bold text-gray-100 dark:text-style-g-e6 absolute top-0 leading-[10rem] sm:right-0 z-0`}
          layout
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          About me
        </m.h1>

        <div className="w-full flex flex-col sm:flex-row h-full pt-28 sm:pt-24 lg:pt-28 2xl:pt-32 z-10">
          <span className="sm:w-2/5 sm:h-full">
            <img
              src="https://github.com/higoraln.png"
              alt=""
              className="w-[90%] rounded-tr-3xl rounded-bl-3xl rounded-tl-xl rounded-br-xl"
            />
          </span>

          <span className="sm:w-3/5 h-full pt-10 sm:pt-0 flex flex-col items-center gap-8">
            <m.div
              className="max-w-[550px] w-full flex flex-col gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
            >
              <m.p
                variants={item}
                className="text-base sm:text-xl font-poppins text-slate-700 dark:text-style-g-ed"
              >
                Individual focused on performance and secure applications.
              </m.p>
              <m.p
                variants={item}
                className="text-base sm:text-xl font-poppins text-slate-700 dark:text-style-g-ed"
              >
                Currently working as a front-end for the Patriani Construction
                Company where I carry out maintenance and realization of new
                features in payment systems that move billions per year.
              </m.p>
              <m.p
                variants={item}
                className="text-base sm:text-xl font-poppins text-slate-700 dark:text-style-g-ed"
              >
                {`
              I've been in the job market for
              just under 2 years, but I'm always evolving and learning new things
              daily. My focus is to be a front-end specialist, being able to
              provide better performance, security and experience for the end
              user. Excited daily by the evolution of the front-end and where this
              area is heading.
              `}
              </m.p>
            </m.div>
          </span>
        </div>
      </div>
      <div className="w-full flex select-none flex-col gap-2 max-w-7xl mt-20 overflow-hidden">
        <div className="animate-marqueeIn flex w-full gap-6">
          {stacks.map((s) => (
            <span key={s} className="whitespace-nowrap text-3xl text-gray-300">
              {s}
            </span>
          ))}
        </div>
        <div className="animate-marqueeOut flex justify-end w-full gap-6 ">
          {stacks2.map((s) => (
            <span key={s} className="whitespace-nowrap text-3xl text-gray-300">
              {s}
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
}
