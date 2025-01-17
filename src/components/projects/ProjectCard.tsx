import { Project } from "../../utils/types.ts";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flip-card w-full aspect-[9/12] perspective-[500px]">
      <div className="content text-white w-full h-full transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">
        <div className="front text-xl bg-blue-600 flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 backface-hidden">
          {props.project.name}
        </div>
        <div className="back bg-blue-900 p-4 flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
          {props.project.description}
        </div>
      </div>
    </div>
  );
}
