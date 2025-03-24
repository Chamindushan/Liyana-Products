import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Coffee } from 'lucide-react';
import aboutImage from "../assets/about img/about.png";
import teamMember1 from "../assets/about img/CEO.webp";
import teamMember2 from "../assets/about img/tea.png";
import teamMember3 from "../assets/about img/spices.png";
import teamMember4 from "../assets/about img/coconut.webp";

function About() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      } 
    }
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20,
        delay: 0.2
      } 
    }
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20,
        delay: 0.2
      } 
    }
  };

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-amber-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* About Section Heading */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4">About Liyana</h2>
            <motion.div 
              className="w-16 sm:w-20 h-1 bg-amber-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            {/* Image Section */}
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl mx-auto w-full max-w-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideFromLeft}
            >
              <motion.img 
                src={aboutImage} 
                alt="Liyana organic products" 
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideFromRight}
              className="space-y-4 sm:space-y-6 md:space-y-8 mt-6 md:mt-0"
            >
              {/* Our Story */}
              <div>
                <motion.h3 
                  className="text-xl sm:text-2xl font-semibold text-green-800 mb-3 sm:mb-4 relative inline-block"
                  whileInView={{
                    textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 10px rgba(0,128,0,0.2)", "0px 0px 0px rgba(0,0,0,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  Our Story
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  ></motion.span>
                </motion.h3>
                <motion.p 
                  className="text-amber-900 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                  variants={fadeIn}
                >
                  Founded in 2020, Liyana began with a passion for natural, organic products. Our journey started with traditional Sri Lankan coconut oil recipes passed down through generations. Today, we've expanded to curate the finest organic spices and premium tea blends, bringing the authentic flavors and wellness benefits of nature to your everyday life.
                </motion.p>
              </div>

              {/* Our Values */}
              <div>
                <motion.h3 
                  className="text-xl sm:text-2xl font-semibold text-green-800 mb-3 sm:mb-4 relative inline-block"
                  whileInView={{
                    textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 10px rgba(0,128,0,0.2)", "0px 0px 0px rgba(0,0,0,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  Our Values
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  ></motion.span>
                </motion.h3>
                <motion.ul 
                  className="space-y-3 sm:space-y-4 mb-4 sm:mb-6"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: <Leaf className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Organic Purity: We source only 100% certified organic ingredients for our coconut oil, spices, and tea products." },
                    { icon: <Sun className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Sustainable Cultivation: We partner with small-scale farmers who practice eco-friendly farming methods." },
                    { icon: <Coffee className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Artisanal Quality: Each product is crafted in small batches to ensure freshness and preserve traditional methods." }
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start bg-white p-3 sm:p-4 rounded-lg shadow-md" 
                      variants={itemVariant}
                    >
                      <motion.div 
                        className="bg-amber-600 p-1.5 sm:p-2 rounded-full text-white mr-3 sm:mr-4 mt-0.5 sm:mt-1 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      <p className="text-amber-900 text-sm sm:text-base"><span className="font-medium text-green-800">{item.text.split(":")[0]}:</span> {item.text.split(":")[1]}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div 
            className="mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-semibold text-green-800 text-center mb-3 sm:mb-4"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Team
            </motion.h3>
            <motion.div 
              className="w-16 sm:w-20 h-1 bg-amber-600 mx-auto mb-8 sm:mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { name: 'Punya Kanthi Herath', role: 'Founder & Herbalist', image: teamMember1 },
                { name: 'Prabath Chathuranga', role: 'Tea Master', image: teamMember2 },
                { name: 'Shenali Munasinghe', role: 'Spice Specialist', image: teamMember3 },
                { name: 'K.L.G Chandrasiri', role: 'Coconut Oil Expert', image: teamMember4 }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -15,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-0 transition-opacity duration-300"
                      whileHover={{ opacity: 0.7 }}
                    ></motion.div>
                  </div>
                  <motion.div 
                    className="p-4 sm:p-5 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg sm:text-xl font-semibold text-green-800 mb-1">{member.name}</h4>
                    <p className="text-amber-600 font-medium text-sm sm:text-base">{member.role}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Section */}
          <motion.div 
            className="mt-12 sm:mt-16 md:mt-20 bg-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <div className="text-center mb-8 sm:mb-12">
              <motion.h3 
                className="text-2xl sm:text-3xl font-semibold text-green-800 mb-2 sm:mb-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Journey
              </motion.h3>
              <motion.p 
                className="text-amber-900 mt-2 text-base sm:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                From traditional recipes to global wellness
              </motion.p>
              <motion.div 
                className="w-16 sm:w-20 h-1 bg-amber-600 mx-auto mt-3 sm:mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  year: "2020",
                  title: "The Beginning",
                  description: "Liyana began with our signature virgin coconut oil, using traditional cold-pressing methods."
                },
                {
                  year: "2022",
                  title: "Expansion",
                  description: "We introduced our premium spice collection, sourced from organic farms in Sri Lanka and India."
                },
                {
                  year: "2024",
                  title: "Tea Revolution",
                  description: "Our artisanal tea blends launched, combining ancient wellness traditions with modern flavors."
                }
              ].map((milestone, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-md relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <motion.div 
                    className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-green-700 text-amber-50 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg"
                    whileHover={{ 
                      rotate: 10,
                      scale: 1.1,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    {milestone.year}
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-medium text-green-800 mb-2 sm:mb-3 mt-2 sm:mt-3">{milestone.title}</h4>
                  <p className="text-amber-900 text-sm sm:text-base">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;