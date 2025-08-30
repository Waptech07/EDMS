import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, TrendingUp } from 'lucide-react';

const StorageIndicator = () => {
  const usedStorage = 45.5;
  const totalStorage = 50;
  const usagePercentage = (usedStorage / totalStorage) * 100;

  const storageBreakdown = [
    { type: 'Images', size: '15.3 GB', color: 'bg-green-500', files: 1434 },
    { type: 'Videos', size: '12.4 GB', color: 'bg-red-500', files: 89 },
    { type: 'Documents', size: '8.2 GB', color: 'bg-blue-500', files: 245 },
    { type: 'Audio', size: '5.1 GB', color: 'bg-purple-500', files: 156 },
    { type: 'Other', size: '4.5 GB', color: 'bg-gray-500', files: 78 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gray-50 rounded-lg p-4 space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HardDrive size={20} className="text-gray-600" />
          <span className="font-medium text-gray-900">Storage</span>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Upgrade
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{usedStorage} GB used</span>
          <span className="text-gray-600">{totalStorage} GB total</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${usagePercentage}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-2 rounded-full ${
              usagePercentage > 90 ? 'bg-red-500' : 
              usagePercentage > 75 ? 'bg-yellow-500' : 'bg-blue-500'
            }`}
          />
        </div>
      </div>

      <div className="space-y-2">
        {storageBreakdown.map((item, index) => (
          <motion.div
            key={item.type}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <span className="text-gray-600">{item.type}</span>
              <span className="text-gray-400">({item.files})</span>
            </div>
            <span className="text-gray-700 font-medium">{item.size}</span>
          </motion.div>
        ))}
      </div>

      {usagePercentage > 80 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg"
        >
          <TrendingUp size={16} className="text-yellow-600" />
          <span className="text-xs text-yellow-700">Storage almost full</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StorageIndicator;