import { motion as m } from "framer-motion";
import { CardWorks } from "./Card";

export function MyStack() {
  return (
    <m.div
      className="flex flex-col items-center w-full overflow-hidden"
      id="stacks"
    >
      <div className="flex flex-col w-full max-w-7xl py-20 relative">
        <span className="w-full flex items-center flex-col">
          <p className="font-poiret text-xl dark:text-style-g-ed">
            CASE STUDIES
          </p>
          <strong className="font-poppins text-4xl dark:text-style-g-ed">
            Latest Works
          </strong>
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
