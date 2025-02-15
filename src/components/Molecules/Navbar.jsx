import React, { useState } from "react";
import { Avatar } from "../Atoms";
import { Link } from "react-scroll"; // Smooth scrolling for menu items
import { motion } from "framer-motion"; // ✅ Framer Motion for smooth animations
import {
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  BiBookContent,
  BiEnvelope,
  BiFileBlank,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoSkype,
  BiUser,
} from "react-icons/bi";
import { FaServer } from "react-icons/fa";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const menuItems = [
    { icon: AiOutlineHome, label: "Home", link: "home" },
    { icon: BiUser, label: "About", link: "about" },
    { icon: BiFileBlank, label: "Resume", link: "resume" },
    { icon: FaServer, label: "Services", link: "services" },
    { icon: BiEnvelope, label: "Contact", link: "contact" },
  ];

  return (
    <motion.div
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-72 h-screen bg-[#040b14] bg-opacity-90 backdrop-blur-md text-white flex flex-col items-center py-6 shadow-lg"
    >
      {/* Profile Section */}
      <Avatar />
      <h1 className="text-2xl font-bold mt-3 text-[#149ddd]">Shan Gabol</h1>
      <span className="font-semibold mt-1 text-gray-300">+92 300 7137798</span>

      {/* Social Media Links */}
      <div className="flex gap-2 mt-5">
        {[
          { icon: BiLogoLinkedin, link: "https://linkedin.com/in/shan-gabol-027055227/", color: "#0077B5" },
          { icon: AiOutlineTwitter, link: "#", color: "#1DA1F2" },
          { icon: BiLogoFacebook, link: "#", color: "#1877F2" },
          { icon: AiOutlineInstagram, link: "#", color: "#E4405F" },
          { icon: BiLogoSkype, link: "#", color: "#00AFF0" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 p-2 flex items-center justify-center rounded-full bg-gray-800 hover:bg-opacity-90 transition-all duration-500"
            style={{ backgroundColor: social.color }}
          >
            <social.icon className="w-6 h-6 text-white" />
          </a>
        ))}
      </div>

      {/* Navigation Menu */}
      <nav className="w-full mt-8">
        <ul className="w-full flex flex-col items-center gap-3">
          {menuItems.map((item, index) => (
            <li key={index} className="w-10/12">
              <Link
                to={item.link}
                smooth
                duration={500}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 relative group ${
                  activeItem === index
                    ? "bg-[#149ddd] text-white"
                    : "text-gray-400 hover:text-[#149ddd]"
                }`}
                onClick={() => setActiveItem(index)}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-lg">{item.label}</span>
                {activeItem === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 w-1 h-full bg-[#149ddd] rounded-r-lg"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Copyright */}
      <div className="absolute bottom-6 text-gray-400 text-sm">
        <span>&copy; 2024 Shan Gabol. All Rights Reserved.</span>
      </div>
    </motion.div>
  );
};

export default Navbar;
