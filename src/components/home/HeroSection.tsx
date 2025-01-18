import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure the script has loaded before initializing
    if (window.particlesJS) {
      window.particlesJS.load('particles-js', '/particles.json');
    }
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white bg-blue-600 z-0">
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Harsh Kanjariya</h1>
        <p className="text-lg md:text-2xl mt-4">Adding small blocks in big puzzle</p>
        <p className="text-sm mt-2 italic">since 13.8 billion years</p>
        <div className="flex space-x-4 mt-6">
          <button onClick={() => navigate("/projects")} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md">
            View Projects
          </button>
          <button onClick={() => navigate("/contact-me")} className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-md">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}