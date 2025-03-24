import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import logo from "../assets/liyana.png";

function Footer() {
  // Social media links
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Mail, url: "mailto:contact@liyana.com", label: "Email" }
  ];

  // Navigation links
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" }
  ];

  // Smooth scrolling function
  const handleScroll = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-green-50 to-green-100 text-green-800 pt-10 pb-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Brand Section */}
          <motion.div className="group">
            <div className="relative overflow-hidden rounded-lg p-4 bg-white shadow-sm transition-all duration-300 group-hover:shadow-md border border-green-100">
              <button onClick={() => handleScroll("home")} className="flex items-center mb-3">
                <motion.div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-2">
                  <img src={logo} alt="Logo" className="h-8" />
                </motion.div>
                <span className="text-xl font-bold text-green-700">Liyana</span>
              </button>
              <p className="text-green-700 mb-4 text-sm leading-relaxed">
                "Discover the essence of Ceylon with Liyana. From the finest tea leaves and aromatic spices to pure, nutrient-rich coconut oil, we bring you nature's best."
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-600 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="group">
            <div className="relative overflow-hidden rounded-lg p-4 bg-white shadow-sm transition-all duration-300 group-hover:shadow-md border border-green-100 h-full">
              <h3 className="text-base font-semibold mb-3 relative text-green-700">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index} className="transform transition-transform duration-300 hover:-translate-y-px">
                    <button
                      onClick={() => handleScroll(link.id)}
                      className="text-green-600 hover:text-green-800 flex items-center group transition-all duration-300 text-sm"
                    >
                      <span className="w-5 h-5 bg-green-50 rounded-full mr-2 flex items-center justify-center group-hover:bg-amber-50">
                        <ChevronRight className="w-3 h-3" />
                      </span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Address Section */}
          <motion.div className="group">
            <div className="relative overflow-hidden rounded-lg p-4 bg-white shadow-sm transition-all duration-300 group-hover:shadow-md border border-green-100 h-full">
              <h3 className="text-base font-semibold mb-3 relative text-green-700">Our Address</h3>
              <div className="text-green-700 space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-md mr-3">
                    <MapPin className="w-4 h-4 text-amber-500" />
                  </div>
                  <address className="not-italic leading-relaxed mt-1">
                    NO 98 Tract 04 Rajanganaya, Thambuttegama, Sri Lanka
                  </address>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-md mr-3">
                    <Mail className="w-4 h-4 text-amber-500" />
                  </div>
                  <a href="mailto:liyanalk@gmail.com" className="hover:text-amber-600 transition-colors duration-300 mt-1">
                    liyanalk@gmail.com
                  </a>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-50 p-2 rounded-md mr-3">
                    <Phone className="w-4 h-4 text-amber-500" />
                  </div>
                  <a href="tel:+78 7274 927" className="hover:text-amber-600 transition-colors duration-300 mt-1">
                    +78 7274 927
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div className="border-t border-green-100 mt-6 pt-4 text-center">
          <p className="text-green-600 text-xs">
            &copy; {new Date().getFullYear()} Liyana. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
