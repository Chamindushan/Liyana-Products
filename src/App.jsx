import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <div id="about"><About /></div>
              <div id="products"><Product /></div>
              <div id="contact"><Contact /></div>
            </>
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
