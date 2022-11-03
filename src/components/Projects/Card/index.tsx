import { LayoutGroup, motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GetProjectsSimpleQuery } from "../../../graphql/generated";

interface Props {
  project: {
    __typename?: "Project" | undefined;
    id: string;
    title: string;
    slug: string;
    banner?:
      | {
          __typename?: "Asset" | undefined;
          id: string;
          url: string;
        }
      | null
      | undefined;
  };
  index: number;
}

export function Card({ project, index }: Props) {
  const navigate = useNavigate();

  function handleRedirect(slug: string) {
    navigate(`/projects/${slug}`);
  }
  return (
    <LayoutGroup>
      <m.button
        type="button"
        className="group min-w-[300px] flex-1 min-h-[300px] relative"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        onClick={() => handleRedirect(project.slug)}
      >
        <div className="absolute w-full h-full overflow-hidden z-0">
          <m.div
            style={{
              backgroundImage: `url('${project.banner?.url}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "absolute",
            }}
            initial={{
              width: "160%",
              height: "160%",
              top: "-20%",
              left: "-20%",
              opacity: "100",
            }}
            whileHover={{
              top: "0%",
              left: "0%",
              width: "100%",
              height: "100%",
              opacity: "0.3",
            }}
          />
        </div>

        <m.h1
          className="absolute opacity-0 group-hover:opacity-100 -top-6 -left-6 text-black font-bold text-7xl z-10 transition font-cutive delay-100"
          style={{ textShadow: "0px 0px 10px #fff" }}
        >
          {index + 1}
        </m.h1>

        <m.div className="w-full h-full flex flex-col z-10 justify-center gap-3 px-5">
          <m.h1 className="text-black opacity-100 font-poppins text-2xl">
            {project.title}
          </m.h1>
          {/* <m.p className="text-black opacity-100 font-poppins text-sm underline">
            {project.description}
          </m.p> */}
        </m.div>

        {/* <div className="absolute opacity-0 group-hover:opacity-100 delay-500 transition-all bottom-0 right-0 flex items-center justify-end gap-5 mr-5 mb-3">
          {project.github && (
            <a href={project.github} target={"_blank"} rel="noreferrer">
              <m.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={"cursor-pointer"}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </m.svg>
            </a>
          )}

          {project.app && (
            <a href={project.app} target={"_blank"} rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
                className={"cursor-pointer"}
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M48,144a63.8,63.8,0,0,1,64,64"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M48,96A112,112,0,0,1,160,208"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <circle cx="52" cy="204" r="12"></circle>
              </svg>
            </a>
          )}
        </div> */}
      </m.button>
    </LayoutGroup>
  );
}
