import { useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "../utils/types.ts";
import projectsData from "../assets/projects.json";

const allProjects: Project[] = projectsData as Project[];

interface SkillCategory {
  id: number;
  title: string;
  subtitle: string;
  skills: string[];
  pitch?: string;
  color: string;
  gradient: string;
  showMoreLink?: string;
}

const categories: SkillCategory[] = [
  {
    id: 1,
    title: "AI / LLM Systems & Automation",
    subtitle: "Intelligent Solutions",
    skills: [
      "OpenAI APIs",
      "LangChain",
      "AI agents & workflows",
      "Document processing",
      "AI + backend integration",
    ],
    color: "indigo",
    gradient: "from-indigo-500 to-purple-500",
    showMoreLink: "/ai-work",
  },
  {
    id: 2,
    title: "Web3 / Blockchain Development",
    subtitle: "Decentralized Solutions",
    skills: ["Ethereum", "ethers.js", "Wallet integrations", "Token launch platforms"],
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    title: "DevOps / Cloud / Infrastructure",
    subtitle: "Scalable Infrastructure",
    skills: ["AWS", "Terraform (IaC)", "Docker, Kubernetes", "CI/CD automation"],
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Game Development",
    subtitle: "Interactive Experiences",
    skills: ["Unity (C#)", "Multiplayer backend logic", "Secure transactions"],
    color: "red",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 5,
    title: "IoT / Hardware-Software Systems",
    subtitle: "Connected Devices",
    skills: ["Raspberry Pi", "Firebase", "Hardware-software integration"],
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "Mobile App Development",
    subtitle: "Android & iOS",
    skills: ["Android (Java / Kotlin)", "iOS (Swift)", "Firebase", "REST API integration"],
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 7,
    title: "Backend Engineering",
    subtitle: "APIs, Systems, Scale",
    skills: [
      "Node.js, NestJS, Go, Django",
      "REST APIs, Microservices",
      "Authentication & Security",
      "Payments & Integrations",
      "High-scale system design",
    ],
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 8,
    title: "Full-Stack Web Development",
    subtitle: "React + Backend",
    skills: [
      "React.js (dashboards, SaaS, admin panels)",
      "Node.js / NestJS backend",
      "API-driven UI architecture",
      "Auth flows, role-based dashboards",
      "Production-ready web apps",
    ],
    pitch: "I build complete web applications end-to-end using React and scalable backend systems.",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
];

function getProjectsForCategory(categoryId: number): Project[] {
  return allProjects.filter((p) => p.skillCategories?.includes(categoryId));
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);

  const selectedProjects = selectedCategory
    ? getProjectsForCategory(selectedCategory.id)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the projects where I've applied them
          </p>
        </div>

        {/* Skills Grid with Expanded View */}
        <div className="relative">
          {/* Backdrop when expanded */}
          {selectedCategory && (
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
              onClick={() => setSelectedCategory(null)}
            />
          )}

          {/* Grid Container */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500 ${
              selectedCategory ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            {categories.map((category) => {
              const projectCount = getProjectsForCategory(category.id).length;
              return (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="text-left cursor-pointer"
                >
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2 flex flex-col h-full">
                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold">{category.id}️⃣</span>
                        <svg
                          className="w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-1">{category.title}</h2>
                      <p className="text-sm sm:text-base opacity-90">{category.subtitle}</p>
                    </div>

                    {/* Content Preview */}
                    <div className="p-6 flex-1">
                      {category.pitch && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                          <p className="text-sm text-gray-700 italic">"{category.pitch}"</p>
                        </div>
                      )}

                      {/* Skills Preview */}
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                          Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                            >
                              {skill.split(",")[0]}
                            </span>
                          ))}
                          {category.skills.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              +{category.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Projects Count */}
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                        <span className="font-semibold">{projectCount}</span>{" "}
                        project{projectCount !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Expanded Modal */}
          {selectedCategory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
              <div className="w-full max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 max-h-[90vh] overflow-y-auto">
                  {/* Expanded Header */}
                  <div className={`bg-gradient-to-r ${selectedCategory.gradient} p-6 sm:p-8 text-white relative`}>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
                      aria-label="Close"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl sm:text-4xl font-bold">{selectedCategory.id}️⃣</span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{selectedCategory.title}</h2>
                    </div>
                    <p className="text-lg sm:text-xl opacity-90">{selectedCategory.subtitle}</p>
                    {selectedCategory.showMoreLink && (
                      <Link
                        to={selectedCategory.showMoreLink}
                        className="inline-block mt-2 text-white/80 hover:text-white underline underline-offset-2 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Show more →
                      </Link>
                    )}
                    {selectedCategory.pitch && (
                      <div className="mt-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                        <p className="text-base sm:text-lg italic">"{selectedCategory.pitch}"</p>
                      </div>
                    )}
                  </div>

                  {/* Expanded Content */}
                  <div className="p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                      {/* Skills Section */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                          <div className={`w-1 h-8 bg-gradient-to-b ${selectedCategory.gradient} rounded-full`} />
                          Skills & Technologies
                        </h3>
                        <div className="space-y-4">
                          {selectedCategory.skills.map((skill, idx) => (
                            <div
                              key={idx}
                              className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedCategory.gradient} mt-2 flex-shrink-0`} />
                                <p className="text-base sm:text-lg text-gray-700 font-medium">{skill}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Projects Section — derived from projects.json */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                          <div className={`w-1 h-8 bg-gradient-to-b ${selectedCategory.gradient} rounded-full`} />
                          Projects ({selectedProjects.length})
                        </h3>
                        {selectedProjects.length === 0 ? (
                          <p className="text-gray-400 text-sm italic">No projects linked yet.</p>
                        ) : (
                          <div className="space-y-4">
                            {selectedProjects.map((project, idx) => (
                              <Link
                                key={project.slug}
                                to={`/projects/${project.slug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="block p-5 sm:p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group/card"
                              >
                                <div className="flex items-start gap-4">
                                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${selectedCategory.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                                    {idx + 1}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4 className="font-bold text-gray-800 text-lg sm:text-xl group-hover/card:text-blue-600 transition-colors">
                                        {project.name}
                                      </h4>
                                      {project.year && (
                                        <span className="text-xs text-gray-400 font-medium">{project.year}</span>
                                      )}
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                      {project.skillNote || project.description}
                                    </p>
                                    {project.tags && project.tags.length > 0 && (
                                      <div className="flex flex-wrap gap-1 mt-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                          <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-blue-50 text-blue-500 border border-blue-100">
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 text-gray-300 group-hover/card:text-blue-400 flex-shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {!selectedCategory && (
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              Click on any category to see detailed skills and projects
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
