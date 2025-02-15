import React, { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import Aos from "aos";
import "aos/dist/aos.css";

import bgImage from "../../assets/bg.svg";
import image from "../../assets/SHAN PIC.jpeg";

const TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Cloud Specialist",
  "React & Angular Expert",
  "MERN Stack Developer",
  "AI Enthusiast",
];

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init({ duration: 1000 });
    }
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => (prev + 1) % TITLES.length), 2000);
    return () => clearInterval(intervalId);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div
      id="home"
      className="h-screen w-full flex justify-between items-center bg-[#040b14] bg-opacity-95 py-28 px-2 sm:px-20 md:items-center lg:pl-48 relative overflow-hidden"
      style={{
        background: `url(${bgImage}) no-repeat left`,
        backgroundSize: "cover",
      }}
    >
      {/* Apply Particles ONLY Inside Home Page */}
      <div className="absolute inset-0 z-0">
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 80 },
              size: { value: 3 },
              move: { speed: 1, direction: "none", outModes: "out" },
              links: { enable: true, opacity: 0.5, distance: 150, color: "#149ddd" },
              color: { value: "#149ddd" },
            },
            interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          }}
        />
      </div>

      {/* Left Section (Text) */}
      <motion.div
        className="flex flex-col mt-24 z-10"
        data-aos="fade-up"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-2xl font-bold text-purple-700 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Hey There!
        </motion.p>

        {/* Animated Name with Neon Effect */}
        <motion.p
          className="font-bold text-6xl neon-text"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-purple-700">I'm </span>
          <span className="neon-glow">SHAN GABOL</span>
        </motion.p>

        {/* Smooth Title Animation (Fixed <div> inside <p> issue) */}
        <p className="text-2xl font-bold mt-3 text-white">
          <span>
            <TextTransition springConfig={presets.wobbly}>{TITLES[index]}</TextTransition>
          </span>
        </p>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div
        className="relative ml-8 w-8/12 h-6/6 pt-10 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img src={image} alt="Profile" className="rounded-full shadow-lg w-60 h-60 object-cover" />
      </motion.div>
    </div>
  );
};

export default Home;
