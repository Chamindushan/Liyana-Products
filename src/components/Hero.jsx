import React from 'react';
import heroImage from "../assets/hero img/hero.png"; // Adjust the path if needed

function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center text-center" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6">
          Explore our content and discover more about us.
        </p>
        <a 
          href="#about" 
          className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;