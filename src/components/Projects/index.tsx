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
    <m.div className="z-10 flex flex-col items-center w-full px-5" id="studies">
      <div className="max-w-7xl w-full">
        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-poiret text-gray-900 dark:text-style-g-ed tracking-widest pt-20"
        >
          a brief history
        </m.p>
        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-2xl mt-3 font-poiret mb-8 md:mb-24 text-gray-900 dark:text-style-g-ed tracking-widest"
        >
          my story is brief but my evolution is constant
        </m.p>

        <div className="w-full flex flex-col gap-2">
          <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <span className="hidden md:flex"></span>
            <span></span>
            {/* PRIMEIRO */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="flex justify-between bg-slate-400 dark:bg-slate-700 shadow-xl shadow-gray-300 dark:shadow-gray-900 p-3 rounded-lg md:mr-20 md:-ml-20"
            >
              <span>
                <p className="font-poiret text-3xl dark:text-style-w">
                  Patriani
                </p>
                <p className="font-poiret text-lg dark:text-style-w">
                  Web Developer
                </p>
              </span>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret dark:text-style-w">08-22</p>
              </span>
            </m.div>
          </span>
          <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <span></span>
            {/* Segundo */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              viewport={{ once: true }}
              className="flex justify-between bg-slate-400 dark:bg-slate-700 shadow-xl shadow-gray-300 dark:shadow-gray-900 p-3 rounded-lg"
            >
              <div>
                <p className="font-poiret text-3xl dark:text-style-w">Workfy</p>
                <p className="font-poiret text-lg dark:text-style-w">
                  Web Developer
                </p>
              </div>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret dark:text-style-w">02-22</p>
              </span>
            </m.div>
            <span></span>
          </span>
          <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* terceiro */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              viewport={{ once: true }}
              className="flex justify-between bg-slate-400 dark:bg-slate-700 shadow-xl shadow-gray-300 dark:shadow-gray-900 p-3 rounded-lg md:ml-20 md:-mr-20"
            >
              <span>
                <p className="font-poiret text-3xl text-style-background dark:text-style-w">
                  Freelancer
                </p>
                <p className="font-poiret text-lg text-style-background dark:text-style-w">
                  Web Developer
                </p>
              </span>
              <span className="flex-1"></span>

              <span className="h-full flex items-center">
                <p className="text-3xl font-poiret text-style-background dark:text-style-w">
                  11-21
                </p>
              </span>
            </m.div>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </m.div>
  );
}
