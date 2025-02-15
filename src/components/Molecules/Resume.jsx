import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDownload = () => {
    const cvUrl = "/ShanF_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Shan_Gabol_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume" className="h-auto w-full flex flex-col justify-start gap-10 py-16 px-6 sm:px-14 bg-gray-100">
      {/* Resume Heading */}
      <motion.div className="text-center" data-aos="fade-up">
        <h2 className="relative font-bold text-5xl text-[#173b6c] after:w-16 after:h-1 after:bg-[#149ddd] after:block after:mx-auto after:mt-3">
          Resume
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
          As a Full-Stack Software Engineer, I specialize in scalable web applications, cloud computing, and DevOps.  
          With expertise in Angular, React, Redux, Node.js, Python, MongoDB, AWS, and Docker, I have contributed to innovative projects across industries.
        </p>

        {/* Download CV Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="mt-6 px-6 py-3 bg-[#173b6c] text-white font-semibold rounded-lg shadow-md hover:bg-[#0f2a4d] transition duration-300"
        >
          Download CV
        </motion.button>
      </motion.div>

      {/* Resume Content */}
      <section className="text-gray-700 body-font mt-8 flex flex-col md:flex-row leading-7">
        {/* Left Section - Summary & Education */}
        <motion.div className="w-full md:w-6/12 px-4 flex flex-col gap-8" data-aos="fade-right">
          {/* Summary */}
          <div>
            <h3 className="font-bold text-3xl text-[#173b6c] mb-4">Summary</h3>
            <div className="border-l-4 border-[#1f5297] pl-5">
              <h4 className="font-bold text-xl text-gray-800 pb-2">Shan Gabol</h4>
              <p className="text-gray-700">
                <em>
                  A Full-Stack Developer with 5+ years of experience in Angular, React, Redux, Node.js, Python, and MongoDB.  
                  Passionate about building scalable applications that drive efficiency and innovation.
                </em>
              </p>
              <ul className="mt-3 text-gray-600">
                <li>📍 Islamabad, Pakistan</li>
                <li>📞 +92 300 7137798</li>
                <li>📧 mshangabol@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-bold text-3xl text-[#173b6c] mb-4">Education</h3>
            <div className="border-l-4 border-[#1f5297] pl-5">
              <h4 className="font-bold text-xl text-gray-800">Bachelor of Information Technology</h4>
              <h5 className="text-sm py-1 px-3 font-bold mb-2 bg-indigo-100 inline-block">
                2017 - 2021
              </h5>
              <p className="text-gray-700">
                <em>Arid Agriculture University, Rawalpindi, Pakistan</em>
              </p>
              <p className="py-2 leading-7">
                Graduated with a Bachelor's in IT, focusing on software development, cloud computing, and full-stack technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Experience */}
        <motion.div className="w-full md:w-6/12 px-4 flex flex-col gap-8" data-aos="fade-left">
          {/* Experience - Algo3 */}
          <div>
            <h3 className="font-bold text-3xl text-[#173b6c] mb-4">Professional Experience</h3>
            <div className="border-l-4 border-[#1f5297] pl-5">
              <h4 className="font-bold text-xl text-gray-800 pb-2">Full-Stack Software Developer</h4>
              <h5 className="text-sm py-1 px-3 font-bold mb-2 bg-indigo-100 inline-block">
                Jan 2023 - Present
              </h5>
              <p className="text-gray-700">
                <em>Algo3, Islamabad, Pakistan</em>
              </p>
              <ul className="mt-3 text-gray-600">
                <li>💡 Built scalable web applications using Angular, React, Node.js, MongoDB.</li>
                <li>🚀 Optimized applications for performance, security, and cloud deployment.</li>
                <li>☁️ Integrated AWS services, Dockerized applications, and automated CI/CD pipelines.</li>
                <li>🔄 Worked in agile teams, ensuring clean, maintainable, and scalable code.</li>
              </ul>
            </div>
          </div>

          {/* Experience - Tecklogics */}
          <div>
            <div className="border-l-4 border-[#1f5297] pl-5">
              <h4 className="font-bold text-xl text-gray-800">Full-Stack Developer</h4>
              <h5 className="text-sm py-1 px-3 font-bold mb-2 bg-indigo-100 inline-block">
                Jan 2020 - Dec 2022
              </h5>
              <p className="text-gray-700">
                <em>Tecklogics (USA Client-Based), Islamabad, Pakistan</em>
              </p>
              <ul className="mt-3 text-gray-600">
                <li>⚡ Developed dynamic, responsive applications using Angular, React, Redux.</li>
                <li>🔗 Built RESTful APIs and backend services with Node.js and Express.js.</li>
                <li>💾 Managed MongoDB and SQL databases for efficient data handling.</li>
                <li>🔄 Implemented state management with RxJS, NgRx, and Redux.</li>
                <li>☁️ Deployed applications on AWS and handled DevOps processes.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Resume;
