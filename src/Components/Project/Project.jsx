import React, { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import voyagerpic from "../../assets/voyagepic.jpg";
import glide from "../../assets/glide.jpg";
import pp from "../../assets/portfolio.jpg";

const ProjectPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Voyage Travel Website",
      description:
        "A modern travel and booking platform with a clean UI for exploring destinations, booking tours, and managing trips seamlessly. Built with React and Tailwind for responsiveness.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: voyagerpic,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS for a modern look.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: pp,
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Glide Bite Restaurant",
      description:
        "A sleek and responsive restaurant website for Glide Bite, featuring an interactive menu, online reservations, and smooth navigation. Designed to highlight the brand’s modern identity while ensuring great usability.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: glide,
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div>
      <section
      id="projects"
      className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>
        <div
          className="max-w-4xl mx-auto relative z-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl lg:text-xxl max-w-3xl mx-auto leading-relaxed">
            A collection of innovative solutions and creative implementations
            showcasing my passion for cutting-edge technology and user-centered
            design.
          </p>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative bg-gray-950 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition duration-500 transform hover:-translate-y-1"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="h-56 w-full overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-cyan-800/20 text-cyan-300 rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      className="text-cyan-400 hover:text-white transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white rounded-full p-2 flex items-center justify-center shadow hover:bg-cyan-400 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0f172a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-.09-3.77S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
