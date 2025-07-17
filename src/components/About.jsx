import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Smartphone, Lightbulb, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    { icon: <Lightbulb size={32} />, title: 'Innovation', description: 'Constantly exploring new technologies and creative solutions' },
    { icon: <Award size={32} />, title: 'Quality', description: 'Committed to delivering high-quality, maintainable code' },
    { icon: <Users size={32} />, title: 'Collaboration', description: 'Excellent team player with strong communication skills' },
    { icon: <Clock size={32} />, title: 'Efficiency', description: 'Focused on delivering projects on time and within scope' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-inter py-20 px-6 relative overflow-hidden">
      {/* Unified Dynamic Background Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 animate-background-move" 
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-medium"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 animate-text-glow">
            About Me
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Introduction Section */}
        <div className={`bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-600/30 p-8 md:p-12 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                Full-Stack Developer & Problem Solver
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-6 animate-fade-in-up">
                I'm a passionate full-stack developer with <span className="text-cyan-400 font-semibold">2+ years of experience</span> 
                creating innovative web applications. My journey in software development has been driven by curiosity and a desire to solve real-world problems through code.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 mb-6 animate-fade-in-up delay-300">
                I specialize in building scalable, user-friendly applications using modern technologies. From crafting pixel-perfect user interfaces to designing robust backend systems, I enjoy every aspect of the development process.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 animate-fade-in-up delay-500">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring fellow developers. I believe in continuous learning and staying ahead of industry trends.
              </p>
            </div>
            
            {/* 3D Animation Section */}
            <div className="relative flex items-center justify-center h-80">
              <div className="animate-3d-cube">
                <div className="cube">
                  <div className="face front">
                    <div className="text-2xl font-bold text-cyan-400">React</div>
                  </div>
                  <div className="face back">
                    <div className="text-2xl font-bold text-purple-400">Node.js</div>
                  </div>
                  <div className="face right">
                    <div className="text-2xl font-bold text-teal-400">MongoDB</div>
                  </div>
                  <div className="face left">
                    <div className="text-2xl font-bold text-pink-400">Express</div>
                  </div>
                  <div className="face top">
                    <div className="text-2xl font-bold text-yellow-400">JS</div>
                  </div>
                  <div className="face bottom">
                    <div className="text-2xl font-bold text-green-400">CSS</div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-orbit-1">
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 animate-orbit-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 animate-orbit-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>



        {/* Highlights Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            What I Bring to the Table
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 backdrop-blur-md rounded-2xl border border-blue-600/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-highlight-card group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-cyan-400 mb-4 flex justify-center group-hover:animate-bounce">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        /* Background Animation */
        @keyframes backgroundMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-background-move {
          animation: backgroundMove 30s ease-in-out infinite;
        }

        /* Floating Orbs */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 12s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: floatMedium 10s ease-in-out infinite;
        }

        /* Text Glow */
        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(147, 51, 234, 0.2); 
          }
          50% { 
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 30px rgba(147, 51, 234, 0.3); 
          }
        }
        .animate-text-glow {
          animation: textGlow 2s ease-in-out infinite;
        }

        /* Fade In Up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in-up.delay-500 { animation-delay: 0.5s; }

        /* 3D Cube Animation */
        .animate-3d-cube {
          perspective: 1000px;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: floating 3s ease-in-out infinite;
        }

        .cube {
          position: relative;
          width: 120px;
          height: 120px;
          transform-style: preserve-3d;
          animation: rotate3d 8s linear infinite;
        }

        .face {
          position: absolute;
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
          border: 2px solid rgba(6, 182, 212, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(10px);
          border-radius: 10px;
        }

        .front { transform: rotateY(0deg) translateZ(60px); }
        .back { transform: rotateY(180deg) translateZ(60px); }
        .right { transform: rotateY(90deg) translateZ(60px); }
        .left { transform: rotateY(-90deg) translateZ(60px); }
        .top { transform: rotateX(90deg) translateZ(60px); }
        .bottom { transform: rotateX(-90deg) translateZ(60px); }

        @keyframes rotate3d {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          33% { transform: rotateX(360deg) rotateY(0deg) rotateZ(0deg); }
          66% { transform: rotateX(0deg) rotateY(360deg) rotateZ(0deg); }
          100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg); }
        }

        @keyframes floating {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }

        /* Orbiting Elements */
        @keyframes orbit1 {
          0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }

        @keyframes orbit2 {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(120px) rotate(360deg); }
        }

        @keyframes orbit3 {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }

        .animate-orbit-1 {
          animation: orbit1 10s linear infinite;
        }

        .animate-orbit-2 {
          animation: orbit2 15s linear infinite;
        }

        .animate-orbit-3 {
          animation: orbit3 20s linear infinite;
        }

        /* Highlight Card Animation */
        @keyframes highlightCard {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-highlight-card {
          animation: highlightCard 0.8s ease-out forwards;
        }

        /* CTA Button Animation */
        @keyframes ctaButton {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-cta-button {
          animation: ctaButton 1s ease-out forwards;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .cube {
            width: 80px;
            height: 80px;
          }
          
          .face {
            width: 80px;
            height: 80px;
          }
          
          .front { transform: rotateY(0deg) translateZ(40px); }
          .back { transform: rotateY(180deg) translateZ(40px); }
          .right { transform: rotateY(90deg) translateZ(40px); }
          .left { transform: rotateY(-90deg) translateZ(40px); }
          .top { transform: rotateX(90deg) translateZ(40px); }
          .bottom { transform: rotateX(-90deg) translateZ(40px); }
          
          .animate-orbit-1 {
            animation: orbit1 10s linear infinite;
          }
          
          @keyframes orbit1 {
            0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
          }
          
          @keyframes orbit2 {
            0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
            100% { transform: rotate(-360deg) translateX(80px) rotate(360deg); }
          }
          
          @keyframes orbit3 {
            0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
          }
        }
      `}</style>
    </div>
  );
};

export default About;