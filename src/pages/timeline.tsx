export function Timeline() {
  const events = [
    { year: "2021", description: "Completed B.Tech at Indus University" },
    { year: "2020", description: "Started 2LC Technologies with 5 other founders" },
    { year: "2022", description: "Joined Boosters Edutech" },
    { year: "2022", description: "Joined Physics Wallah" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-16">
      {/* Timeline Container */}
      <div className="relative w-full max-w-[1000px] flex flex-col items-center">
        {/* Steel Pole */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-5 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-full shadow-md"></div>

        {/* Events */}
        <div className="w-full flex flex-col">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex items-center mt-60 mb-40 w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              {/* Event Content */}
              <div
                className={`flex items-center w-1/2 gap-4 ${
                  index % 2 === 0 ? "ml-6 flex-row-reverse" : "mr-6"
                }`}
              >
                <div
                  className={`h-1 bg-gray-500 transform ${
                    index % 2 === 0 ? "mr-4 translate-x-[-18px]" : "ml-4 translate-x-[18px]"
                  }`}
                  style={{ width: "calc(50% - 1rem)" }}
                ></div>

                <div className="bg-white p-4 shadow-lg rounded-lg max-w-xs">
                  <h3 className="text-lg font-bold">{event.year}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
