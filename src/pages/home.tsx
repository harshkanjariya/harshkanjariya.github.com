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
        <div className="flex-1 text-start">
          <h2 className="text-4xl mb-5">About Me</h2>
          <p className="text-xl mb-5">Hi, I’m Harsh Kanjariya, a developer passionate about crafting efficient and scalable solutions. With expertise in React, Node.js, and Python, I enjoy solving complex problems and turning ideas into functional applications.</p>
          <p className="text-xl">My journey has been fueled by curiosity and a drive to continuously learn and improve. I thrive on exploring new technologies, building innovative tools, and contributing to meaningful projects.</p>
        </div>
      </div>
    </Fragment>
  );
}
