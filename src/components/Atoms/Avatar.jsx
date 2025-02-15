import React from "react";
import image from "../../assets/SHAN PIC.jpeg";

const Avatar = () => {
  return (
    <div className="rounded-full border-[9px] border-gray-800 h-fit my-5 block">
      <img src={image} className="w-28 h-28 rounded-full" />
    </div>
  );
};

export default Avatar;
