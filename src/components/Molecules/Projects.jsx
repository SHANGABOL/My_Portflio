import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projectDetails from "../Atoms/portfolioProject/Detail";

// ✅ Combined all projects into one array
const projects = [
  {
    id: 1,
    title: "Admin Panel - Staff Management",
    link: "https://admin-panel1-mocha.vercel.app/",
  },
  {
    id: 2,
    title: "Functional Project",
    link: "https://simple-projects-mu.vercel.app/",
  },
  {
    id: 3,
    title: "News App",
    link: "https://news-website-ivory.vercel.app/",
  },
  {
    id: 4,
    title: "Attendance Sheet",
    link: "https://attendence-shett.vercel.app/",
  },
  {
    id: 5,
    title: "Read Notes & Books",
    link: "https://read-nots.vercel.app/",
  },
  {
    id: 6,
    title: "Redux - Deposit & Withdraw Money",
    link: "https://redux-app-ten.vercel.app/",
  },
  ...projectDetails, // ✅ Adding other project images (NFT, Crypto, etc.)
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS animations
  }, []);

  return (
    <div id="projects" className="h-auto w-full flex flex-col justify-start gap-10 py-16 px-6 sm:px-14 bg-indigo-100">
      {/* Section Heading */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="relative font-bold text-5xl text-[#173b6c] after:w-16 after:h-1 after:bg-[#149ddd] after:block after:mx-auto after:mt-3">
          Projects
        </h2>
        <p className="mt-4 text-red-600 text-lg font-semibold">
          Note: Backend code of these projects is not running on Vercel.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Check if project has an image */}
            {project.url && (
              <img
                src={project.url}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-[#149ddd] hover:bg-[#1174b9] transition-all duration-300 font-medium rounded-lg text-sm px-5 py-2.5">
                  View Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
