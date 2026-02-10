import { useState, useEffect, useRef } from 'react';

interface TimelineEvent {
  year: string;
  category: string;
  title: string;
  description: string[];
  skills?: string[];
  link?: string;
  icon?: string;
}

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

export function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        
        // Get the absolute position of the timeline element
        const elementTop = scrollTop + rect.top;
        const elementHeight = rect.height;
        
        // Calculate progress: 0 when timeline top enters viewport, 1 when bottom exits
        let progress = 0;
        
        // Check if timeline is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate how much of the timeline has been scrolled
          // Start counting when top of timeline enters viewport
          const startPoint = elementTop;
          
          // Current scroll position relative to timeline
          const currentScroll = scrollTop + windowHeight;
          
          // Progress from 0 to 1 as we scroll from start to end
          if (currentScroll >= startPoint) {
            const scrolled = currentScroll - startPoint;
            const totalDistance = elementHeight;
            progress = Math.min(1, Math.max(0, scrolled / totalDistance));
          }
        } else if (rect.bottom <= 0) {
          // Timeline is completely above viewport
          progress = 1;
        }
        
        setScrollProgress(progress);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const handleScrollThrottled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });
    window.addEventListener('resize', handleScrollThrottled, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      window.removeEventListener('resize', handleScrollThrottled);
    };
  }, []);

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
          <p className="text-sm text-gray-500 mt-2">
            Scroll to explore the timeline
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line Container */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 z-0">
            {/* Base Line (Full Height) */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-full"></div>
            
            {/* Animated Progress Line */}
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
                transition: 'height 0.1s ease-out'
              }}
            >
              {/* Progress Indicator Dot */}
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg"
                style={{
                  transform: 'translate(-50%, 50%)',
                  boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)'
                }}
              ></div>
            </div>
          </div>

          {/* Events */}
          <div className="space-y-20 md:space-y-24">
            {events.map((event, index) => {
              const isLeft = !isMobile && index % 2 === 0;
              const color = getCategoryColor(event.category);
              const isVisible = scrollProgress >= index / events.length;

              return (
                <div
                  key={index}
                  className="relative flex items-center min-h-[200px]"
                >
                  {/* Timeline Dot - Always centered */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${color.bg} border-4 border-white shadow-lg transition-all duration-300 ${
                        isVisible ? 'scale-125' : 'scale-100'
                      }`}
                      style={{
                        boxShadow: isVisible ? `0 0 20px rgba(99, 102, 241, 0.6)` : 'none'
                      }}
                    ></div>
                  </div>

                  {/* Left Side Card (Even indices on desktop) */}
                  {isLeft ? (
                    <div className="w-full md:w-5/12 md:pr-12 ml-12 md:ml-0 transition-all duration-500">
                      <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-l-4 ${color.border} transform hover:scale-105 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-50 -translate-x-4'
                      }`}>
                        {/* Year Badge */}
                        <div className="flex items-center justify-between mb-4 md:flex-row-reverse">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${color.bg}`}>
                            {event.category}
                          </span>
                          <span className="text-2xl md:text-3xl font-bold text-gray-800">{event.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-right">
                          {event.link ? (
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 transition-colors duration-200 inline-flex items-center gap-2 flex-row-reverse"
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
                        <ul className="space-y-2 mb-4 text-right">
                          {event.description.map((desc, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start justify-end">
                              <span className="ml-2">{desc}</span>
                              <span className={`${color.bg} ml-2 mt-1.5 w-2 h-2 rounded-full flex-shrink-0`}></span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        {event.skills && event.skills.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm font-semibold text-gray-700 mb-2 text-right">Technologies:</p>
                            <div className="flex flex-wrap gap-2 justify-end">
                              {event.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Right Side Card (Odd indices on desktop) */
                    <div className="w-full md:w-5/12 md:ml-auto md:pl-12 ml-12 md:ml-auto transition-all duration-500">
                      <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-l-4 ${color.border} transform hover:scale-105 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-4'
                      }`}>
                        {/* Year Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${color.bg}`}>
                            {event.category}
                          </span>
                          <span className="text-2xl md:text-3xl font-bold text-gray-800">{event.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                          {event.link ? (
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 transition-colors duration-200 inline-flex items-center gap-2"
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
                              <span className={`${color.bg} mr-2 mt-1.5 w-2 h-2 rounded-full flex-shrink-0`}></span>
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
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
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
