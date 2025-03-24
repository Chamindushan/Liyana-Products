import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, Clock, Calendar, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    disabled: { opacity: 0.7 },
  };

  const cardHoverVariants = {
    hover: { 
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.span
            className="inline-block text-blue-600 font-medium text-sm uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Contact Us
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let's Start a Conversation
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          ></motion.div>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We're here to help and answer any questions you might have. We look forward to hearing from you and will respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 flex items-center">
                <span className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Mail className="text-blue-600 w-5 h-5" />
                </span>
                Contact Information
              </h3>

              <ul className="space-y-6">
                <motion.li className="flex items-start group" variants={itemVariants}>
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 shadow-sm group-hover:bg-blue-100 group-hover:shadow transition-all duration-300">
                    <Phone className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500 mb-1">Phone</span>
                    <a href="tel:+78 7274 927" className="text-gray-900 text-lg font-medium hover:text-blue-600 transition-colors flex items-center">
                      078 7274 927
                      <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </motion.li>

                <motion.li className="flex items-start group" variants={itemVariants}>
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 shadow-sm group-hover:bg-blue-100 group-hover:shadow transition-all duration-300">
                    <Mail className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500 mb-1">Email</span>
                    <a href="mailto:liyanalk@gmail.com" className="text-gray-900 text-lg font-medium hover:text-blue-600 transition-colors flex items-center">
                      liyanalk@gmail.com
                      <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </motion.li>

                <motion.li className="flex items-start group" variants={itemVariants}>
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 shadow-sm group-hover:bg-blue-100 group-hover:shadow transition-all duration-300">
                    <MapPin className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500 mb-1">Address</span>
                    <address className="not-italic text-gray-900 text-lg font-medium leading-relaxed group-hover:text-blue-600 transition-colors">
                      No:98 ,Tract 04
                      <br />
                      Rajanganaya
                      <br />
                      Thambuttegama , Sri Lanka
                    </address>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-xl border border-blue-500 backdrop-blur-sm relative overflow-hidden"
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="flex items-center mb-6 relative">
                <Clock className="w-5 h-5 mr-3" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              
              <ul className="space-y-4 relative">
                <li className="flex justify-between items-center pb-3 border-b border-blue-500 hover:bg-blue-500 p-2 rounded transition-colors duration-200">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 opacity-80" />
                    <span>Monday - Friday:</span>
                  </div>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-blue-500 hover:bg-blue-500 p-2 rounded transition-colors duration-200">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 opacity-80" />
                    <span>Saturday:</span>
                  </div>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between items-center hover:bg-blue-500 p-2 rounded transition-colors duration-200">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 opacity-80" />
                    <span>Sunday:</span>
                  </div>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 border border-gray-100 relative backdrop-blur-sm"
              whileHover={cardHoverVariants.hover}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-50 rounded-full -translate-y-16 translate-x-16 z-0"></div>
              
              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center text-center py-12 md:py-16 relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500 w-8 h-8 md:w-12 md:h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 text-lg max-w-md">
                    Your message has been successfully sent. We will contact you very soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <motion.div 
                    className="mb-6"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:shadow-md focus:shadow-md"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    className="mb-6"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:shadow-md focus:shadow-md"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    className="mb-8"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 hover:shadow-md focus:shadow-md resize-none"
                      placeholder="Tell us about your project or question..."
                    ></textarea>
                  </motion.div>

                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.p 
                      className="text-sm text-gray-500 mb-4 md:mb-0"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 }}
                    >
                      Fields marked with <span className="text-red-500">*</span> are required
                    </motion.p>
                    
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.4 }}
                    >
                      <motion.button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 relative overflow-hidden group"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        animate={isSubmitting ? 'disabled' : 'visible'}
                        disabled={isSubmitting}
                      >
                        {/* Button hover effect */}
                        <span className="absolute w-0 h-0 bg-blue-500 opacity-30 rounded-full group-hover:w-32 group-hover:h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all duration-500"></span>
                        
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            <span className="relative">Submit Message</span>
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>


        {/* Google Maps - Added with the specific location */}
        <motion.div
          className="mt-10 sm:mt-16 md:mt-20 rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 border border-gray-200 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          {/* Map Overlay */}
          <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-20 transition-opacity duration-300 z-10 pointer-events-none"></div>

          {/* Google Maps iframe - Fully Responsive */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7984710639824!2d81.2293222!3d6.9143028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae462167fa6dad9%3A0x84d3d3bf8391d3a2!2sNo%3A98%2C%20Tract%2004%2C%20Rajanganaya%2C%20Thambuttegama%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1709420159183!5m2!1sen!2slkhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7984710639824!2d81.2293222!3d6.9143028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae462167fa6dad9%3A0x84d3d3bf8391d3a2!2s55CP%2BC9X%2C%20Rajanganaya!5e0!3m2!1sen!2slk!4v1709420159183!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bibila Location"
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;