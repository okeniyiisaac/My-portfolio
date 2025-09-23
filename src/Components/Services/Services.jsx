import React from "react";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Zap, 
  Search, 
  Settings 
} from "lucide-react";
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, Javascript, and other languages. Clean, scalable code that performs.",
    icon: <Code2 className="w-8 h-8" />,
    features: ["React", "Custom Components", "Clean Code"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website looks perfect on all devices. Seamless user experience across desktop, tablet, and mobile.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["Mobile-First", "Cross-Browser", "Touch-Friendly", "Flexible Layouts"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that engage users and drive conversions. Modern design principles with focus on usability and accessibility.",
    icon: <Palette className="w-8 h-8" />,
    features: ["User-Centered", "Modern Design", "Accessibility", "Wireframing"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Lightning-fast loading times and smooth interactions. Optimized images, code splitting, and best practices for superior performance.",
    icon: <Zap className="w-8 h-8" />,
    features: ["Fast Loading", "Code Splitting", "Image Optimization", "Caching"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 5,
    title: "SEO Integration",
    description: "Search engine optimized websites with proper meta tags, structured data, and performance metrics to boost your online visibility.",
    icon: <Search className="w-8 h-8" />,
    features: ["Meta Tags", "Structured Data", "Core Web Vitals", "Analytics"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and maintenance to keep your website running smoothly. Regular backups and security monitoring.",
    icon: <Settings className="w-8 h-8" />,
    features: ["Regular Updates", "Bug Fixes", "Security", "24/7 Support"],
    color: "from-indigo-500 to-purple-500"
  }
];

const Services = () => {
  return (
    <section className="min-h-screen bg-slate-900 py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive frontend development services to bring your digital vision to life with cutting-edge technology and stunning design.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2 opacity-70`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full px-8 py-4 hover:border-cyan-500/50 transition-all duration-300 group">
            <span className="text-gray-300 text-lg font-medium">Ready to start your project?</span>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform group-hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;