import { motion as m } from "framer-motion";
import { ArrowLeft } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import { useGetProjectBySlugQuery } from "../graphql/generated";
import { useEffect } from "react";
import { Tooltip } from "../components/ToolTip";

export function Project() {
  const { slug } = useParams<{ slug: string }>();

  const { data, loading } = useGetProjectBySlugQuery({
    variables: {
      slug: slug!,
    },
  });

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <m.div className="flex justify-center overflow-x-hidden">
      <m.div
        className="w-full flex flex-col items-center"
        // initial={{ opacity: 0, x: -100 }}
        // animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: -100 }}
      >
        <span className="max-w-7xl w-full">
          <Link to="/">
            <button className="max-w-7xl mt-10 mb-5 ml-10 xl:ml-0 hover:opacity-50 transition-opacity">
              <ArrowLeft size={26} className="dark:text-style-g-ed"/>
            </button>
          </Link>
        </span>

        <m.div
          style={{
            backgroundImage: `url('${data?.project?.banner?.url}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className={
            "w-screen max-h-[20rem] min-h-[20rem] md:max-h-[40rem] md:min-h-[40rem]"
          }
        />

        <span className="flex justify-between max-w-7xl w-full px-7 2xl:px-0">
          <m.h1 className="text-3xl md:text-5xl 2xl:text-7xl mt-10 text-gray-900 dark:text-style-g-ed">
            {data?.project?.title}
          </m.h1>

          <div className="hidden sm:flex flex-col gap-4 max-w-xs mt-10">
            <span className="flex items-center gap-4 border-b pb-7">
              {data?.project?.url_github && (
                <Tooltip content="Repositório">
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
                </Tooltip>
              )}
              {data?.project?.url_website && (
                <Tooltip content="Demo Project">
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
                </Tooltip>
              )}
            </span>

            <span className="flex-wrap justify-between gap-4 flex">
              {data?.project?.tecnologies.map((tec) => (
                <Tooltip content={tec.name || ""} key={tec.id}>
                  <img src={tec.image?.url} className="w-14 h-14" />
                </Tooltip>
              ))}
            </span>
          </div>
        </span>

        <span className="flex w-full max-w-7xl mt-20 pb-20">
          <span
            className="text-lg px-10 2xl:px-0 dark:text-style-g-ed"
            dangerouslySetInnerHTML={{
              __html:
                data?.project?.description?.html.replace(
                  /<\/p>/gi,
                  "</p><br/>"
                ) || "",
            }}
          />
        </span>
      </m.div>
    </m.div>
  );
}
