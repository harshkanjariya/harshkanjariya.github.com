import { ProjectCard } from "../components/projects/ProjectCard.tsx";
import {Project} from "../utils/types.ts";

export function Projects() {
  const projects: Project[] = [
    {
      name: "EmpliTrack",
      description: "An employee tracking and management system.",
      url: "https://www.emplitrack.com",
      github: "",
      logo: "/logo/emplitrack.webp"
    },
    {
      name: "MSK Markdown Editor",
      description: "A user-friendly online markdown editor.",
      url: "https://msk-markdown.netlify.app",
      github: "https://github.com/msk-apps/msk-markdown",
      logo: "/logo/msk-markdown.png"
    },
    {
      name: "BhaiLang",
      description: "A toy programming language for fun learning.",
      url: "https://bhailang.js.org/",
      github: "https://github.com/DulLabs/bhai-lang",
      logo: "/logo/bhailang.png"
    },
    {
      name: "Mock-n-Serve",
      description: "A mock server for testing CORS integrations.",
      url: "https://mock-n-serve.onrender.com/",
      github: "https://github.com/harshkanjariya/mock-n-serve",
      logo: "/logo/code.jpg"
    },
    {
      name: "Maze Generator",
      description: "Generates unique mazes every time.",
      url: "https://harshkanjariya.xyz/maze-generator",
      github: "https://github.com/harshkanjariya/maze-generator",
      logo: "/logo/maze.webp"
    },
    {
      name: "Firefighter Login",
      description: "A unique animated login page for firefighters.",
      url: "https://harshkanjariya.xyz/fire-fighter-login/",
      github: "https://github.com/harshkanjariya/fire-fighter-login",
      logo: "https://harshkanjariya.xyz/fire-fighter-login/logo-removebg-preview.png"
    },
    {
      name: "Photography Website",
      description: "A website for photographers and photo studios.",
      url: "https://harshkanjariya.xyz/photography",
      github: "https://github.com/harshkanjariya/photography",
      logo: "/logo/photographer.png"
    },
    {
      name: "Browser Computer",
      description: "In browser computer with basic functionalities.",
      url: "https://harshkanjariya.xyz/computer",
      github: "https://github.com/harshkanjariya/computer",
      logo: "https://harshkanjariya.xyz/computer/icons/this-pc.png"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-7 p-7 md:py-20 md:px-28">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}
