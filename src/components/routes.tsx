import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home.tsx";
import {Timeline} from "../pages/timeline.tsx";
import {Projects} from "../pages/projects.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/timeline",
    element: <Timeline/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
]);