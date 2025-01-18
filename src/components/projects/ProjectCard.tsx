import { Project } from "../../utils/types.ts";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flip-card w-full aspect-[9/12] perspective-[500px]">
      <div className="content text-white w-full h-full transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">
        <div className="front text-xl bg-blue-600 flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 backface-hidden">
          {props.project.logo &&
              <img src={props.project.logo}
                  alt={`${props.project.name} logo`}
                  className="w-1/2 rounded-lg mb-10" />}
          {props.project.name}
        </div>
        <div
          className="back bg-blue-900 p-4 flex flex-col gap-4 justify-center items-center w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
          {props.project.description}
          <div onClick={() => window.open(props.project.url, "project")}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md flex flex-row items-center gap-2">
            <img src="/preview.png" alt="preview" width="30"/> Preview
          </div>
          {props.project.github &&
          <button onClick={() => window.open(props.project.github, "github")}
                  className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md flex flex-row items-center gap-2">
              <img src="/github.png" alt="preview" width="25"/> Github
          </button>
          }
        </div>
      </div>
    </div>
  );
}
