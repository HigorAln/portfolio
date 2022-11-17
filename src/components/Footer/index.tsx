import { motion as m } from "framer-motion";

export function Footer() {
  return (
    <m.div className="h-[20vh] border-t-2 mt-44 flex justify-center items-center">
      <m.h1 className="text-sm md:text-lg font-poppins tracking-wider dark:text-style-w">
        Create with <m.span>❤️</m.span> by Higor Allan
      </m.h1>
    </m.div>
  );
}
