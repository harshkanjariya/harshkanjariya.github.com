import { RouterProvider } from "react-router-dom";
import { routes } from "./components/routes.tsx";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
