import React from "react";
import { motion } from "framer-motion";
import { FiLink2 } from "react-icons/fi";

const PortfolioProject = ({ url, link, name }) => {
  return (
    <motion.div
      data-aos="zoom-in"
      data-aos-duration="1000"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative border w-full sm:w-11/12 md:w-5/12 lg:w-[32%] rounded-lg shadow-lg overflow-hidden"
    >
      {/* Image Section */}
      <div className="portfolio-wrap relative h-full rounded-lg overflow-hidden">
        <img src={url} className="w-full h-64 object-cover rounded-lg" alt={name} />

        {/* Overlay with Project Name & Link */}
        <motion.div
          className="portfolio-overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75 opacity-0 transition-all duration-500"
          whileHover={{ opacity: 1 }}
        >
          <h3 className="text-white text-lg font-bold">{name}</h3>
          <a href={link} title="More Details" target="_blank" rel="noopener noreferrer">
            <FiLink2 className="text-white text-4xl hover:text-[#149ddd] transition duration-300 mt-2" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioProject;
