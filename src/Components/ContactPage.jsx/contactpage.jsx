import React, { useRef, useState, useEffect } from 'react';
import { Mail, MessageCircle, Linkedin, Phone, MapPin, Send, Star, Sparkles, Laptop } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'from-green-400 to-green-600',
      action: () => window.open('https://wa.me/+2349137564913', '_blank'),
      description: 'Chat with me instantly'
    },
    {
      id: 'gmail',
      name: 'Gmail',
      icon: Mail,
      color: 'from-red-400 to-red-600',
      action: () => window.open('mailto:okeniyiisaac20@gmail.com', '_blank'),
      description: 'Send me an email'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'from-blue-400 to-blue-600',
      action: () => window.open('https://www.linkedin.com/in/isaac-olusoji-11138b2b1', '_blank'),
      description: 'Connect professionally'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
  emailjs.init('2-omrCsoO6AaKWfeL'); // Only public key here
}, []);

const sendMail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_6bhb1up', 'template_oz67x0u', form.current, '2-omrCsoO6AaKWfeL')
    .then(() => {
      alert('Email sent successfully');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      alert('Failed to send email');
    });
};



  return (
    <div>
  <div id="contact" className="container mx-auto px-6 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-white animate-spin" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <Sparkles className="w-8 h-8 text-white animate-spin" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm just a message away. Choose your preferred way to reach out!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white/20`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
                onClick={method.action}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-6 group-hover:animate-bounce`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{method.name}</h3>
                <p className="text-gray-300 text-lg">{method.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Drop me a message</h2>
              <p className="text-gray-300">Or fill out the form below and I'll get back to you soon!</p>
            </div>

            <form ref={form} onSubmit={sendMail}>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <Laptop className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Work Style</h3>
            <p className="text-gray-300">Remote & Flexible</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
            <p className="text-gray-300">Usually within 24 hours</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
