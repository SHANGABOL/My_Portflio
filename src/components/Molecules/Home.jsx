import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";

import bgImage from "../../assets/bg.svg";

const TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Cloud Specialist",
  "React & Angular Expert",
  "MERN Stack Developer",
  "AI Enthusiast",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => (prev + 1) % TITLES.length), 2000);
    return () => clearInterval(intervalId);
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
      {/* Floating Particles Effect using Framer Motion */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Left Section (Text) */}
      <motion.div
        className="flex flex-col mt-24 z-10"
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
          <motion.span
            className="neon-glow"
            animate={{
              textShadow: [
                "0px 0px 5px #fff",
                "0px 0px 10px #fff",
                "0px 0px 15px #149ddd",
                "0px 0px 20px #149ddd",
                "0px 0px 15px #149ddd",
                "0px 0px 10px #fff",
                "0px 0px 5px #fff",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            SHAN GABOL
          </motion.span>
        </motion.p>

        {/* Smooth Title Animation */}
        <p className="text-2xl font-bold mt-3 text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TextTransition springConfig={presets.wobbly}>{TITLES[index]}</TextTransition>
          </motion.span>
        </p>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div
        className="relative ml-8 w-8/12 h-6/6 pt-10 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
      </motion.div>
    </div>
  );
};

export default Home;
