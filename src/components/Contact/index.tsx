import { LinkedinLogo, TwitterLogo } from "phosphor-react";
import { Tooltip } from "../ToolTip/index";

export function Contact() {
  return (
    <>
      <div className="fixed bottom-10 left-5 w-10 z-30 h-[220px] hidden md:flex flex-col items-center gap-4 py-10">
        <Tooltip content="Github" side="right">
          <a
            href="https://github.com/higoraln"
            target={"_blank"}
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={"cursor-pointer dark:fill-style-g-ed"}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </Tooltip>
        <Tooltip content="LinkedIn" side="right">
          <a href="https://www.linkedin.com/in/higor-allan/">
            <LinkedinLogo
              className="text-style-background dark:text-style-w"
              size={32}
            />
          </a>
        </Tooltip>

        <Tooltip content="Twitter" side="right">
          <a href="https://twitter.com/HigorAllan4">
            <TwitterLogo
              className="text-style-background dark:text-style-w"
              size={32}
            />
          </a>
        </Tooltip>

        <span className="">
          <div className="text-style-background dark:text-style-w">|</div>
          <div className="-mt-2 text-style-background dark:text-style-w">|</div>
          <div className="-mt-2 text-style-background dark:text-style-w">|</div>
          <div className="-mt-2 text-style-background dark:text-style-w">|</div>
          <div className="-mt-2 text-style-background dark:text-style-w">|</div>
        </span>
      </div>

      <div className="fixed bottom-10 right-5 w-10 h-[250px] z-40 items-center flex-col hidden md:flex gap-4 py-10">
        <a
          href="mailto:higor.allan21@gmail.com"
          className="hover:opacity-60 text-black dark:text-style-w transition-opacity"
          style={{ writingMode: "vertical-lr" }}
        >
          higor.allan21@gmail.com
        </a>

        <span>
          <div className="flex-1 flex text-style-background dark:text-style-w">
            |
          </div>
          <div className="flex-1 flex -mt-2 text-style-background dark:text-style-w ">
            |
          </div>
          <div className="flex-1 flex -mt-2 text-style-background dark:text-style-w">
            |
          </div>
          <div className="flex-1 flex -mt-2 text-style-background dark:text-style-w">
            |
          </div>
          <div className="flex-1 flex -mt-2 text-style-background dark:text-style-w">
            |
          </div>
          <div className="flex-1 flex -mt-2 text-style-background dark:text-style-w">
            |
          </div>
          <div className="flex-1 flex -mt-2 text-style-background dark:text-style-w">
            |
          </div>
        </span>
      </div>
    </>
  );
}
