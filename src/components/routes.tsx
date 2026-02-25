import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout.tsx";
import { Home } from "../pages/home.tsx";
import { Timeline } from "../pages/timeline.tsx";
import { Projects } from "../pages/projects.tsx";
import { ProjectDetail } from "../pages/project-detail.tsx";
import { ContactMe } from "../pages/contact-me.tsx";
import { Skills } from "../pages/skills.tsx";
import {AiWorkPage} from "../pages/ai-work.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all routes with the Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:slug", element: <ProjectDetail /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact-me", element: <ContactMe /> },
      { path: "/ai-work", element: <AiWorkPage /> },
    ],
  },
]);
