import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clothesData from './list.json'; 

function Course() {
  const [book, setBook] = useState(clothesData); 
  const handleExploreNow = () => {
  
    window.open('https://www.instagram.com/doonsisters_3/profilecard/?igsh=MW1xamlnNW5kMTFoZg==', '_blank');
  }

  return (
    <div className="bg-gray-50 text-gray-900 py-20 px-8">
      
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center"
      >
        <FaRocket className="text-6xl mx-auto mb-4 animate__animated animate__bounceIn text-indigo-600" />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-800">
          Discover Your Next Favorite Style
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-80 mb-6">
          A curated collection of the latest fashion trends. Find clothing that defines your style, all in one place.
        </p>
        <Link to="/course">
          <motion.button onClick={handleExploreNow}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Explore Our Collection
          </motion.button>
        </Link>
      </motion.div>

      {/* Featured Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white mb-6">
          Featured Picks for You
        </h2>
        <p className="text-lg sm:text-xl max-w-xl mx-auto text-gray-700 dark:text-gray-400 mb-8">
          Browse through our exclusive picks to find the perfect clothing for any occasion.
        </p>
      </motion.div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {book.map((item) => (
          <motion.div
            key={item.id}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Cards item={item} />
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 bg-white p-12 text-center rounded-lg shadow-md">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl text-gray-800 font-semibold mb-4"
        >
          Ready to Refresh Your Wardrobe?
        </motion.h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Browse through our exclusive collections and find fashion that speaks to you. Don’t miss out on amazing deals!
        </p>
        <Link to="/collections">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Shop Now
          </motion.button>
        </Link>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 p-12 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-8">
          What Our Customers Are Saying
        </h2>

        <div className="flex justify-center space-x-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-sm rounded-lg p-6 bg-white shadow-xl"
          >
            <p className="text-lg text-gray-600 mb-4">
              "FashionHub has completely transformed my wardrobe! The collection is amazing, and the quality is top-notch."
            </p>
            <p className="font-semibold text-gray-700">John Doe</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-sm rounded-lg p-6 bg-white shadow-xl"
          >
            <p className="text-lg text-gray-600 mb-4">
              "Absolutely love the customer service and the way FashionHub keeps up with the latest trends. Highly recommend!"
            </p>
            <p className="font-semibold text-gray-700">Jane Smith</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Course;
