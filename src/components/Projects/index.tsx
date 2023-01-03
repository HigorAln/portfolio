import { motion as m } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.2,
      staggerDirection: -1,
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
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function Projects() {
  return (
    <m.div
      className="z-10 min-h-[600px] md:min-h-[800px] flex flex-col items-center justify-center w-full px-5"
      id="studies"
    >
      <div className="max-w-7xl flex flex-col w-full min-h-[600px] md:min-h-[800px] h-full">
        <span className="w-full sm:px-14 xl:px-0 flex flex-col">
          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-poiret text-gray-900 dark:text-style-g-ed tracking-widest pt-20 sm:pt-32"
          >
            a brief history
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-2xl mt-3 font-poiret text-gray-900 dark:text-style-g-ed tracking-widest"
          >
            my story is brief but my evolution is constant
          </m.p>
        </span>
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full h-full flex flex-col-reverse md:flex-col gap-8 flex-1 justify-center"
        >
          <m.span
            variants={item}
            transition={{ delay: 2.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            <span className="hidden md:flex"></span>
            <span></span>
            {/* PRIMEIRO */}
            <m.div className="flex justify-between bg-slate-400 dark:bg-slate-700 shadow-xl shadow-gray-300 dark:shadow-gray-900 p-3 rounded-lg md:mr-20 md:-ml-20">
              <span>
                <p className="font-poiret text-3xl dark:text-style-w">
                  Patriani
                </p>
                <p className="font-poiret text-lg dark:text-style-w">
                  Web Developer
                </p>
              </span>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret dark:text-style-w">08-22</p>
              </span>
            </m.div>
          </m.span>
          <m.span
            variants={item}
            transition={{ delay: 2.0 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            <span></span>
            {/* Segundo */}
            <m.div className="flex justify-between bg-slate-400 dark:bg-slate-700 shadow-xl shadow-gray-300 dark:shadow-gray-900 p-3 rounded-lg">
              <div>
                <p className="font-poiret text-3xl dark:text-style-w">Workfy</p>
                <p className="font-poiret text-lg dark:text-style-w">
                  Web Developer
                </p>
              </div>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret dark:text-style-w">02-22</p>
              </span>
            </m.div>
            <span></span>
          </m.span>
          <m.span
            variants={item}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {/* terceiro */}
            <m.div className="flex justify-between bg-slate-400 dark:bg-slate-700 shadow-xl shadow-gray-300 dark:shadow-gray-900 p-3 rounded-lg md:ml-20 md:-mr-20">
              <span>
                <p className="font-poiret text-3xl text-style-background dark:text-style-w">
                  Freelancer
                </p>
                <p className="font-poiret text-lg text-style-background dark:text-style-w">
                  Web Developer
                </p>
              </span>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret text-style-background dark:text-style-w">
                  11-21
                </p>
              </span>
            </m.div>
            <span></span>
            <span></span>
          </m.span>
        </m.div>
      </div>
    </m.div>
  );
}
