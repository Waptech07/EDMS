import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Folder,
  MoreVertical,
  FolderOpen,
  Share2,
  Trash2,
  Edit3,
  Star
} from 'lucide-react';

const FolderCard = ({ folder, index = 0 }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMenuAction = (action) => {
    switch (action) {
      case 'open':
        console.log('Open folder:', folder.name);
        break;
      case 'rename':
        console.log('Rename folder:', folder.name);
        break;
      case 'share':
        console.log('Share folder:', folder.name);
        break;
      case 'trash':
        console.log('Move to trash:', folder.name);
        break;
    }
    setShowMenu(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            {isHovered ? (
              <FolderOpen size={32} className="text-blue-500" />
            ) : (
              <Folder size={32} className="text-blue-500" />
            )}
          </motion.div>
          
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-all duration-200"
            >
              <MoreVertical size={16} />
            </button>
            
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-0 top-8 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10"
              >
                <button
                  onClick={() => handleMenuAction('open')}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <FolderOpen size={16} />
                  Open
                </button>
                <button
                  onClick={() => handleMenuAction('rename')}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Edit3 size={16} />
                  Rename
                </button>
                <button
                  onClick={() => handleMenuAction('share')}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Share2 size={16} />
                  Share
                </button>
                <hr className="my-1" />
                <button
                  onClick={() => handleMenuAction('trash')}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={16} />
                  Move to Trash
                </button>
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {folder.name}
          </h3>
          
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
            <span>{folder.modified}</span>
            <span>{folder.fileCount} files</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FolderCard;