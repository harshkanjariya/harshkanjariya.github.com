import {HeroSection} from "../components/home/HeroSection.tsx";
import {Fragment} from "react";

export function Home() {
  return <Fragment>
    <HeroSection />
    <div className="flex flex-row items-center p-20 max-w-[1200px] mx-auto">
      <div className="flex-1 text-center">
        <img src="/profile-cropped.jpeg" alt="" className="w-80 rounded-xl object-cover"/>
      </div>
      <div className="flex-1 text-center">
        <h2 className="text-4xl">This is my journey</h2>
      </div>
    </div>
  </Fragment>;
}