import { HeroSection } from "../components/home/HeroSection.tsx";
import { Fragment } from "react";

export function Home() {
  return (
    <Fragment>
      <HeroSection />
      <div className="flex flex-col md:flex-row items-center p-10 md:p-20 max-w-[1200px] mx-auto">
        <div className="flex-1 text-center mb-6 md:mb-0">
          <img
            src="/profile-cropped.jpeg"
            alt=""
            className="w-80 rounded-xl object-cover mx-auto"
          />
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-4xl">This is my journey</h2>
        </div>
      </div>
    </Fragment>
  );
}
