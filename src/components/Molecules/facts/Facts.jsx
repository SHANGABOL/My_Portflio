import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import detail from "./factsDetails";

const Facts = () => {
  useEffect(() => {
    new PureCounter({
      selector: ".purecounter",
      start: 0,
      duration: 2,
      once: true, // Ensures it only runs once
    });
  }, []);

  return (
    <div id="facts" className="h-auto w-full flex flex-col justify-start gap-8 py-16 px-6 sm:px-14">
      {/* Section Heading */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="relative font-bold text-5xl text-[#173b6c] after:w-16 after:h-1 after:bg-[#149ddd] after:block after:mx-auto after:mt-3">
          Facts
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
          As a <strong>Software Engineer</strong>, I specialize in full-stack development, cloud computing, and scalable system architectures.  
          My expertise lies in designing and implementing high-performance, user-friendly applications that align with modern industry standards.
        </p>
      </div>

      {/* Fact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {detail.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-all transform hover:scale-105"
            data-aos="fade-up"
          >
            {/* Icon */}
            <item.icon className="text-5xl text-[#149ddd] mb-3 mx-auto" />

            {/* Counter */}
            <h3 className={`text-5xl font-bold text-[#149ddd] purecounter`} data-purecounter-end={item.end}>
              0
            </h3>
            <p className="text-lg text-gray-700 mt-3">{item.title}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
