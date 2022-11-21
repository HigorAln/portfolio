import { motion as m } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyOut,
} from "react-scroll-motion";

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
    <ScrollContainer>
      <ScrollPage>
        <div
          className="z-10 w-screen h-fit mb-40 flex flex-col items-center justify-center relative"
          id="about"
        >
          <Animator animation={batch(FadeOut(), Move(-200, 0, -200, 0))}>
            <h1
              className={`font-poppins whitespace-nowrap tracking-widest text-6xl sm:text-7xl md:text-8xl 2xl:text-[160px] font-bold text-gray-200 dark:text-style-g-e6 transition-all absolute left-0 z-0`}
            >
              About me
            </h1>
          </Animator>
          <m.h1 className="font-poppins font-light text-md md:text-xl lg:text-2xl text-center md:text-left w-4/5 max-w-5xl z-10 xl:ml-[450px] dark:text-style-w">
            Front-end developer who cares deeply about user experience and
            security.
            <br />
            Always concerned about data protection.
          </m.h1>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}
