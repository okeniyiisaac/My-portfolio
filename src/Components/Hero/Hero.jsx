import React, { useEffect, useRef, useState } from "react";
import profile_img from "../../assets/Animatedpic.jpeg";
import heroBg from "../../assets/portimage.jpg"; // 👈 your local background image
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const typingStyles = `
  .typing-animation {
    overflow: hidden;
    border-right: 3px solid #06b6d4;
    white-space: normal;
    animation: typing 3.5s steps(60, end), blink-caret 0.75s step-end infinite;
  }

  @media (min-width: 640px) {
    .typing-animation {
      white-space: nowrap;
    }
  }

  @keyframes typing {
    from { max-height: 0; opacity: 0; }
    to { max-height: 200px; opacity: 1; }
  }

  @media (min-width: 640px) {
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #06b6d4; }
  }

  .typed {
    border-right: none;
    animation: none;
  }
`;

const Hero = () => {
  const h1Ref = useRef(null);
  const [activeItem, setActiveItem] = useState("contact");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => {
      if (h1Ref.current) h1Ref.current.classList.add("typed");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-full">
      <style>{typingStyles}</style>

      {/* ✅ Background image */}
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ Overlay (dark tint for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✅ Content */}
      <div className="relative flex flex-col justify-center items-center min-h-screen py-12 text-center px-4 gap-3 overflow-hidden">
        <img
          className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full object-cover"
          src={profile_img}
          alt="Profile"
          data-aos="fade-up"
        />

        <h1
          ref={h1Ref}
          className="typing-animation text-[clamp(20px,3.5vw,34px)] font-semibold leading-tight w-4/5 max-w-4xl mt-2 text-white"
          data-aos="fade-right"
        >
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-[#f6d365] to-[#fda085] bg-clip-text text-transparent">
            Isaac Okeniyi
          </span>
          , Frontend Developer.
        </h1>

        <p
          className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-200 mt-1 px-2"
          data-aos="fade-left"
        >
          I'm a creative web developer passionate about building modern,
          user-friendly digital experiences that blend clean design with
          powerful functionality.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6"
          data-aos="zoom-in"
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setActiveItem("contact")}
            className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base bg-cyan-500 text-black transition-transform duration-200 hover:scale-105 w-full sm:w-auto text-center cursor-pointer"
          >
            Contact Me
          </Link>

          <button className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base bg-cyan-500 text-black transition-transform duration-200 hover:scale-105 w-full sm:w-auto">
            My Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
