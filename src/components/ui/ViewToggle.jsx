import React from 'react';
import { motion } from 'framer-motion';
import { Grid3X3, List } from 'lucide-react';
import { useView } from '../../context/ViewContext';

const ViewToggle = () => {
  const { viewMode, toggleViewMode } = useView();

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleViewMode}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
          viewMode === 'grid'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <Grid3X3 size={16} />
        Grid
      </motion.button>
      
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleViewMode}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
          viewMode === 'list'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <List size={16} />
        List
      </motion.button>
    </div>
  );
};

export default ViewToggle;