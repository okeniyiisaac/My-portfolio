import React, { useState } from "react";
import { Home, User, FileText, Mail, Code, Award, Star, Briefcase } from "lucide-react";
import { Link } from "react-scroll";

const Link2 = ({ to, smooth, duration, children, onClick }) => (
  <a 
    href={`#${to}`} 
    onClick={(e) => {
      e.preventDefault();
      onClick && onClick();
 
      console.log(`Navigating to ${to}`);
    }}
    className="cursor-pointer"
  >
    {children}
  </a>
);



const ModernNavbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full px-4 pb-6 sm:pb-4 z-[1000]">
      <div className="relative max-w-sm mx-auto">
        <div className="bg-slate-800/60 backdrop-blur-xl rounded-full px-4 py-3 sm:px-3 sm:py-2 border border-slate-700/50 shadow-2xl overflow-hidden">
          <div className="flex justify-between items-center space-x-2 sm:space-x-4">
          
            <div className="relative group">
              <Link
                to="home"
                smooth={true} 
                duration={500}
                onClick={() => setActiveItem("home")}
              >
                <span 
                  className={`transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125 inline-block p-2 rounded-full ${
                    activeItem === "home" 
                      ? 'text-cyan-400 bg-cyan-400/20' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Home size={22} strokeWidth={2} />
                </span>
              </Link>
              
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-slate-600 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                Home
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-600 rotate-45"></div>
              </div>
            </div>

       
            <div className="relative group">
              <Link 
                to="about"
                smooth={true} 
                duration={500}
                onClick={() => setActiveItem("about")}
              >
                <span 
                  className={`transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125 inline-block p-2 rounded-full ${
                    activeItem === "about" 
                      ? 'text-cyan-400 bg-cyan-400/20' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <User size={22} strokeWidth={2} />
                </span>
              </Link>
              
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-slate-600 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                About
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-600 rotate-45"></div>
              </div>
            </div>

            
            <div className="relative group">
              <Link 
                to="skills"
                smooth={true} 
                duration={500}
                onClick={() => setActiveItem("skills")}
              >
                <span 
                  className={`transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125 inline-block p-2 rounded-full ${
                    activeItem === "skills" 
                      ? 'text-cyan-400 bg-cyan-400/20' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Code size={22} strokeWidth={2} />
                </span>
              </Link>
              
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-slate-600 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                Skills
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-600 rotate-45"></div>
              </div>
            </div>

          
            <div className="relative group">
              <Link 
                to="projects"
                smooth={true} 
                duration={500}
                onClick={() => setActiveItem("projects")}
              >
                <span 
                  className={`transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125 inline-block p-2 rounded-full ${
                    activeItem === "projects" 
                      ? 'text-cyan-400 bg-cyan-400/20' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Briefcase size={22} strokeWidth={2} />
                </span>
              </Link>
              
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-slate-600 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                Projects
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-600 rotate-45"></div>
              </div>
            </div>

         
            <div className="relative group">
              <Link 
                to="contact"
                smooth={true} 
                duration={500}
                onClick={() => setActiveItem("contact")}
              >
                <span 
                  className={`transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-125 inline-block p-2 rounded-full ${
                    activeItem === "contact" 
                      ? 'text-cyan-400 bg-cyan-400/20' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Mail size={22} strokeWidth={2} />
                </span>
              </Link>
              
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-slate-600 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                Contact
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-600 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="bg-cyan-400/20 rounded-full blur-xl scale-105 opacity-30"></div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavbar;