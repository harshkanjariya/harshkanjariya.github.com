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
          <p className="text-xl mb-5">Hi, I&apos;m Harsh Kanjariya &mdash; an AI &amp; Backend Systems Architect focused on designing intelligent, scalable systems that solve real problems. I specialize in building AI-powered pipelines, distributed backends, and data-driven architectures that go beyond surface-level implementations.</p>
          <p className="text-xl">My work sits at the intersection of applied AI and systems design &mdash; from architecting LLM-integrated workflows and content engines to building robust APIs and infrastructure that scales. I care deeply about how systems think, not just how they run.</p>
        </div>
      </div>
    </Fragment>
  );
}
