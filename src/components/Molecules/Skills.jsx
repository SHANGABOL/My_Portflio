import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { category: "Front-End", name: "HTML", value: 100 },
  { category: "Front-End", name: "CSS", value: 95 },
  { category: "Front-End", name: "Tailwind CSS", value: 90 },
  { category: "Front-End", name: "Bootstrap", value: 90 },
  { category: "Front-End", name: "JavaScript", value: 90 },
  { category: "Front-End", name: "TypeScript", value: 85 },
  { category: "Front-End", name: "React.js", value: 90 },
  { category: "Front-End", name: "Next.js", value: 85 },
  { category: "Front-End", name: "Redux", value: 85 },
  { category: "Front-End", name: "Angular", value: 85 },
  { category: "Front-End", name: "RxJS", value: 80 },
  { category: "Front-End", name: "NgRx", value: 75 },
  { category: "Front-End", name: "PrimeNG", value: 80 },

  { category: "Back-End", name: "Node.js", value: 85 },
  { category: "Back-End", name: "Express.js", value: 80 },
  { category: "Back-End", name: "MongoDB", value: 85 },
  { category: "Back-End", name: "PostgreSQL", value: 75 },
  { category: "Back-End", name: "Symfony", value: 70 },

  { category: "Cloud & DevOps", name: "AWS & Cloud Services", value: 70 },
  { category: "Cloud & DevOps", name: "Docker", value: 70 },
];

const groupedSkills = {
  "Front-End": skills.filter((s) => s.category === "Front-End"),
  "Back-End": skills.filter((s) => s.category === "Back-End"),
  "Cloud & DevOps": skills.filter((s) => s.category === "Cloud & DevOps"),
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div id="skills" className="h-auto w-full flex flex-col justify-start gap-10 py-16 px-6 sm:px-14 bg-indigo-100">
      {/* Section Heading */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="relative font-bold text-5xl text-[#173b6c] after:w-16 after:h-1 after:bg-[#149ddd] after:block after:mx-auto after:mt-3">
          Skills
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
          I specialize in full-stack development, combining expertise in front-end, back-end, and cloud technologies to build scalable and high-performance applications.
        </p>
      </div>

      {/* Skill Categories */}
      {Object.keys(groupedSkills).map((category) => (
        <div key={category} className="mb-10">
          <h3 className="text-3xl font-semibold text-[#173b6c] mb-5">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {groupedSkills[category].map((skill, index) => (
              <div key={index} className="flex flex-col items-center" data-aos="fade-up">
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={skill.value}
                    text={`${skill.value}%`}
                    styles={buildStyles({
                      textSize: "16px",
                      pathColor: "#149ddd",
                      textColor: "#173b6c",
                      trailColor: "#e2e8f0",
                    })}
                  />
                </div>
                <p className="mt-3 text-lg font-semibold text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
