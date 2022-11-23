import { motion as m } from "framer-motion";
import {
  GetProjectsSimpleQuery,
  useGetProjectsSimpleQuery,
} from "../../graphql/generated";
import { Card } from "./Card";

export function Projects() {
  const { data, error } = useGetProjectsSimpleQuery();

  if (error) return null;

  return (
    <m.div
      className="z-10 flex flex-col items-center w-full px-5 md:px-28"
      id="studies"
    >
      <div className="max-w-7xl w-full">
        <m.p className="text-5xl md:text-4xl font-poiret text-gray-900 dark:text-style-g-ed tracking-widest pt-20">
          a brief history
        </m.p>
        <m.p className="text-5xl md:text-2xl mt-3 font-poiret mb-8 md:mb-24 text-gray-900 dark:text-style-g-ed tracking-widest">
          my story is brief but my evolution is constant
        </m.p>

        <div className="w-full flex flex-col gap-2">
          <span className="grid grid-cols-3">
            <span></span>
            <span></span>
            <div className="flex justify-between bg-slate-400 p-3 rounded-lg mr-20 -ml-20">
              <span>
                <p className="font-poiret text-3xl">Patriani</p>
                <p className="font-poiret text-lg">Web Developer</p>
              </span>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret">08-22</p>
              </span>
            </div>
          </span>
          <span className="grid grid-cols-3">
            <span></span>
            <div className="flex justify-between bg-slate-400 p-3 rounded-lg">
              <span>
                <p className="font-poiret text-3xl">Workfy</p>
                <p className="font-poiret text-lg">Web Developer</p>
              </span>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret">02-22</p>
              </span>
            </div>
            <span></span>
          </span>
          <span className="grid grid-cols-3">
            <div className="flex justify-between bg-slate-400 p-3 rounded-lg ml-20 -mr-20">
              <span>
                <p className="font-poiret text-3xl">Freelancer</p>
                <p className="font-poiret text-lg">Web Developer</p>
              </span>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret">11-21</p>
              </span>
            </div>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </m.div>
  );
}
