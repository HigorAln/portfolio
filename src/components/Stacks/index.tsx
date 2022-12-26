import { motion as m } from "framer-motion";
import { CardWorks } from "./CardWorks";

export function MyStack() {
  return (
    <m.div
      className="flex flex-col items-center w-full overflow-hidden relative"
      id="stacks"
    >
      <div
        className={`absolute h-[1000px] w-[1px] bg-style-g-3 dark:bg-style-w left-[30%] top-[10%]`}
      />
      <div
        className={`absolute h-[1200px] w-[1px] bg-style-g-3 dark:bg-style-w left-[80%] top-[50%]`}
      />
      <div
        className={`absolute h-[1px] w-[500px] bg-style-g-3 dark:bg-style-w left-[30%] top-[50%]`}
      />
      <div
        className={`absolute h-[1px] w-[80%] bg-style-g-3 dark:bg-style-w left-[10%] top-[80%]`}
      />
      <div className="flex flex-col w-full max-w-7xl py-20 relative">
        <span className="w-full flex items-center flex-col">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="font-poiret text-xl dark:text-style-g-ed"
          >
            CASE STUDIES
          </m.p>
          <m.strong
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="font-poppins text-4xl dark:text-style-g-ed"
          >
            Latest Works
          </m.strong>
        </span>

        <div className="flex flex-col gap-16 mt-24 px-5 md:px-20 lg:px-32">
          <CardWorks isLeft />
          <CardWorks />
          <CardWorks isLeft />
        </div>
      </div>
    </m.div>
  );
}
