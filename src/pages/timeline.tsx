import { useState, useEffect } from 'react';

interface TimelineEvent {
  year: string;
  category: string;
  title: string;
  description: string[];
  skills?: string[];
  link?: string;
  icon?: string;
}

export function Timeline() {
  const events: TimelineEvent[] = [
    {
      year: "2019",
      category: "Full-Stack Web Development",
      title: "Way2Advertize",
      description: [
        "HTML/CSS frontend",
        "PHP backend (contact & enquiry system)"
      ],
      skills: ["HTML/CSS", "PHP"],
      link: "https://way2advertize.com"
    },
    {
      year: "2020",
      category: "Backend Engineering",
      title: "2LC Technologies - Startup",
      description: [
        "Co-founded startup with 5 other founders"
      ],
      skills: ["Node.js", "Startup"]
    },
    {
      year: "2021",
      category: "Education",
      title: "Completed B.Tech",
      description: [
        "Graduated from Indus University"
      ]
    },
    {
      year: "2022",
      category: "Web3 / Blockchain",
      title: "Boosters Edutech",
      description: [
        "Web3 IDO Launchpad",
        "ethers.js smart contract interactions"
      ],
      skills: ["Ethereum", "ethers.js", "Wallet integrations", "Token launch platforms"]
    },
    {
      year: "2022",
      category: "Backend Engineering & AI",
      title: "Physics Wallah",
      description: [
        "NestJS microservices (Sahayak)",
        "Payment gateway & FinTech integrations (I2IFunding)",
        "Android K8 kids theme",
        "Micro-learning React frontend + NestJS APIs"
      ],
      skills: ["NestJS", "Microservices", "React.js", "Android", "Payment Integration"]
    },
    {
      year: "2023",
      category: "Backend Engineering & Full-Stack",
      title: "Emplitrack (Startup)",
      description: [
        "Node.js backend architecture",
        "Auth, workflows, RBAC",
        "AWS infra + Terraform",
        "CI/CD pipelines",
        "React.js frontend",
        "Android app (Java)",
        "iOS app (Swift)"
      ],
      skills: ["Node.js", "React.js", "AWS", "Terraform", "CI/CD", "Android", "iOS"],
      link: "https://www.emplitrack.com"
    },
    {
      year: "2023",
      category: "Backend Engineering & AI",
      title: "Emplicheck",
      description: [
        "Resume processing & shortlisting backend",
        "Aadhaar verification, UAN EPFO integrations",
        "Resume builder UI (React)",
        "Backend APIs (Node.js)",
        "Resume parsing & automated shortlisting"
      ],
      skills: ["Node.js", "React.js", "Document Processing", "API Integration"]
    },
    {
      year: "2023",
      category: "Backend Engineering",
      title: "Abnormal Security",
      description: [
        "Email group engine (Go)",
        "Django backend services"
      ],
      skills: ["Go", "Django", "Email Systems"]
    },
    {
      year: "2023",
      category: "Game Development",
      title: "Betting / Bidding Game",
      description: [
        "Unity (C#)",
        "Node.js backend for real-time gameplay"
      ],
      skills: ["Unity", "C#", "Node.js", "Real-time Systems"]
    },
    {
      year: "2024",
      category: "AI / LLM Systems",
      title: "MSherpa",
      description: [
        "AI agent backend (Node.js + LangChain)",
        "React frontend + Node.js backend",
        "Personal finance AI agent"
      ],
      skills: ["Node.js", "LangChain", "OpenAI APIs", "React.js", "AI Agents"]
    },
    {
      year: "2024",
      category: "IoT / Hardware",
      title: "Gujcost Robofest Rover",
      description: [
        "Raspberry Pi development",
        "Android app control via Firebase"
      ],
      skills: ["Raspberry Pi", "Firebase", "Android", "IoT"]
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: { bg: string; border: string } } = {
      "Backend Engineering": { bg: "bg-blue-500", border: "border-blue-500" },
      "Full-Stack Web Development": { bg: "bg-green-500", border: "border-green-500" },
      "AI / LLM Systems": { bg: "bg-purple-500", border: "border-purple-500" },
      "Web3 / Blockchain": { bg: "bg-yellow-500", border: "border-yellow-500" },
      "Game Development": { bg: "bg-pink-500", border: "border-pink-500" },
      "IoT / Hardware": { bg: "bg-orange-500", border: "border-orange-500" },
      "Education": { bg: "bg-gray-500", border: "border-gray-500" }
    };
    return colors[category] || { bg: "bg-indigo-500", border: "border-indigo-500" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional Timeline
          </h1>
          <p className="text-lg text-gray-600">
            Journey through projects, technologies, and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform md:-translate-x-1/2"></div>

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => {
              const isLeft = !isMobile && index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    isLeft ? "md:flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${getCategoryColor(event.category).bg} border-4 border-white shadow-lg`}></div>
                  </div>

                  {/* Event Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                    } ml-12 md:ml-0`}
                  >
                    <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 ${getCategoryColor(event.category).border}`}>
                      {/* Year Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(event.category).bg}`}>
                          {event.category}
                        </span>
                        <span className="text-2xl font-bold text-gray-800">{event.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {event.link ? (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
                          >
                            {event.title}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          event.title
                        )}
                      </h3>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {event.description.map((desc, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      {event.skills && event.skills.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {event.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary Section */}
        <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Core Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">Backend Engineering</h3>
              <p className="text-sm text-gray-600">Node.js, NestJS, Go, Django, REST APIs, Microservices, Authentication, Payments</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Full-Stack Development</h3>
              <p className="text-sm text-gray-600">React.js, Node.js, API-driven architecture, Auth flows, Role-based dashboards</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-2">AI / LLM Systems</h3>
              <p className="text-sm text-gray-600">OpenAI APIs, LangChain, AI agents, Document processing, AI workflows</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">Mobile Development</h3>
              <p className="text-sm text-gray-600">Android (Java), iOS (Swift), Firebase, REST API integration</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-bold text-pink-800 mb-2">DevOps / Cloud</h3>
              <p className="text-sm text-gray-600">AWS, Terraform, Docker, Kubernetes, CI/CD automation</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-orange-800 mb-2">Web3 / Blockchain</h3>
              <p className="text-sm text-gray-600">Ethereum, ethers.js, Wallet integrations, Smart contracts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
