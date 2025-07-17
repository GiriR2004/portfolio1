import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-inter flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced Dynamic Background Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 animate-background-move"
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
        {/* Enhanced floating orbs with improved animations */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-slow animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-reverse animate-pulse-medium"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-medium animate-pulse-fast"></div>
        
        {/* New animated particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400/60 rounded-full animate-particle-float-1"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400/60 rounded-full animate-particle-float-2"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-particle-float-3"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-yellow-400/60 rounded-full animate-particle-float-4"></div>
        
        {/* Left Side Animated Elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-64 opacity-30">
          <div className="absolute top-0 left-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-side-float-1"></div>
          <div className="absolute top-8 left-8 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-side-float-2"></div>
          <div className="absolute top-16 left-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-side-float-3"></div>
          <div className="absolute top-24 left-6 w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-side-float-4"></div>
          <div className="absolute top-32 left-10 w-2.5 h-2.5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-side-float-5"></div>
          <div className="absolute top-40 left-3 w-3.5 h-3.5 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-side-float-6"></div>
          <div className="absolute top-48 left-7 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-side-float-7"></div>
          <div className="absolute top-56 left-5 w-1 h-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-full animate-side-float-8"></div>
          
          {/* Left Side Geometric Shapes */}
          <div className="absolute top-12 left-0 w-1 h-8 bg-gradient-to-b from-cyan-400/40 to-transparent animate-line-draw-1"></div>
          <div className="absolute top-28 left-12 w-8 h-1 bg-gradient-to-r from-purple-400/40 to-transparent animate-line-draw-2"></div>
          <div className="absolute top-44 left-1 w-1 h-6 bg-gradient-to-b from-pink-400/40 to-transparent animate-line-draw-3"></div>
        </div>

        {/* Right Side Animated Elements */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-64 opacity-30">
          <div className="absolute top-0 right-4 w-3 h-3 bg-gradient-to-l from-cyan-400 to-blue-500 rounded-full animate-side-float-1 animation-delay-500"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-l from-purple-400 to-pink-500 rounded-full animate-side-float-2 animation-delay-600"></div>
          <div className="absolute top-16 right-2 w-4 h-4 bg-gradient-to-l from-emerald-400 to-teal-500 rounded-full animate-side-float-3 animation-delay-700"></div>
          <div className="absolute top-24 right-6 w-1.5 h-1.5 bg-gradient-to-l from-orange-400 to-red-500 rounded-full animate-side-float-4 animation-delay-800"></div>
          <div className="absolute top-32 right-10 w-2.5 h-2.5 bg-gradient-to-l from-indigo-400 to-purple-500 rounded-full animate-side-float-5 animation-delay-900"></div>
          <div className="absolute top-40 right-3 w-3.5 h-3.5 bg-gradient-to-l from-pink-400 to-rose-500 rounded-full animate-side-float-6 animation-delay-1000"></div>
          <div className="absolute top-48 right-7 w-2 h-2 bg-gradient-to-l from-yellow-400 to-orange-500 rounded-full animate-side-float-7 animation-delay-1100"></div>
          <div className="absolute top-56 right-5 w-1 h-1 bg-gradient-to-l from-lime-400 to-green-500 rounded-full animate-side-float-8 animation-delay-1200"></div>
          
          {/* Right Side Geometric Shapes */}
          <div className="absolute top-12 right-0 w-1 h-8 bg-gradient-to-b from-cyan-400/40 to-transparent animate-line-draw-1 animation-delay-300"></div>
          <div className="absolute top-28 right-12 w-8 h-1 bg-gradient-to-l from-purple-400/40 to-transparent animate-line-draw-2 animation-delay-400"></div>
          <div className="absolute top-44 right-1 w-1 h-6 bg-gradient-to-b from-pink-400/40 to-transparent animate-line-draw-3 animation-delay-500"></div>
        </div>

        {/* Top Side Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-32 opacity-20">
          <div className="absolute top-4 left-8 w-2 h-2 bg-blue-400/60 rounded-full animate-top-float-1"></div>
          <div className="absolute top-6 left-20 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-top-float-2"></div>
          <div className="absolute top-8 left-32 w-3 h-3 bg-cyan-400/60 rounded-full animate-top-float-3"></div>
          <div className="absolute top-4 left-44 w-1 h-1 bg-pink-400/60 rounded-full animate-top-float-4"></div>
          <div className="absolute top-6 left-56 w-2.5 h-2.5 bg-yellow-400/60 rounded-full animate-top-float-5"></div>
        </div>

        {/* Bottom Side Decorative Elements */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 opacity-20">
          <div className="absolute bottom-4 left-8 w-2 h-2 bg-blue-400/60 rounded-full animate-bottom-float-1"></div>
          <div className="absolute bottom-6 left-20 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bottom-float-2"></div>
          <div className="absolute bottom-8 left-32 w-3 h-3 bg-cyan-400/60 rounded-full animate-bottom-float-3"></div>
          <div className="absolute bottom-4 left-44 w-1 h-1 bg-pink-400/60 rounded-full animate-bottom-float-4"></div>
          <div className="absolute bottom-6 left-56 w-2.5 h-2.5 bg-yellow-400/60 rounded-full animate-bottom-float-5"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 w-full max-w-6xl mx-auto">
        {/* Enhanced Hero Section */}
        <section className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-600/30 p-8 md:p-12 lg:p-16 transform transition-all duration-700 ease-in-out hover:scale-[1.02] hover:shadow-blue-500/20 hover:border-blue-400/40 animate-section-reveal group hover:animate-gentle-breathe">

          {/* Enhanced Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-text-reveal animate-text-glow hover:animate-text-wave cursor-default">
            <span className="text-white">Hi, I'm </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 animate-shimmer text-yellow-300 drop-shadow-lg animate-name-highlight hover:animate-bounce-gentle">Giri</span>
          </h1>

          {/* Enhanced Subtitle/Role */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-100 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 pr-2 hover:animate-typing-wave">
            A Creative Full-Stack Developer
          </p>

          {/* Enhanced Description */}
          <div className="text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed text-gray-300 mb-12 space-y-2 hover:animate-text-float">
            <p className="animate-line-fade-in delay-1200 hover:text-cyan-300 transition-colors duration-300 cursor-default">
              I build beautiful, functional, and performant web applications.
            </p>
            <p className="animate-line-fade-in delay-1400 hover:text-purple-300 transition-colors duration-300 cursor-default">
              From intricate front-end designs to robust back-end systems,
            </p>
            <p className="animate-line-fade-in delay-1600 hover:text-pink-300 transition-colors duration-300 cursor-default">
              I thrive on bringing innovative digital experiences to life.
            </p>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 animate-fade-in-up delay-1800">
            {/* GitHub Link */}
            <a
              href="https://github.com/GiriR2004"
              target="_blank"
              rel="noopener noreferrer"
              className="group/github flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-blue-400/50 hover:border-blue-300 hover:shadow-blue-400/50 animate-link-pop hover:animate-link-wiggle hover:shadow-2xl"
              aria-label="GitHub Profile"
            >
              <Github size={24} className="group-hover/github:animate-rotate-y group-hover/github:text-blue-200" />
              <span className="text-lg font-medium group-hover/github:animate-text-pulse">GitHub</span>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/giri-r-03511825a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/linkedin flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-purple-400/50 hover:border-purple-300 hover:shadow-purple-400/50 animate-link-pop delay-100 hover:animate-link-wiggle hover:shadow-2xl"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className="group-hover/linkedin:animate-rotate-y group-hover/linkedin:text-purple-200" />
              <span className="text-lg font-medium group-hover/linkedin:animate-text-pulse">LinkedIn</span>
            </a>

            {/* Resume Link */}
            <a
              href="https://drive.google.com/file/d/1Fm4kNNMFHdACIEQIo95Jq197X9zccVvA/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group/resume flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-teal-400/50 hover:border-teal-300 hover:shadow-teal-400/50 animate-link-pop delay-200 hover:animate-link-wiggle hover:shadow-2xl"
              aria-label="View Resume"
            >
              <FileText size={24} className="group-hover/resume:animate-rotate-y group-hover/resume:text-teal-200" />
              <span className="text-lg font-medium group-hover/resume:animate-text-pulse">Resume</span>
            </a>
          </div>
        </section>

        {/* Enhanced Scroll Indicator */}
        <div className="mt-16 animate-bounce hover:animate-bounce-gentle cursor-pointer">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-cyan-400 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-400/50">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse hover:bg-cyan-400 transition-colors duration-300"></div>
          </div>
        </div>
      </main>

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

        /* Enhanced Floating Orbs */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-10px) rotate(90deg) scale(1.1); }
          50% { transform: translateY(-20px) rotate(180deg) scale(1); }
          75% { transform: translateY(-10px) rotate(270deg) scale(0.9); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(10px) rotate(-90deg) scale(0.9); }
          50% { transform: translateY(20px) rotate(-180deg) scale(1); }
          75% { transform: translateY(10px) rotate(-270deg) scale(1.1); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-8px) rotate(120deg) scale(1.05); }
          66% { transform: translateY(-15px) rotate(240deg) scale(0.95); }
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

        /* Enhanced Pulse Animations */
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes pulseMedium {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
        @keyframes pulseFast {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulseMedium 3s ease-in-out infinite;
        }
        .animate-pulse-fast {
          animation: pulseFast 2s ease-in-out infinite;
        }

        /* New Side Float Animations */
        @keyframes sideFloat1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.6; 
          }
          25% { 
            transform: translateY(-15px) translateX(8px) scale(1.2); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-30px) translateX(0px) scale(0.8); 
            opacity: 0.8; 
          }
          75% { 
            transform: translateY(-15px) translateX(-8px) scale(1.1); 
            opacity: 0.9; 
          }
        }
        @keyframes sideFloat2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.5; 
          }
          33% { 
            transform: translateY(20px) translateX(-10px) rotate(120deg); 
            opacity: 0.9; 
          }
          66% { 
            transform: translateY(-10px) translateX(15px) rotate(240deg); 
            opacity: 0.7; 
          }
        }
        @keyframes sideFloat3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-25px) translateX(12px) scale(1.3) rotate(180deg); 
            opacity: 1; 
          }
        }
        @keyframes sideFloat4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.4; 
          }
          25% { 
            transform: translateY(18px) translateX(-6px); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(0px) translateX(-12px); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(-18px) translateX(-6px); 
            opacity: 0.6; 
          }
        }
        @keyframes sideFloat5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.7; 
          }
          40% { 
            transform: translateY(-20px) translateX(10px) scale(0.7); 
            opacity: 0.9; 
          }
          80% { 
            transform: translateY(10px) translateX(-5px) scale(1.2); 
            opacity: 0.5; 
          }
        }
        @keyframes sideFloat6 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.6; 
          }
          30% { 
            transform: translateY(-12px) translateX(8px) rotate(90deg); 
            opacity: 1; 
          }
          60% { 
            transform: translateY(8px) translateX(-4px) rotate(180deg); 
            opacity: 0.8; 
          }
          90% { 
            transform: translateY(-4px) translateX(6px) rotate(270deg); 
            opacity: 0.4; 
          }
        }
        @keyframes sideFloat7 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.5; 
          }
          50% { 
            transform: translateY(-35px) translateX(15px) scale(1.4); 
            opacity: 1; 
          }
        }
        @keyframes sideFloat8 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3; 
          }
          20% { 
            transform: translateY(25px) translateX(-8px); 
            opacity: 0.7; 
          }
          40% { 
            transform: translateY(-15px) translateX(12px); 
            opacity: 1; 
          }
          60% { 
            transform: translateY(5px) translateX(-4px); 
            opacity: 0.8; 
          }
          80% { 
            transform: translateY(-25px) translateX(8px); 
            opacity: 0.5; 
          }
        }
        
        .animate-side-float-1 { animation: sideFloat1 8s ease-in-out infinite; }
        .animate-side-float-2 { animation: sideFloat2 10s ease-in-out infinite; }
        .animate-side-float-3 { animation: sideFloat3 12s ease-in-out infinite; }
        .animate-side-float-4 { animation: sideFloat4 9s ease-in-out infinite; }
        .animate-side-float-5 { animation: sideFloat5 11s ease-in-out infinite; }
        .animate-side-float-6 { animation: sideFloat6 13s ease-in-out infinite; }
        .animate-side-float-7 { animation: sideFloat7 7s ease-in-out infinite; }
        .animate-side-float-8 { animation: sideFloat8 14s ease-in-out infinite; }

        /* Line Draw Animations */
        @keyframes lineDraw1 {
          0% { 
            height: 0; 
            opacity: 0; 
          }
          50% { 
            height: 2rem; 
            opacity: 1; 
          }
          100% { 
            height: 0; 
            opacity: 0; 
          }
        }
        @keyframes lineDraw2 {
          0% { 
            width: 0; 
            opacity: 0; 
          }
          50% { 
            width: 2rem; 
            opacity: 1; 
          }
          100% { 
            width: 0; 
            opacity: 0; 
          }
        }
        @keyframes lineDraw3 {
          0% { 
            height: 0; 
            opacity: 0; 
          }
          50% { 
            height: 1.5rem; 
            opacity: 1; 
          }
          100% { 
            height: 0; 
            opacity: 0; 
          }
        }
        
        .animate-line-draw-1 { animation: lineDraw1 6s ease-in-out infinite; }
        .animate-line-draw-2 { animation: lineDraw2 8s ease-in-out infinite; }
        .animate-line-draw-3 { animation: lineDraw3 7s ease-in-out infinite; }

        /* Top Float Animations */
        @keyframes topFloat1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(20px) translateX(10px) rotate(180deg); 
            opacity: 0.8; 
          }
        }
        @keyframes topFloat2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.3; 
          }
          33% { 
            transform: translateY(15px) translateX(-8px) scale(1.3); 
            opacity: 0.7; 
          }
          66% { 
            transform: translateY(8px) translateX(12px) scale(0.8); 
            opacity: 0.9; 
          }
        }
        @keyframes topFloat3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.5; 
          }
          25% { 
            transform: translateY(12px) translateX(6px); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(24px) translateX(-4px); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(12px) translateX(-10px); 
            opacity: 0.6; 
          }
        }
        @keyframes topFloat4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(18px) translateX(-6px) rotate(360deg); 
            opacity: 0.9; 
          }
        }
        @keyframes topFloat5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.4; 
          }
          40% { 
            transform: translateY(10px) translateX(8px) scale(1.2); 
            opacity: 0.8; 
          }
          80% { 
            transform: translateY(20px) translateX(-5px) scale(0.9); 
            opacity: 0.6; 
          }
        }
        
        .animate-top-float-1 { animation: topFloat1 9s ease-in-out infinite; }
        .animate-top-float-2 { animation: topFloat2 11s ease-in-out infinite; }
        .animate-top-float-3 { animation: topFloat3 8s ease-in-out infinite; }
        .animate-top-float-4 { animation: topFloat4 10s ease-in-out infinite; }
        .animate-top-float-5 { animation: topFloat5 12s ease-in-out infinite; }

        /* Bottom Float Animations */
        @keyframes bottomFloat1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(-20px) translateX(-10px) rotate(-180deg); 
            opacity: 0.8; 
          }
        }
        @keyframes bottomFloat2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.3; 
          }
          33% { 
            transform: translateY(-15px) translateX(8px) scale(1.3); 
            opacity: 0.7; 
          }
          66% { 
            transform: translateY(-8px) translateX(-12px) scale(0.8); 
            opacity: 0.9; 
          }
        }
        @keyframes bottomFloat3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.5; 
          }
          25% { 
            transform: translateY(-12px) translateX(-6px); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-24px) translateX(4px); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(-12px) translateX(10px); 
            opacity: 0.6; 
          }
        }
        @keyframes bottomFloat4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-18px) translateX(6px) rotate(-360deg); 
            opacity: 0.9; 
          }
        }
        @keyframes bottomFloat5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.4; 
          }
          40% { 
            transform: translateY(-10px) translateX(-8px) scale(1.2); 
            opacity: 0.8; 
          }
          80% { 
            transform: translateY(-20px) translateX(5px) scale(0.9); 
            opacity: 0.6; 
          }
        }
        
        .animate-bottom-float-1 { animation: bottomFloat1 9s ease-in-out infinite; }
        .animate-bottom-float-2 { animation: bottomFloat2 11s ease-in-out infinite; }
        .animate-bottom-float-3 { animation: bottomFloat3 8s ease-in-out infinite; }
        .animate-bottom-float-4 { animation: bottomFloat4 10s ease-in-out infinite; }
        .animate-bottom-float-5 { animation: bottomFloat5 12s ease-in-out infinite; }

        /* Animation Delay Classes */
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        @keyframes particleFloat1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-30px) translateX(20px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-60px) translateX(0px) rotate(180deg); opacity: 0.8; }
          75% { transform: translateY(-30px) translateX(-20px) rotate(270deg); opacity: 0.4; }
        }
        @keyframes particleFloat2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.4; }
          33% { transform: translateY(40px) translateX(-30px) rotate(120deg); opacity: 0.8; }
          66% { transform: translateY(20px) translateX(30px) rotate(240deg); opacity: 0.6; }
        }
        @keyframes particleFloat3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-50px) translateX(-40px) rotate(180deg); opacity: 1; }
        }
        @keyframes particleFloat4 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(35px) translateX(25px) rotate(90deg); opacity: 0.3; }
          50% { transform: translateY(0px) translateX(50px) rotate(180deg); opacity: 0.9; }
          75% { transform: translateY(-35px) translateX(25px) rotate(270deg); opacity: 0.4; }
        }
        .animate-particle-float-1 {
          animation: particleFloat1 15s ease-in-out infinite;
        }
        .animate-particle-float-2 {
          animation: particleFloat2 12s ease-in-out infinite;
        }
        .animate-particle-float-3 {
          animation: particleFloat3 18s ease-in-out infinite;
        }
        .animate-particle-float-4 {
          animation: particleFloat4 14s ease-in-out infinite;
        }

        /* Section Reveal */
        @keyframes sectionReveal {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }
        .animate-section-reveal {
          animation: sectionReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* New Gentle Breathe Animation */
        @keyframes gentleBreathe {
          0%, 100% { transform: scale(1.02); }
          50% { transform: scale(1.03); }
        }
        .animate-gentle-breathe {
          animation: gentleBreathe 4s ease-in-out infinite;
        }

        /* Text Reveal */
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .animate-text-reveal {
          animation: textReveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Enhanced Shimmer Effect */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          background-repeat: no-repeat;
          animation: shimmer 4s infinite linear;
        }

        /* Enhanced Text Glow */
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(147, 51, 234, 0.2), 0 0 30px rgba(236, 72, 153, 0.1);
          }
          50% {
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 30px rgba(147, 51, 234, 0.3), 0 0 40px rgba(236, 72, 153, 0.2);
          }
        }
        .animate-text-glow {
          animation: textGlow 2s ease-in-out infinite;
        }

        /* New Text Wave Animation */
        @keyframes textWave {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-2px); }
          50% { transform: translateY(2px); }
          75% { transform: translateY(-1px); }
        }
        .animate-text-wave {
          animation: textWave 2s ease-in-out infinite;
        }

        /* New Name Highlight Animation */
        @keyframes nameHighlight {
          0%, 100% { 
            transform: scale(1); 
            text-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
          }
          50% { 
            transform: scale(1.05); 
            text-shadow: 0 0 20px rgba(255, 255, 0, 0.8);
          }
        }
        .animate-name-highlight {
          animation: nameHighlight 3s ease-in-out infinite;
        }

        /* New Bounce Gentle Animation */
        @keyframes bounceGentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-gentle {
          animation: bounceGentle 1s ease-in-out infinite;
        }

        /* Enhanced Typing Effect */
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blinkCaret {
          from, to { border-color: transparent; }
          50% { border-color: #06b6d4; }
        }
        .animate-typing {
          animation: typing 3s steps(30, end) forwards,
                      blinkCaret 0.8s step-end infinite;
          animation-delay: 0.5s;
        }

        /* New Typing Wave Animation */
        @keyframes typingWave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-typing-wave {
          animation: typingWave 2s ease-in-out infinite;
        }

        /* New Text Float Animation */
        @keyframes textFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-text-float {
          animation: textFloat 3s ease-in-out infinite;
        }

        /* Line Fade In */
        @keyframes lineFadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-line-fade-in {
          animation: lineFadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-line-fade-in.delay-1200 { animation-delay: 1.2s; }
        .animate-line-fade-in.delay-1400 { animation-delay: 1.4s; }
        .animate-line-fade-in.delay-1600 { animation-delay: 1.6s; }

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
          opacity: 0;
        }
        .delay-1800 { animation-delay: 1.8s; }

        /* Enhanced Link Pop */
        @keyframes linkPop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          80% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-link-pop {
          animation: linkPop 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
          opacity: 0;
        }
        .animate-link-pop.delay-100 { animation-delay: 2s; }
        .animate-link-pop.delay-200 { animation-delay: 2.1s; }

        /* New Link Wiggle Animation */
        @keyframes linkWiggle {
          0%, 100% { transform: translateY(-2px) rotate(0deg); }
          25% { transform: translateY(-2px) rotate(1deg); }
          50% { transform: translateY(-2px) rotate(0deg); }
          75% { transform: translateY(-2px) rotate(-1deg); }
        }
        .animate-link-wiggle {
          animation: linkWiggle 0.5s ease-in-out infinite;
        }

        /* Enhanced Icon Rotate */
        @keyframes rotateY {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .group\\/github:hover .group-hover\\/github\\:animate-rotate-y,
        .group\\/linkedin:hover .group-hover\\/linkedin\\:animate-rotate-y,
        .group\\/resume:hover .group-hover\\/resume\\:animate-rotate-y {
          animation: rotateY 0.6s ease-in-out;
        }

        /* New Text Pulse Animation */
        @keyframes textPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .group\\/github:hover .group-hover\\/github\\:animate-text-pulse,
        .group\\/linkedin:hover .group-hover\\/linkedin\\:animate-text-pulse,
        .group\\/resume:hover .group-hover\\/resume\\:animate-text-pulse {
          animation: textPulse 1s ease-in-out infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-typing {
            white-space: normal;
            border-right: none;
            animation: none;
          }
          
          .animate-text-wave,
          .animate-typing-wave,
          .animate-text-float {
            animation: none;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-background-move,
          .animate-float-slow,
          .animate-float-reverse,
          .animate-float-medium,
          .animate-pulse-slow,
          .animate-pulse-medium,
          .animate-pulse-fast,
          .animate-particle-float-1,
          .animate-particle-float-2,
          .animate-particle-float-3,
          .animate-particle-float-4,
          .animate-gentle-breathe,
          .animate-text-wave,
          .animate-name-highlight,
          .animate-typing-wave,
          .animate-text-float,
          .animate-link-wiggle,
          .animate-bounce-gentle,
          .animate-side-float-1,
          .animate-side-float-2,
          .animate-side-float-3,
          .animate-side-float-4,
          .animate-side-float-5,
          .animate-side-float-6,
          .animate-side-float-7,
          .animate-side-float-8,
          .animate-line-draw-1,
          .animate-line-draw-2,
          .animate-line-draw-3,
          .animate-top-float-1,
          .animate-top-float-2,
          .animate-top-float-3,
          .animate-top-float-4,
          .animate-top-float-5,
          .animate-bottom-float-1,
          .animate-bottom-float-2,
          .animate-bottom-float-3,
          .animate-bottom-float-4,
          .animate-bottom-float-5 {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;