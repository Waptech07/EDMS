import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Breadcrumb = ({ path = [] }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-2 text-sm text-gray-600 mb-6"
    >
      <a href="/" className="flex items-center hover:text-blue-600 transition-colors">
        <Home size={16} />
      </a>
      
      {path.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="text-gray-400" />
          <motion.a
            href={item.href}
            whileHover={{ scale: 1.05 }}
            className={`hover:text-blue-600 transition-colors ${
              index === path.length - 1 ? 'text-gray-900 font-medium' : ''
            }`}
          >
            {item.label}
          </motion.a>
        </React.Fragment>
      ))}
    </motion.nav>
  );
};

export default Breadcrumb;