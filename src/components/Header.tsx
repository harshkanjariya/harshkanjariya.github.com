import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-gray-700 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <h2
          className="text-2xl font-bold cursor-pointer"
          onClick={() => window.location.href = "/"}
        >
          Portfolio
        </h2>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({isActive}) =>
            `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/timeline"
          className={({isActive}) =>
            `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
          }
        >
          Timeline
        </NavLink>
        <NavLink
          to="/projects"
          className={({isActive}) =>
            `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact-me"
          className={({isActive}) =>
            `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
          }
        >
          Contact Me
        </NavLink>
      </nav>

      {/* Mobile Drawer (Slides from Left) */}
      <div
        className={`fixed top-0 left-0 bg-white w-2/3 h-full shadow-lg transform transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6 py-12 z-[100]">
          <NavLink
            to="/"
            onClick={closeDrawer} // Close the drawer when a link is clicked
            className={({isActive}) =>
              `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/timeline"
            onClick={closeDrawer} // Close the drawer when a link is clicked
            className={({isActive}) =>
              `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
            }
          >
            Timeline
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeDrawer} // Close the drawer when a link is clicked
            className={({isActive}) =>
              `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact-me"
            onClick={closeDrawer} // Close the drawer when a link is clicked
            className={({isActive}) =>
              `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
            }
          >
            Contact Me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
