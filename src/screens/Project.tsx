import { motion as m } from "framer-motion";
import { ArrowLeft } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { useGetProjectBySlugQuery } from "../graphql/generated";

export function Project() {
  const { slug } = useParams<{ slug: string }>();

  const { data } = useGetProjectBySlugQuery({
    variables: {
      slug: slug!,
    },
  });

  return (
    <m.div className="w-screen flex justify-center">
      <m.div className="w-full max-w-7xl">
        <Link to="/#projects">
          <button className="mt-10 mb-5 ml-10 xl:ml-0 hover:opacity-50 transition-opacity">
            <ArrowLeft size={26} />
          </button>
        </Link>

        <m.div
          style={{
            backgroundImage: `url('${data?.project?.banner?.url}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className={
            "max-h-[20rem] min-h-[20rem] md:max-h-[40rem] md:min-h-[40rem]"
          }
        />

        <span className="flex justify-between">
          <m.h1 className="text-7xl mt-10 text-gray-900">
            {data?.project?.title}
          </m.h1>

          <span className="flex items-center gap-4">
            {data?.project?.url_github && (
              <a
                href={data.project.url_github}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/icons/github.png"
                  alt="Link of the github"
                  className="w-8 h-8 hover:opacity-70"
                />
              </a>
            )}
            {data?.project?.url_website && (
              <a
                href={data.project.url_website}
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="/icons/website.png"
                  alt="LInk of the website"
                  className="w-8 h-8 hover:opacity-70"
                />
              </a>
            )}
          </span>
        </span>
      </m.div>
    </m.div>
  );
}
