import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 relative">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
