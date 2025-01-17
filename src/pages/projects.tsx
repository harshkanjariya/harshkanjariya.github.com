import { ProjectCard } from "../components/projects/ProjectCard.tsx";

export function Projects() {
  const projects = [
    { name: "Emplitrack", description: "This is a project", url: "https://example.com" },
    { name: "MSK-Markdown", description: "This is another project", url: "https://example.com" },
    { name: "Bhai-Lang", description: "This is a third project", url: "https://example.com" },
    { name: "Project 4", description: "Description for project 4", url: "https://example.com" },
    { name: "Project 5", description: "Description for project 5", url: "https://example.com" },
    { name: "Project 6", description: "Description for project 6", url: "https://example.com" },
    { name: "Project 7", description: "Description for project 7", url: "https://example.com" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-7 p-7 md:py-20 md:px-28">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
}
