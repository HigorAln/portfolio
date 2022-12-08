import classNames from "classnames";
import "../../styles/buttonWorks.css";
import { motion as m } from "framer-motion";

interface Props {
  isLeft?: boolean;
}

export function CardWorks({ isLeft = false }: Props) {
  return (
    <span
      className={classNames(
        "group md:w-full lg:w-[725px] h-[350px] md:h-[450px] flex shadow-md relative",
        {
          "md:self-end": !isLeft,
        }
      )}
    >
      {/* Comentario */}
      <span
        className={classNames("self-end w-full mb-20 z-30", {
          "justify-self-start ml-10 mr-8 sm:mr-14": !isLeft,
          "ml-10 mr-8 sm:ml-14": isLeft,
        })}
      >
        <strong className="font-poppins font-extrabold text-style-w text-4xl tracking-widest">
          Twitter Clone
        </strong>
        <p className="font-poiret text-xl text-style-w">
          for train i do a clone of the twitter
        </p>

        <button className="learn-more mt-4">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">case study</span>
        </button>
      </span>

      <img
        src="https://media.graphassets.com/WEEf3GpNTxSdSs4qxj5W"
        alt="image"
        className="absolute z-0 top-0 left-0 w-full h-full object-cover"
      />
      {/* Fiil */}
      <div className="absolute top-0 left-0 z-10 bg-slate-700 dark:bg-style-g-3 opacity-75 w-full h-full" />
      <m.div className="absolute top-0 left-0 z-20 bg-slate-800 dark:bg-slate-600 group-hover:w-full ease-in-out duration-1000 transition-all opacity-90 w-0 h-full" />
    </span>
  );
}
