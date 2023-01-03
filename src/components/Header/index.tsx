import { Sun } from "phosphor-react";
import React from "react";
import { useTheme } from "../../context/useTheme";
import { Tooltip } from "../ToolTip";
import classnames from "classnames";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export function Header() {
  const { handleChangeTheme, theme } = useTheme();
  const [scrollTop, setScrollTop] = React.useState(false);
  const [direction, setDirection] = React.useState("up");

  let oldScrollY = 0;

  const controlDirection = () => {
    const B = document.body; //IE 'quirks'
    let D = document.documentElement; //IE with doctype
    D = D.clientHeight ? D : B;

    if (D.scrollTop < 100) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }

    if (window.scrollY > oldScrollY) {
      setDirection("down");
    } else {
      setDirection("up");
    }
    oldScrollY = window.scrollY;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return (
    <header
      className={classnames(
        "fixed z-40 top-0 right-0 left-0 h-16 flex px-4 lg:px-0 justify-center transition-all duration-300 bg-style-w dark:bg-style-background",
        {
          "-top-16": direction === "down",
          "top-0": direction === "up",
          "shadow-sm dark:shadow-md": scrollTop,
        }
      )}
    >
      <div className="max-w-6xl w-full flex items-center justify-between">
        <span className="h-full flex items-center">
          <a href="#home"></a>
        </span>

        <span className="flex-1 hidden sm:flex justify-end pr-8">
          <ul className="">
            <li className="flex gap-4">
              <a
                href="#home"
                className="text-sm after:flex after:w-0 hover:after:w-full after:transition-all after:bg-style-background after:dark:bg-style-w after:h-[1px] transition-all dark:text-style-w"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm after:flex after:w-0 hover:after:w-full after:transition-all after:bg-style-background after:dark:bg-style-w after:h-[1px] transition-all dark:text-style-w"
              >
                About
              </a>
              <a
                href="#studies"
                className="text-sm after:flex after:w-0 hover:after:w-full after:transition-all after:bg-style-background after:dark:bg-style-w after:h-[1px] transition-all dark:text-style-w"
              >
                Studies
              </a>
              <a
                href="#stacks"
                className="text-sm after:flex after:w-0 hover:after:w-full after:transition-all after:bg-style-background after:dark:bg-style-w after:h-[1px] transition-all dark:text-style-w"
              >
                Stacks
              </a>
              <a
                href="#sayhello"
                className="text-sm after:flex after:w-0 hover:after:w-full after:transition-all after:bg-style-background after:dark:bg-style-w after:h-[1px] transition-all dark:text-style-w"
              >
                Say hello
              </a>
            </li>
          </ul>
        </span>

        <span className="h-full flex items-center gap-6">
          <button className="" onClick={() => handleChangeTheme()}>
            {theme === "dark" && (
              <BsFillMoonFill className="text-style-w" size={24} />
            )}
            {theme === "light" && (
              <BsFillSunFill className="text-style-background" size={24} />
            )}
          </button>

          <a
            href="/downloads/curriculo.pdf"
            className="bg-slate-900 dark:bg-slate-800 text-style-w py-1 px-4 rounded-lg shadow-md hover:opacity-80 active:bg-style-background transition-opacity"
          >
            Resume
          </a>
        </span>
      </div>
    </header>
  );
}
