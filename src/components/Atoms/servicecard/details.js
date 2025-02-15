import { MdOutlineDeveloperMode, MdOutlineSupportAgent } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { BiCustomize, BiSignal5 } from "react-icons/bi";
import { FaCloud, FaDatabase } from "react-icons/fa";

const serviceDetails = [
  {
    title: "Full-Stack Web Development",
    content: "Building scalable and high-performance applications using React, Angular, Node.js, and MongoDB.",
    icon: MdOutlineDeveloperMode, // ✅ Correctly imported component
  },
  {
    title: "API Development & Integration",
    content: "Developing secure RESTful APIs and integrating third-party services to enhance functionality.",
    icon: FaDatabase, // ✅ Ensure icons are properly assigned
  },
  {
    title: "Cloud & DevOps Solutions",
    content: "Deploying and managing applications using AWS, Docker, and CI/CD pipelines.",
    icon: FaCloud,
  },
  {
    title: "UI/UX Optimization",
    content: "Creating interactive and visually appealing user interfaces with Tailwind CSS, Bootstrap, and Material UI.",
    icon: DiResponsive,
  },
  {
    title: "Performance Optimization",
    content: "Enhancing application speed, responsiveness, and security through best coding practices.",
    icon: BiSignal5,
  },
  {
    title: "Custom Software Solutions",
    content: "Building tailored software solutions to meet unique business needs.",
    icon: BiCustomize,
  },
];

export default serviceDetails; // ✅ Ensure it's a default export
