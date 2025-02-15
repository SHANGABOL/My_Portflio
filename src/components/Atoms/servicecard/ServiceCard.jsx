import React from "react";

const ServiceCard = ({ icon: Icon, title, content }) => {
  return (
    <div
      data-aos="fade-up"
      className="w-full sm:w-11/12 md:w-5/12 lg:w-[32%] border-2 rounded-lg border-gray-200 border-opacity-50 text-gray-500 group"
    >
      <div className="flex p-2 flex-row">
        {/* Icon Section */}
        <div className="w-14 h-14 sm:mr-5 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#149ddd] group-hover:bg-white text-indigo-500 border-[1px] border-[#149ddd] flex-shrink-0 transition-all duration-1000 delay-75 ease-in-out">
          {Icon && <Icon className="text-6xl group-hover:text-[#149ddd] text-white font-light w-10 h-10" />}
        </div>
        
        {/* Content Section */}
        <div className="pl-3 md:pl-0 flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-1">
            <span className="text-gray-700 hover:text-[#149ddd]">
              <strong>{title}</strong>
            </span>
          </h2>
          <p className="leading-relaxed text-base">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
