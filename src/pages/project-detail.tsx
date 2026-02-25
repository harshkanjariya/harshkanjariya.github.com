import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Project } from "../utils/types.ts";
import projectsData from "../assets/projects.json";

// Eagerly import all project screenshot assets so Vite bundles them
const allScreenshots = import.meta.glob(
  "../assets/project-files/**/*.png",
  { eager: true, import: "default" }
) as Record<string, string>;

function resolveScreenshot(folder: string, filename: string): string {
  const key = `../assets/project-files/${folder}/${filename}`;
  return allScreenshots[key] ?? "";
}

const projects: Project[] = projectsData as Project[];

// Split markdown into top-level sections by ## headings
function splitIntoSections(md: string): { heading: string | null; body: string }[] {
  const lines = md.split("\n");
  const sections: { heading: string | null; body: string }[] = [];
  let currentHeading: string | null = null;
  let currentLines: string[] = [];

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (currentLines.length > 0 || currentHeading !== null) {
        sections.push({ heading: currentHeading, body: currentLines.join("\n").trim() });
      }
      currentHeading = line.replace(/^## /, "").trim();
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }
  if (currentLines.length > 0 || currentHeading !== null) {
    sections.push({ heading: currentHeading, body: currentLines.join("\n").trim() });
  }

  return sections.filter((s) => s.heading !== null || s.body.length > 0);
}

// Custom markdown component map for premium styling
const mdComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-2">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-gray-800 mb-3 mt-1">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-gray-700 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-600 leading-relaxed mb-4 text-base">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-1.5 mb-4 pl-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-1.5 mb-4 pl-1 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-gray-600 text-base">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-800">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-500">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-400 bg-blue-50 rounded-r-xl px-5 py-3 my-4 text-blue-800 italic text-sm">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 text-purple-700 rounded px-1.5 py-0.5 text-sm font-mono">
      {children}
    </code>
  ),
  hr: () => (
    <div className="my-6 border-t border-gray-100" />
  ),
};

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-500 mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const resolvedScreenshots = useMemo(() => {
    if (!project.screenshots || !project.screenshotFolder) return [];
    return project.screenshots
      .map((f) => resolveScreenshot(project.screenshotFolder!, f))
      .filter(Boolean);
  }, [project]);

  const sections = useMemo(() => {
    if (!project.longDescription) return [];
    return splitIntoSections(project.longDescription);
  }, [project.longDescription]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/projects")}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-600 transition-colors duration-200 mb-8 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>

        {/* ── Hero ── */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400" />
          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <ProjectLogo project={project} />
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-2">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    {project.name}
                  </h1>
                  {project.year && (
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-400 font-semibold tracking-wide uppercase">
                      {project.year}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-base sm:text-lg mb-5 leading-relaxed">
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Preview
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 text-sm font-semibold transition-all duration-300 hover:shadow-md transform hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech Stack ── */}
        {project.techStack && project.techStack.length > 0 && (
          <MetaCard title="Tech Stack" icon={<CodeIcon />}>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-blue-100 text-sm font-medium hover:border-blue-300 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MetaCard>
        )}

        {/* ── Features highlight ── */}
        {project.features && project.features.length > 0 && (
          <MetaCard title="Key Features" icon={<StarIcon />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl px-4 py-2.5 border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{f}</span>
                </div>
              ))}
            </div>
          </MetaCard>
        )}

        {/* ── Markdown body ── */}
        {sections.length > 0 && (
          <div className="space-y-0">
            {sections.map((section, idx) => (
              <MarkdownSection key={idx} heading={section.heading} body={section.body} />
            ))}
          </div>
        )}

        {/* Fallback: no longDescription, just show description */}
        {!project.longDescription && (
          <MetaCard title="About" icon={<DocIcon />}>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </MetaCard>
        )}

        {/* ── Screenshots grid ── */}
        {resolvedScreenshots.length > 0 && (
          <MetaCard title="Screenshots" icon={<ImageIcon />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resolvedScreenshots.map((src, i) => (
                <ScreenshotImage key={i} src={src} alt={`${project.name} screenshot ${i + 1}`} />
              ))}
            </div>
          </MetaCard>
        )}

      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function MarkdownSection({ heading, body }: { heading: string | null; body: string }) {
  if (!heading && !body) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-4">
      {heading && (
        <div className="px-8 pt-7 pb-1">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-gradient-to-b from-blue-500 to-purple-500 inline-block" />
            {heading}
          </h2>
        </div>
      )}
      {body && (
        <div className="px-8 py-6 pt-4">
          <ReactMarkdown components={mdComponents}>{body}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}


function MetaCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-4">
      <div className="px-8 py-5 border-b border-gray-50 flex items-center gap-3">
        <span className="text-blue-500">{icon}</span>
        <h2 className="text-base font-bold text-gray-700 tracking-wide">{title}</h2>
      </div>
      <div className="px-8 py-6">{children}</div>
    </div>
  );
}

function ProjectLogo({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);

  if (project.logo && !imageError) {
    return (
      <img
        src={project.logo}
        alt={`${project.name} logo`}
        onError={() => setImageError(true)}
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-3 shadow-md flex-shrink-0"
      />
    );
  }

  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-md flex-shrink-0">
      {project.name.charAt(0)}
    </div>
  );
}

function ScreenshotImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
      <img src={src} alt={alt} onError={() => setError(true)} className="w-full h-auto object-cover" loading="lazy" />
    </div>
  );
}

function CodeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 4.5H11l-3.75 2.75L8.75 15 5 12.25 1.25 15l1.5-4.75L-1.5 7.5H3L5 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}
