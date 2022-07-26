import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

interface IInformation {
  avatar_url: string;
  followers: number;
  following: number;
  url: string;
  location: string;
  name: string;
  public_repos: number;
  html_url: string;
}

export function MyStack() {
  const [information, setInformation] = useState<IInformation | null>(null);
  useEffect(() => {
    fetch("https://api.github.com/users/higoraln")
      .then((r) => r.json())
      .then((r) => setInformation(r));
  }, []);

  return (
    <m.div
      className="z-10 flex flex-col w-full px-5 md:px-28 overflow-hidden"
      id="stacks"
    >
      <m.h1
        className="text-5xl md:text-7xl mb-8 mt-32 md:mb-24 text-gray-900 dark:text-style-g-ed tracking-widest"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        viewport={{ once: true }}
        layout
      >
        my stack`s:
      </m.h1>

      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full py-20 flex flex-col items-center lg:w-4/12 ">
          <m.img
            src={information?.avatar_url}
            alt="my photo"
            className="border-image shadow-2xl h-72"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
          />

          <m.span
            className="flex flex-wrap justify-center gap-2 mt-5 items-center dark:text-style-g-ed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            <span className="p-3 text-sm rounded-lg shadow-md sm:text-md select-none dark:bg-style-g-3">
              Followers {information?.followers}
            </span>
            <span className="p-3 text-sm rounded-lg shadow-md sm:text-md select-none dark:bg-style-g-3">
              Following {information?.following}
            </span>

            <a
              href={information?.html_url}
              className="flex gap-3 p-3 rounded-lg shadow-md dark:bg-style-g-3"
              target={"_blank"}
              rel="noreferrer"
            >
              <p className="dark:text-style-g-ed">Github</p>
              <m.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={"cursor-pointer dark:fill-style-g-ed"}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </m.svg>
            </a>
          </m.span>
        </div>

        <div className="flex flex-col flex-1 p-5 gap-2 justify-center">
          {stacksFrontend.map((stack) => (
            <span className="flex items-center gap-3" key={stack.name}>
              <m.p className="font-poppins dark:text-style-g-ed">
                {stack.name}
              </m.p>
              <m.div
                className={`h-1 bg-green-600 rounded-md`}
                initial={{ width: 0 }}
                whileInView={{
                  width: `${stack.quantity}%`,
                  transition: { duration: "1" },
                }}
              />
              <m.p className="font-poppins dark:text-style-g-ed">
                {stack.quantity}%
              </m.p>
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
}

const stacksFrontend = [
  {
    name: "React",
    quantity: 85,
  },
  {
    name: "React Native",
    quantity: 30,
  },
  {
    name: "Typescript",
    quantity: 85,
  },
  {
    name: "Javascript",
    quantity: 90,
  },
  {
    name: "NodeJs",
    quantity: 50,
  },
  {
    name: "Jest",
    quantity: 70,
  },
  {
    name: "Git",
    quantity: 80,
  },
  {
    name: "Linux",
    quantity: 50,
  },
];
