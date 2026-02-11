import { RouterProvider } from "react-router-dom";
import { routes } from "./components/routes.tsx";
// @ts-ignore - Widget file doesn't have type definitions
import { OrionChatBubble } from "./widgets/orion-chat-widget.es.js";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <OrionChatBubble />
   </>
  );
}

export default App;
