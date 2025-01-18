import { useState, useEffect } from 'react';

export function Timeline() {
  const events = [
    { year: "2021", description: "Completed B.Tech at Indus University" },
    { year: "2020", description: "Started 2LC Technologies with 5 other founders" },
    { year: "2022", description: "Joined Boosters Edutech" },
    { year: "2022", description: "Joined Physics Wallah" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind's sm breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-16">
      {/* Timeline Container */}
      <div className="relative w-full max-w-[1000px] flex flex-col items-center">
        {/* Steel Pole */}
        <div className="absolute top-0 left-0 md:left-1/2 transform translate-x-full z-[5] md:-translate-x-1/2 h-full w-5 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-full shadow-md"></div>

        {/* Events */}
        <div className="w-full flex flex-col">
          {events.map((event, index) => {
            const isLeft = !isMobile && index % 2 === 0; // For desktop, alternate sides, but for mobile, always right
            return (
              <div
                key={index}
                className={`flex items-center mt-20 mb-10 w-full ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Event Content */}
                <div
                  className={`flex items-center w-full md:w-1/2 gap-4 ${
                    isLeft ? "ml-6 flex-row-reverse" : "mr-6"
                  }`}
                >
                  <div
                    className={`h-1 bg-gray-500 transform ${
                      isLeft ? "mr-4 translate-x-[-18px]" : "ml-4 translate-x-[18px]"
                    }`}
                    style={{ width: "calc(50% - 1rem)" }}
                  ></div>

                  <div className="bg-white p-4 shadow-lg rounded-lg max-w-xs">
                    <h3 className="text-lg font-bold">{event.year}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
