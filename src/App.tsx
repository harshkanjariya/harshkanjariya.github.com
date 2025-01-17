import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {RouterProvider} from "react-router-dom";
import {routes} from "./components/routes.tsx";

function App() {
  return <div className="bg-red flex flex-col min-h-full">
    <Header/>
    <div className="flex-1">
      <RouterProvider router={routes}/>
    </div>
    <Footer/>
  </div>;
}

export default App
