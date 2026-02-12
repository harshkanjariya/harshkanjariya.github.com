import { ProjectCard } from "../components/projects/ProjectCard.tsx";
import { Project } from "../utils/types.ts";

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
      name: "Firefighter Login",
      description: "A unique animated login page for firefighters.",
      url: "https://harshkanjariya.online/fire-fighter-login/",
      github: "https://github.com/harshkanjariya/fire-fighter-login",
      logo: "https://harshkanjariya.online/fire-fighter-login/logo-removebg-preview.png"
    },
    {
      name: "Photography Website",
      description: "A website for photographers and photo studios.",
      url: "https://harshkanjariya.online/photography",
      github: "https://github.com/harshkanjariya/photography",
      logo: "/logo/photographer.png"
    },
    {
      name: "Browser Computer",
      description: "In browser computer with basic functionalities.",
      url: "https://harshkanjariya.online/computer",
      github: "https://github.com/harshkanjariya/computer",
      logo: "https://harshkanjariya.online/computer/icons/this-pc.png"
    },
    {
      name: "Way2 Advertize",
      description: "My first freelancing project - Website for Amazon Authorized Training Partner company.",
      url: "https://www.way2advertize.com/",
      github: "",
      logo: "https://www.way2advertize.com/assets/icon/favicon.png"
    },
    {
      name: "Robofest 2020",
      description: "IoT Robotics Project - Multi-Purpose Defence Rover. Won ₹2,50,000 (Stage 2 Winner).",
      url: "https://indusuni.ac.in/robofest-2020/",
      github: "",
      logo: "/logo/code.jpg"
    },
    {
      name: "MSherpa",
      description: "Personalized All-in-One Finance Agent for financial management.",
      url: "https://msherpa-dev.web.app/",
      github: "",
      logo: "/logo/code.jpg"
    },
    {
      name: "Shared Editor",
      description: "Real-time text sharing without an account. Just sign in with Google to push and share.",
      url: "https://shared-edit.web.app",
      github: "",
      logo: "/logo/code.jpg"
    },
    {
      name: "Chronos",
      description: "Meta cronjob system for personal projects. Uses Google Cloud Scheduler + Firestore to run unlimited cron jobs via a single scheduler trigger.",
      url: "https://chronos-cron.web.app/",
      github: "",
      logo: "https://chronos-cron.web.app/logo.svg"
    },
    {
      name: "Nomisma Hub",
      description: "Open finance data visibility app for FX, stocks (BSE/NSE), metals, and crypto using free public APIs (with fallback). Also exposes APIs for non-time-critical integrations.",
      url: "https://nomisma-hub.web.app/",
      github: "",
      logo: "https://nomisma-hub.web.app/logo.svg"
    },
    {
      name: "Maze Generator",
      description: "Generates unique mazes every time.",
      url: "https://harshkanjariya.online/maze-generator",
      github: "https://github.com/harshkanjariya/maze-generator",
      logo: "/logo/maze.webp"
    },
  ];

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
