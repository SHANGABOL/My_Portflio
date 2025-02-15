import { lazy, Suspense } from "react";

// ✅ Ensure correct file names and paths
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contacts"));
const Home = lazy(() => import("./Home"));
const Projects = lazy(() => import("./Projects"));
const Facts = lazy(() => import("./facts/Facts"));
const Resume = lazy(() => import("./Resume"));
const Services = lazy(() => import("./Services"));
const Skills = lazy(() => import("./Skills"));

const Main = () => {
  return (
    <div className="main w-full lg:flex-[0.8] rounded scroll-smooth font-[sans-serif]">
      {/* ✅ Wrap everything in Suspense for proper lazy loading */}
      <Suspense fallback={<div className="text-center text-xl">Loading...</div>}>
        <Home />
        <div className="section lg:ml-[30px] bg-white">
          <About />
          <Facts />
          <Skills />
          <Resume />
          <Projects />
          <Services />
          <Contact />
        </div>
      </Suspense>
    </div>
  );
};

export default Main;
