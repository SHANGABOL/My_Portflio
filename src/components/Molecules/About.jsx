import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import image from "../../assets/SHAN PIC.jpeg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS for animations
  }, []);

  return (
    <div id="about" className="h-auto w-full flex flex-col justify-start gap-12 pt-20 px-6 sm:px-14">
      {/* Section Heading */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="relative font-bold text-5xl text-[#173b6c] after:w-16 after:h-1 after:bg-[#149ddd] after:block after:mx-auto after:mt-3">
          About Me
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
          A passionate <strong>Software Engineer & Cloud Specialist</strong> dedicated to building <strong>scalable, high-performance applications</strong> with modern technologies.
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Profile Image */}
        <motion.div
          className="w-full lg:w-5/12 flex justify-center"
          data-aos="fade-right"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image}
            alt="Shan Gabol"
            className="w-64 h-64 object-cover rounded-full border-4 border-[#149ddd] shadow-lg hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          className="w-full lg:w-7/12"
          data-aos="fade-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold text-[#173b6c] mb-2">
            Full-Stack & Cloud Engineer
          </h1>
          <p className="italic text-lg text-gray-700 mb-4">
            Crafting <strong>scalable, high-performance software solutions</strong> through modern technologies & innovative architectures.
          </p>

          <p className="text-base leading-8 text-gray-800">
            I specialize in developing <strong>full-stack applications</strong> with a strong focus on <strong>cloud computing, system design, and performance optimization</strong>. My skillset includes:
          </p>

          {/* Skills List */}
          <ul className="mt-4 space-y-3 text-base text-gray-900">
            <li>🚀 <strong>Front-End:</strong> React.js, Next.js, Angular, TypeScript, Tailwind CSS, Bootstrap, Material UI</li>
            <li>🛠️ <strong>Back-End:</strong> Node.js, Express.js, MongoDB, PostgreSQL</li>
            <li>☁️ <strong>Cloud & DevOps:</strong> AWS, Docker, CI/CD Pipelines</li>
            <li>📜 <strong>Programming Languages:</strong> JavaScript, TypeScript, Python</li>
            <li>⚡ <strong>System Design & Optimization:</strong> Scalable architecture & performance tuning</li>
          </ul>

          <p className="mt-6 text-base leading-7 text-gray-800">
            I thrive on <strong>solving complex problems</strong> and <strong>optimizing applications for scalability and efficiency</strong>.  
            Let’s collaborate and build something <strong>extraordinary together!</strong> 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
