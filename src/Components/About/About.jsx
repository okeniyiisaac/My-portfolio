import React, { useEffect } from "react";
import profile_img from "../../assets/mypic.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
<section 
id="about"
className="flex flex-col items-center gap-16 px-6 sm:px-10 lg:px-52 py-16 text-center">
      {/* Intro */}
      <div
        className="text-sm sm:text-base uppercase tracking-widest text-cyan-400 font-semibold"
        data-aos="fade-up"
      >
        Get to Know Me 
      </div>

      {/* Section Title */}
      <div className="relative" data-aos="fade-down">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold pb-3">
          About Me
          <span className="absolute left-1/2 -bottom-1 w-24 h-1 bg-cyan-400 transform -translate-x-1/2 rounded-full"></span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full">
        {/* Profile Image */}
        <div data-aos="fade-right">
          <img
            src={profile_img}
            alt="Profile"
            className="w-[200px] sm:w-[220px] md:w-[250px] rounded-2xl object-cover shadow-xl"
          />
        </div>

        {/* Bio + Achievements */}
        <div
          className="flex flex-col gap-8 text-left items-center lg:items-start"
          data-aos="fade-left"
        >
          {/* Bio */}
          <div className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            <p>
              I'm a creative and detail-oriented Web Developer with a passion for crafting responsive, user-friendly websites. I specialize in blending modern design with clean, efficient code to deliver seamless digital experiences.
            </p>
            <p className="mt-4">
              Whether it's building from scratch or optimizing existing platforms, I thrive on turning ideas into elegant, functional interfaces that leave a lasting impression.
            </p>
          </div>

          {/* Achievements beside image */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center lg:justify-start">
            <Achievement
              number="2+"
              label="Years of Experience"
              delay="100"
              description="Building sleek, scalable web interfaces with modern tools and frameworks."
            />
            <Achievement
              number="10+"
              label="Projects Completed"
              delay="200"
              description="From landing pages to full-stack applications, each crafted with care."
            />
            <Achievement
              number="15+"
              label="Happy Clients"
              delay="300"
              description="Delivering results that exceed expectations and spark long-term partnerships."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Achievement Card Component
const Achievement = ({ number, label, delay, description }) => (
  <div
    className="flex flex-col items-center gap-3 border border-cyan-400 rounded-xl px-6 py-4 text-white text-center transition-transform duration-500 hover:scale-105 w-[250px]"
    data-aos="flip-left"
    data-aos-delay={delay}
  >
    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#f6d365] to-[#fda085] bg-clip-text text-transparent">
      {number}
    </h1>
    <p className="text-base sm:text-lg font-semibold">{label}</p>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);

export default About;
