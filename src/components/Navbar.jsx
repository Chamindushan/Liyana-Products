import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook } from 'lucide-react';
import logo from "../assets/liyana.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Smooth scrolling function
  const handleScroll = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Navigation links
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Products", path: "products" },
    { name: "Contact", path: "contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-indigo-800 shadow-lg py-2' : 'bg-gradient-to-r from-indigo-800 to-purple-700 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleScroll("home")}>
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleScroll(link.path)}
              className="text-white hover:text-gray-300 transition"
            >
              {link.name}
            </button>
          ))}
        </div>
        
        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com/liyana" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <Facebook className="h-5 w-5" />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => { handleScroll(link.path); setIsOpen(false); }}
              className="block text-white py-2 border-b border-gray-600 w-full text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
