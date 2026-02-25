import { ProjectCard } from "../components/projects/ProjectCard.tsx";
import { Project } from "../utils/types.ts";
import projectsData from "../assets/projects.json";

// Priority order: AI/LLM (1) → Full-Stack (8) → Mobile (6) → everything else
const CATEGORY_PRIORITY: number[] = [1, 8, 6];

function projectPriority(p: Project): number {
  const cats = p.skillCategories ?? [];
  for (let i = 0; i < CATEGORY_PRIORITY.length; i++) {
    if (cats.includes(CATEGORY_PRIORITY[i])) return i;
  }
  return CATEGORY_PRIORITY.length;
}

const projects: Project[] = [...(projectsData as Project[])].sort(
  (a, b) => projectPriority(a) - projectPriority(b)
);

export function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of things I've built and shipped. From web apps to IoT projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
