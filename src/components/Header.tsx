import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md p-4 flex justify-between items-center">
      <h2
        className="text-2xl font-bold cursor-pointer"
        onClick={() => window.location.href = ("/")}
      >
        Portfolio
      </h2>

      <nav className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
          }
        >
          Timeline
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact-me"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-blue-500 font-semibold" : "text-gray-700"}`
          }
        >
          Contact Me
        </NavLink>
      </nav>
    </header>
  );
}
