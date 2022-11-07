import { gql, useQuery } from "@apollo/client";
import { motion as m } from "framer-motion";
import {
  GetProjectsSimpleQuery,
  useGetProjectsSimpleQuery,
} from "../../graphql/generated";
import { projects } from "../../utils/projects";
import { Card } from "./Card";

export function Projects() {
  const { data, error } = useGetProjectsSimpleQuery();

  if (error) return null;

  return (
    <m.div className="flex flex-col w-full px-5 md:px-28" id="projects">
      <m.h1
        className="text-5xl md:text-7xl mb-8 md:mb-24 text-gray-900 dark:text-style-g-ed tracking-widest"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        viewport={{ once: true }}
        layout
      >
        some studies:
      </m.h1>

      <m.div
        className="flex flex-wrap w-full gap-2 sm:gap-1"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.7,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {data?.projects.map((project, index: number) => (
          <Card key={project.id} project={project} index={index} />
        ))}
      </m.div>
    </m.div>
  );
}
