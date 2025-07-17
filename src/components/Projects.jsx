import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Calendar, Code, Zap, Brain, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e, projectId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const projects = [
    {
      id: 1,
      title: "EV Charging Station Locator & Booking Platform",
      year: "2025",
      description: "A comprehensive web-based platform for locating nearby EV charging stations, checking availability, and pre-booking slots with real-time updates and payment integration.",
      features: [
        "Role-based authentication for users and station owners",
        "Interactive maps with React Leaflet integration",
        "Real-time availability tracking system",
        "Seamless booking workflow with payment integration",
        "Advanced filtering and search capabilities"
      ],
      techStack: ["ReactJs", "TailwindCSS", "SupaBase", "React Leaflet", "Payment Gateway"],
      deployLink: "https://evcharging-platform.netlify.app/",
      githubLink: "https://github.com/GiriR2004/Ev-charging-platform",
      icon: <Zap className="w-10 h-10" />,
      color: "from-green-400 via-emerald-500 to-teal-600",
      hoverColor: "from-green-300 via-emerald-400 to-teal-500",
      accentColor: "emerald",
      category: "Full-Stack Platform"
    },
    {
      id: 2,
      title: "EduForum",
      year: "2025", 
      description: "A community-driven Q&A platform for school students (Grades 10-12), especially in rural areas. Features AI-powered chatbot for instant learning support and AI-enhanced answer recommendations.",
      features: [
        "AI-powered chatbot for instant learning support",
        "AI-enhanced answer recommendations engine",
        "Peer collaboration and discussion system",
        "Interactive and accessible design for rural students",
        "Real-time notification system"
      ],
      techStack: ["ReactJS", "TailwindCSS", "SupaBase", "OpenAI API", "WebSocket"],
      deployLink: "https://eduforum-pi.vercel.app/",
      githubLink: "https://github.com/Insamam/EduForum",
      icon: <Brain className="w-10 h-10" />,
      color: "from-purple-400 via-violet-500 to-indigo-600",
      hoverColor: "from-purple-300 via-violet-400 to-indigo-500",
      accentColor: "purple",
      category: "AI-Powered Platform"
    },
    {
      id: 3,
      title: "TaskManager",
      year: "2024",
      description: "A full-stack productivity application designed to help users efficiently manage their daily tasks with real-time status updates and automatic email notifications.",
      features: [
        "Create, update, delete, and track tasks seamlessly",
        "Real-time status updates and synchronization",
        "Advanced user authentication system",
        "Automatic email notifications with Nodemailer",
        "Task categorization and priority management"
      ],
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Nodemailer"],
      deployLink: "https://task-manager-frontend1-4wwx.onrender.com/login",
      githubLink: "https://github.com/GiriR2004/task_manager",
      icon: <CheckCircle className="w-10 h-10" />,
      color: "from-blue-400 via-cyan-500 to-sky-600",
      hoverColor: "from-blue-300 via-cyan-400 to-sky-500",
      accentColor: "blue",
      category: "Productivity App"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-inter relative overflow-hidden">
      {/* Enhanced Dynamic Background Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 animate-background-move" 
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
        {/* Enhanced Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-reverse animate-pulse-subtle"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-float-medium animate-pulse-subtle"></div>
        <div className="absolute top-3/4 left-1/6 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-float-slow animate-pulse-subtle"></div>
        <div className="absolute bottom-1/6 right-1/6 w-88 h-88 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-float-reverse animate-pulse-subtle"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-particle-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 px-6 py-20 w-full max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-purple-400 animate-sparkle" />
            <span className="text-purple-300 font-medium">Featured Projects</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 animate-text-reveal animate-shimmer animate-text-glow relative">
            My Projects
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-20"></div>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up leading-relaxed">
            Innovative solutions crafted with cutting-edge technology and creative design
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative perspective-1000 transform-gpu transition-all duration-1000 ease-out ${
                isVisible ? 'animate-card-reveal-3d' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
            >
              {/* 3D Card Container */}
              <div className={`relative h-full bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-black/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden transform-gpu transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-y-5 group-hover:shadow-2xl group-hover:shadow-${project.accentColor}-500/20`}>
                
                {/* Dynamic Spotlight Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: hoveredCard === project.id ? 
                      `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)` : 
                      'none'
                  }}
                />

                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-border-rotate`}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-full blur-xl animate-pulse-glow`}></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Enhanced Project Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${project.color} group-hover:${project.hoverColor} transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl`}>
                      <div className="relative z-10 transform group-hover:rotate-y-180 transition-transform duration-500">
                        {project.icon}
                      </div>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"></div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-2 text-gray-400 group-hover:text-white transition-colors duration-300">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm font-medium">{project.year}</span>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 text-${project.accentColor}-300 border border-${project.accentColor}-400/30`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Project Title */}
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-500 transform group-hover:scale-105">
                    {project.title}
                  </h3>

                  {/* Enhanced Project Description */}
                  <p className="text-gray-300 group-hover:text-gray-100 mb-8 leading-relaxed flex-grow transition-all duration-300 transform group-hover:translate-x-2">
                    {project.description}
                  </p>

                  {/* Enhanced Features List */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 group-hover:text-white mb-4 uppercase tracking-wide flex items-center transition-colors duration-300">
                      <Sparkles className="w-4 h-4 mr-2 animate-sparkle" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-gray-300 group-hover:text-gray-100 transition-all duration-300 transform group-hover:translate-x-2" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <CheckCircle className={`w-5 h-5 text-${project.accentColor}-400 mt-0.5 flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 group-hover:text-white mb-4 uppercase tracking-wide flex items-center transition-colors duration-300">
                      <Code className="w-4 h-4 mr-2 animate-pulse" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} bg-opacity-30 text-white border border-gray-600/50 hover:border-${project.accentColor}-400 transition-all duration-300 hover:scale-110 hover:rotate-2 transform group-hover:translate-y-1 backdrop-blur-sm`}
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.color} hover:${project.hoverColor} text-white rounded-xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-110 hover:rotate-2 hover:shadow-2xl flex-1 justify-center group/btn relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <ExternalLink className="w-5 h-5 group-hover/btn:animate-bounce relative z-10" />
                      <span className="text-sm font-medium relative z-10">Live Demo</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transform translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300 relative z-10" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-110 hover:-rotate-2 hover:shadow-2xl flex-1 justify-center group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-right"></div>
                      <Github className="w-5 h-5 group-hover/btn:animate-spin relative z-10" />
                      <span className="text-sm font-medium relative z-10">Source</span>
                    </a>
                  </div>
                </div>

                {/* Enhanced Hover Effect Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${project.color} mix-blend-overlay`}></div>
                
                {/* Animated Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        /* Enhanced Background Animations */
        @keyframes backgroundMove {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-background-move {
          animation: backgroundMove 40s ease-in-out infinite;
        }

        /* Enhanced Floating Orbs */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-30px) rotate(90deg) scale(1.1); }
          50% { transform: translateY(-20px) rotate(180deg) scale(0.9); }
          75% { transform: translateY(-40px) rotate(270deg) scale(1.05); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(40px) rotate(-90deg) scale(0.9); }
          50% { transform: translateY(20px) rotate(-180deg) scale(1.1); }
          75% { transform: translateY(30px) rotate(-270deg) scale(0.95); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-25px) rotate(120deg) scale(1.05); }
          66% { transform: translateY(-15px) rotate(240deg) scale(0.95); }
        }
        
        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 15s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: floatMedium 10s ease-in-out infinite;
        }

        /* Pulse Subtle Animation */
        @keyframes pulseSubtle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .animate-pulse-subtle {
          animation: pulseSubtle 4s ease-in-out infinite;
        }

        /* Particle Float Animation */
        @keyframes particleFloat {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); opacity: 0.6; }
          50% { transform: translateY(-40px) translateX(-5px) rotate(180deg); opacity: 0.9; }
          75% { transform: translateY(-20px) translateX(-15px) rotate(270deg); opacity: 0.6; }
          100% { transform: translateY(0px) translateX(0px) rotate(360deg); opacity: 0.3; }
        }
        .animate-particle-float {
          animation: particleFloat linear infinite;
        }

        /* Grid Pattern Animation */
        @keyframes gridMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(20px) translateY(20px); }
        }
        .animate-grid-move {
          animation: gridMove 20s linear infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* 3D Card Reveal Animation */
        @keyframes cardReveal3d {
          0% {
            opacity: 0;
            transform: translateY(100px) rotateX(45deg) rotateY(-15deg) scale(0.8);
            filter: blur(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1);
            filter: blur(0);
          }
        }
        .animate-card-reveal-3d {
          animation: cardReveal3d 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        /* Shimmer Enhanced */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          background-repeat: no-repeat;
          animation: shimmer 3s infinite linear;
        }

        /* Enhanced Text Glow */
        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(147, 51, 234, 0.3), 0 0 60px rgba(236, 72, 153, 0.2); 
          }
          50% { 
            text-shadow: 0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(147, 51, 234, 0.5), 0 0 90px rgba(236, 72, 153, 0.4); 
          }
        }
        .animate-text-glow {
          animation: textGlow 3s ease-in-out infinite;
        }

        /* Sparkle Animation */
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        /* Border Rotate Animation */
        @keyframes borderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-rotate {
          animation: borderRotate 4s linear infinite;
        }

        /* Pulse Glow Animation */
        @keyframes pulseGlow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* 3D Perspective */
        .perspective-1000 {
          perspective: 1000px;
        }

        /* 3D Transforms */
        .group:hover .group-hover\\:rotate-y-5 {
          transform: rotateY(5deg) rotateX(2deg) translateZ(20px);
        }

        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Enhanced Fade In Up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        /* Text Reveal Enhanced */
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        .animate-text-reveal {
          animation: textReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Responsive 3D adjustments */
        @media (max-width: 768px) {
          .group:hover .group-hover\\:rotate-y-5 {
            transform: rotateY(2deg) rotateX(1deg) translateZ(10px);
          }
          .animate-card-reveal-3d {
            animation-duration: 1s;
          }
        }

        /* Hardware acceleration for smooth animations */
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Projects;