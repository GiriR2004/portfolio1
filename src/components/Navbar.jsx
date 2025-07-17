import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null); // Create a ref for the nav component

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside using a ref
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open AND the click happened outside the nav element
      // (meaning the click target is not contained within the nav element referenced by navRef)
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside); // Using mousedown for broader detection
    // Clean up event listener when component unmounts or isOpen changes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Depend on isOpen so the effect re-runs if the menu state changes

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      ref={navRef} // Attach the ref to the nav element
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled
          ? 'bg-gray-950/95 backdrop-blur-lg shadow-2xl py-3'
          : 'bg-transparent py-4'
        }
      `}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div
          className={`
            flex justify-between items-center px-8 py-4 rounded-2xl transition-all duration-300 ease-in-out mx-4
            ${isScrolled
              ? 'bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-md shadow-lg border border-blue-600/30'
              : 'bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-md shadow-xl border border-blue-600/40'
            }
          `}
        >
          {/* Desktop Navigation - Centered (now flex-grow to push mobile button to end) */}
          <ul className="hidden md:flex items-center justify-center space-x-10 flex-grow">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`
                    relative group py-3 px-6 rounded-lg transition-all duration-300 ease-in-out text-base font-medium
                    hover:text-cyan-300 hover:bg-white/10
                    ${
                      location.pathname === link.path
                        ? 'text-cyan-400 font-semibold bg-white/20'
                        : 'text-gray-200'
                    }
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform -translate-x-1/2 transition-all duration-300 ease-in-out
                      ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl focus:outline-none hover:text-cyan-300 transition-colors duration-300"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out mt-4 mx-4
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700/50 p-6">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    // This onClick is crucial for closing the menu when a link is clicked
                    onClick={() => setIsOpen(false)}
                    className={`
                      block py-4 px-6 text-center text-lg transition-all duration-300 rounded-lg font-medium
                      hover:bg-white/10 hover:text-cyan-300 transform hover:scale-105
                      ${
                        location.pathname === link.path
                          ? 'text-cyan-400 font-semibold bg-white/20'
                          : 'text-gray-200'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;