import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, Star } from 'lucide-react';

// Import your product images
import product1 from "../assets/product img/chill powder.png";
import product2 from "../assets/product img/turmeric.png";
import product3 from "../assets/product img/cinnamon.png";
import product4 from "../assets/product img/ginger.png";
import product5 from "../assets/product img/tea.png";
import product6 from "../assets/product img/coconut.png";

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md z-10">
          {product.badge}
        </div>
      )}
      
      {/* Image container */}
      <div className="relative overflow-hidden h-64 bg-gray-100">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Quick action buttons */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-3 px-4 flex justify-between items-center"
          initial={{ y: 60 }}
          animate={{ y: isHovered ? 0 : 60 }}
          transition={{ duration: 0.3 }}
        >
          <button className="text-white hover:text-blue-400 transition-colors">
            <Eye size={20} />
          </button>
          <button className="text-white hover:text-red-400 transition-colors">
            <Heart size={20} />
          </button>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="text-sm text-blue-600 font-medium mb-2">{product.category}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
      </div>
    </motion.div>
  );
};

function Products() {
  const productData = [
    { id: 1, name: "Chili Powder", category: "Spices", description: "Premium quality chili powder made from sun-dried red chilies.", price: 249.99, rating: 4, reviews: 128, badge: "SALE", image: product1 },
    { id: 2, name: "Turmeric", category: "Spices", description: "Pure turmeric powder with a rich golden hue and numerous health benefits.", price: 129.99, rating: 5, reviews: 86, image: product2 },
    { id: 3, name: "Cinnamon", category: "Spices", description: "Aromatic and naturally sweet cinnamon for baked goods and beverages.", price: 179.99, rating: 4, reviews: 64, image: product3 },
    { id: 4, name: "Ginger", category: "Spices", description: "Finely ground ginger powder with a warm, zesty flavor.", price: 129.99, rating: 5, reviews: 86, image: product4 },
    { id: 5, name: "Tea", category: "Tea", description: "Exquisite Ceylon tea with a rich aroma and smooth taste.", price: 129.99, rating: 5, reviews: 86, image: product5 },
    { id: 6, name: "Coconut Oil", category: "Oil", description: "Premium Ceylon coconut oil with a rich aroma and smooth texture.", price: 129.99, rating: 5, reviews: 86, image: product6 }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of premium tea leaves and spices, carefully curated to deliver the finest flavors and aromas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
