import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "../Atoms/servicecard/ServiceCard";
import serviceDetails from "../Atoms/servicecard/details";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="services" className="h-auto w-full flex flex-col justify-start gap-12 py-16 px-6 sm:px-14 bg-gray-100">
      {/* Section Heading */}
      <motion.div className="text-center" data-aos="fade-up">
        <h2 className="relative font-bold text-5xl text-[#173b6c] after:w-16 after:h-1 after:bg-[#149ddd] after:block after:mx-auto after:mt-3">
          Services
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
          As a Full-Stack Software Engineer, I offer cutting-edge solutions in web development, API integration, cloud computing, UI/UX, and DevOps.  
          Whether you need scalable applications, optimized performance, or cloud deployments, I turn ideas into reality.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceDetails.map((item, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center transform transition duration-500 hover:shadow-2xl"
          >
            {/* Service Icon - Ensure it's used correctly */}
            <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>
              <item.icon className="text-[#149ddd] w-14 h-14 mb-4" />
            </motion.div>

            {/* Service Title */}
            <h3 className="text-2xl font-bold text-[#173b6c]">{item.title}</h3>

            {/* Service Description */}
            <p className="text-gray-700 mt-3">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
