/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import "../../styles/buttonWorks.css";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { Tooltip } from "../ToolTip";

interface Props {
  isLeft?: boolean;
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export function CardWorks({ isLeft = false, ...props }: Props) {
  return (
    <m.span
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      viewport={{ once: true }}
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
          {props.title}
        </strong>
        <p className="font-poiret text-xl text-style-w">{props.description}</p>

        <a href={props.url} target="_blank">
          <button className="learn-more mt-4">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">case study</span>
          </button>
        </a>
      </span>

      <img
        src={props.image}
        alt="image"
        className="absolute z-0 top-0 left-0 w-full h-full object-cover"
      />
      {/* Fiil */}
      <div className="absolute top-0 left-0 z-10 bg-slate-700 dark:bg-style-g-3 opacity-75 w-full h-full" />
      <m.div className="absolute top-0 left-0 z-20 bg-slate-800 dark:bg-slate-600 group-hover:w-full ease-in-out duration-1000 transition-all opacity-90 w-0 h-full" />
    </m.span>
  );
}
