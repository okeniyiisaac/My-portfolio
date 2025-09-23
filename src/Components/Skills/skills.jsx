import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";
const skills = [
  { 
    name: "HTML", 
    icon: <FaHtml5 className="text-orange-500 text-5xl" /> 
  },
  { 
    name: "CSS", 
    icon: <FaCss3Alt className="text-blue-500 text-5xl" /> 
  },
  { 
    name: "JavaScript", 
    icon: <FaJs className="text-yellow-400 text-5xl" /> 
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> 
  },
  { 
    name: "SASS", 
    icon: <FaSass className="text-pink-500 text-5xl" /> 
  },
  { 
    name: "Git", 
    icon: <FaGitAlt className="text-red-500 text-5xl" /> 
  },
  { 
    name: "Photoshop", 
    icon: <SiAdobephotoshop className="text-blue-400 text-5xl" /> 
  },
];

const SkillsGrid = () => {
  return (
  <section 
  id="skills"
  className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 py-16">
      <header className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          A curated set of tools and technologies I use to craft modern, responsive, and scalable web experiences.
        </p>
      </header>

      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-slate-800/40 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-6">{skill.icon}</div>
              <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 mb-8">
            {skills.slice(0, 4).map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-slate-800/40 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-6">{skill.icon}</div>
                <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 max-w-3xl">
              {skills.slice(4, 7).map((skill, index) => (
                <div
                  key={index + 4}
                  className="flex flex-col items-center justify-center bg-slate-800/40 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition-transform duration-300 hover:scale-105"
                >
                  <div className="mb-6">{skill.icon}</div>
                  <p className="text-white text-base sm:text-lg font-semibold tracking-wide">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;