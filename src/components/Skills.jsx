import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Enhanced skills data with icons and difficulty levels
  const skillsData = [
    {
      name: "React",
      category: "Frontend",
      icon: "⚛️",
      color: "from-cyan-400 via-blue-500 to-purple-600",
      shadowColor: "shadow-cyan-500/50",
      level: 5,
      description: "Building dynamic UIs"
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: "🟨",
      color: "from-yellow-400 via-orange-500 to-red-500",
      shadowColor: "shadow-yellow-500/50",
      level: 5,
      description: "Modern ES6+ features"
    },
    {
      name: "HTML",
      category: "Frontend",
      icon: "🌐",
      color: "from-orange-400 via-red-500 to-pink-500",
      shadowColor: "shadow-orange-500/50",
      level: 5,
      description: "Semantic markup"
    },
    {
      name: "CSS",
      category: "Frontend",
      icon: "🎨",
      color: "from-blue-400 via-indigo-500 to-purple-600",
      shadowColor: "shadow-blue-500/50",
      level: 5,
      description: "Advanced styling"
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: "💨",
      color: "from-teal-400 via-cyan-500 to-blue-600",
      shadowColor: "shadow-teal-500/50",
      level: 4,
      description: "Utility-first CSS"
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "🟢",
      color: "from-green-400 via-emerald-500 to-teal-600",
      shadowColor: "shadow-green-500/50",
      level: 4,
      description: "Server-side JavaScript"
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: "🚀",
      color: "from-gray-400 via-gray-600 to-gray-800",
      shadowColor: "shadow-gray-500/50",
      level: 4,
      description: "Web framework"
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: "🍃",
      color: "from-green-500 via-lime-500 to-emerald-600",
      shadowColor: "shadow-green-500/50",
      level: 4,
      description: "NoSQL database"
    },
    {
      name: "Supabase",
      category: "Database",
      icon: "⚡",
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      shadowColor: "shadow-emerald-500/50",
      level: 3,
      description: "Backend as a Service"
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: "☁️",
      color: "from-orange-400 via-yellow-500 to-amber-600",
      shadowColor: "shadow-orange-500/50",
      level: 3,
      description: "Cloud services"
    },
    {
      name: "Python",
      category: "Programming",
      icon: "🐍",
      color: "from-blue-400 via-yellow-500 to-green-600",
      shadowColor: "shadow-blue-500/50",
      level: 4,
      description: "Versatile programming"
    },
    {
      name: "Java",
      category: "Programming",
      icon: "☕",
      color: "from-red-400 via-orange-500 to-yellow-600",
      shadowColor: "shadow-red-500/50",
      level: 4,
      description: "Object-oriented"
    },
    {
      name: "C",
      category: "Programming",
      icon: "⚙️",
      color: "from-gray-400 via-slate-500 to-gray-700",
      shadowColor: "shadow-gray-500/50",
      level: 3,
      description: "System programming"
    }
  ];

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Trigger visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Multiple gradient layers */}
        <div 
          className="absolute inset-0 animate-background-move opacity-60" 
          style={{
            background: `
              radial-gradient(circle at ${20 + mousePosition.x * 20}% ${80 + mousePosition.y * 20}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at ${80 - mousePosition.x * 20}% ${20 + mousePosition.y * 20}%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
              radial-gradient(circle at ${40 + mousePosition.x * 10}% ${60 + mousePosition.y * 10}%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-mesh-slide"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent animate-mesh-slide-reverse"></div>
        </div>

        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 animate-text-glow-enhanced relative z-10">
              SKILLS
            </h2>
            {/* Glowing background for title */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-blue-500/20 animate-pulse-slow blur-sm">
              SKILLS
            </div>
          </div>
          
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-width-expand-enhanced"></div>
            <div className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse blur-sm"></div>
          </div>
          
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto animate-text-reveal-delayed">
            Mastering the art of code with passion, precision, and continuous innovation
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Enhanced Skill Card */}
              <div className={`relative h-64 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 group-hover:rotate-y-3d animate-card-entrance`}>
                
                {/* Card Background with Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Glass Effect */}
                <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 group-hover:border-gray-600/70 transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  
                  {/* Skill Icon and Name */}
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className={`text-6xl mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-icon-float`}>
                        {skill.icon}
                      </div>
                      
                      {/* Glowing ring around icon */}
                      <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse`}></div>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${skill.color} group-hover:scale-105 transition-transform duration-300`}>
                      {skill.name}
                    </h3>
                    
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="mt-4">
                    <div className="flex justify-center space-x-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < skill.level 
                              ? `bg-gradient-to-r ${skill.color} animate-pulse` 
                              : 'bg-gray-600/50'
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Animated progress bar */}
                    <div className="w-full bg-gray-700/50 rounded-full h-1 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-progress-fill`}
                        style={{ 
                          width: `${(skill.level / 5) * 100}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} p-0.5 animate-border-spin`}>
                    <div className="w-full h-full rounded-3xl bg-gray-900/80"></div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full animate-particle-float`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Enhanced 3D Shadow */}
              <div className={`absolute inset-0 rounded-3xl bg-black/30 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 ${skill.shadowColor}`}></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl -z-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Floating Skill Names */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {['REACT', 'NODE', 'PYTHON', 'AWS', 'MONGO'].map((skill, index) => (
            <div
              key={skill}
              className="absolute text-8xl font-black text-white/5 animate-float-text-enhanced select-none"
              style={{
                left: `${10 + index * 20}%`,
                top: `${20 + index * 15}%`,
                animationDelay: `${index * 3}s`,
                animationDuration: `${15 + index * 3}s`
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        /* Enhanced Background Animations */
        @keyframes backgroundMove {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-background-move {
          animation: backgroundMove 20s ease-in-out infinite;
        }

        @keyframes meshSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes meshSlideReverse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-mesh-slide {
          animation: meshSlide 8s linear infinite;
        }
        .animate-mesh-slide-reverse {
          animation: meshSlideReverse 12s linear infinite;
        }

        /* Floating Particles */
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) translateX(10px) scale(1.5);
            opacity: 0.8;
          }
        }
        .animate-float-particle {
          animation: floatParticle 6s ease-in-out infinite;
        }

        /* Enhanced Text Glow */
        @keyframes textGlowEnhanced {
          0%, 100% { 
            text-shadow: 
              0 0 20px rgba(6, 182, 212, 0.5),
              0 0 40px rgba(147, 51, 234, 0.3),
              0 0 60px rgba(236, 72, 153, 0.2);
          }
          50% { 
            text-shadow: 
              0 0 30px rgba(6, 182, 212, 0.8),
              0 0 60px rgba(147, 51, 234, 0.5),
              0 0 90px rgba(236, 72, 153, 0.3);
          }
        }
        .animate-text-glow-enhanced {
          animation: textGlowEnhanced 3s ease-in-out infinite;
        }

        /* Enhanced Width Expand */
        @keyframes widthExpandEnhanced {
          0% { 
            width: 0%; 
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% { 
            width: 100%; 
            opacity: 0.8;
          }
        }
        .animate-width-expand-enhanced {
          animation: widthExpandEnhanced 2s ease-out 1s both;
        }

        /* Text Reveal Delayed */
        @keyframes textRevealDelayed {
          from {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .animate-text-reveal-delayed {
          animation: textRevealDelayed 1s ease-out 1.5s both;
        }

        /* Card Entrance */
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(30deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        .animate-card-entrance {
          animation: cardEntrance 0.8s ease-out both;
        }

        /* Icon Float */
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-icon-float {
          animation: iconFloat 3s ease-in-out infinite;
        }

        /* Progress Fill */
        @keyframes progressFill {
          from { width: 0%; }
          to { width: var(--progress-width); }
        }
        .animate-progress-fill {
          animation: progressFill 1.5s ease-out both;
        }

        /* Border Spin */
        @keyframes borderSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-border-spin {
          animation: borderSpin 3s linear infinite;
        }

        /* Particle Float */
        @keyframes particleFloat {
          0% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) translateX(20px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-60px) translateX(40px) scale(0);
            opacity: 0;
          }
        }
        .animate-particle-float {
          animation: particleFloat 2s ease-out infinite;
        }

        /* Enhanced Float Text */
        @keyframes floatTextEnhanced {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.05;
          }
          25% {
            transform: translateY(-30px) translateX(20px) rotate(2deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) translateX(-10px) rotate(-1deg);
            opacity: 0.05;
          }
          75% {
            transform: translateY(-40px) translateX(30px) rotate(1deg);
            opacity: 0.08;
          }
        }
        .animate-float-text-enhanced {
          animation: floatTextEnhanced 12s ease-in-out infinite;
        }

        /* Pulse Slow */
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        /* 3D Rotate */
        @keyframes rotateY3D {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(15deg); }
        }
        .group:hover .group-hover\\:rotate-y-3d {
          animation: rotateY3D 0.3s ease-out forwards;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-float-text-enhanced {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;