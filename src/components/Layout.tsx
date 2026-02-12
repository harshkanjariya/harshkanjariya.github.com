import { Outlet } from "react-router-dom";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { RedirectHandler } from "./RedirectHandler.tsx";

export function Layout() {
  return (
    <div className="bg-red flex flex-col min-h-full">
      <RedirectHandler />
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
