import { AnimatePresence, motion as m } from "framer-motion";

export function SayHello() {
  return (
    <m.div className="w-full flex justify-center mt-24 pt-10" id="sayhello">
      <m.div className="max-w-7xl w-full text-center flex flex-col">
        <p className="font-poiret text-style-g-3 dark:text-style-g-ed text-2xl">
          get in touch
        </p>

        <strong className="text-[42px] text-style-g-3 dark:text-style-g-ed leading-[63px] font-bold">
          Let’s work together
        </strong>

        <p className="text-xl text-slate-600 dark:text-gray-400 font-medium leading-[41px] max-w-[900px] font-poppins self-center">
          if you have a website or mobile app idea in mind or you need some
          advice about product design, feel free to contact me. currently my
          time books quickly, so the sooner you write, the better it is for both
          of us.
        </p>

        <span className="my-4">
          <p className="text-style-g-3 font-poppins text-lg dark:text-style-g-ed">
            <span className="text-style-g-3 dark:text-style-g-ed font-bold font-poppins">
              <span className="text-3xl">☕</span> Reply time:
            </span>{" "}
            within 1-2 working days
          </p>
        </span>

        <a
          href="mailto:higor.allan21@gmail.com"
          className="text-style-w bg-slate-700 rounded-lg max-w-[340px] px-10 py-4 text-xl mt-3 mb-10 self-center \
        hover:bg-slate-600 transition-colors"
        >
          higor.allan21@gmail.com
        </a>
      </m.div>
    </m.div>
  );
}
