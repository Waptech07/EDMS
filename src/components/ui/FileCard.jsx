import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Image, 
  Video, 
  Headphones, 
  Archive, 
  File,
  Star,
  MoreVertical,
  Download,
  Trash2,
  Share2,
  Eye
} from 'lucide-react';
import { useFiles } from '../../context/FileContext';

const FileCard = ({ file, index = 0 }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { toggleImportant, moveToTrash } = useFiles();

  const getFileIcon = (type) => {
    const iconProps = { size: 32, className: "text-gray-600" };
    
    switch (type) {
      case 'pdf':
      case 'doc':
      case 'docx':
      case 'txt':
        return <FileText {...iconProps} className="text-blue-600" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'image':
        return <Image {...iconProps} className="text-green-600" />;
      case 'mp4':
      case 'avi':
      case 'mov':
      case 'video':
        return <Video {...iconProps} className="text-red-600" />;
      case 'mp3':
      case 'wav':
      case 'audio':
        return <Headphones {...iconProps} className="text-purple-600" />;
      case 'zip':
      case 'rar':
      case '7z':
        return <Archive {...iconProps} className="text-orange-600" />;
      default:
        return <File {...iconProps} />;
    }
  };

  const handleMenuAction = (action) => {
    switch (action) {
      case 'important':
        toggleImportant(file.id);
        break;
      case 'trash':
        moveToTrash(file.id);
        break;
      case 'download':
        console.log('Download file:', file.name);
        break;
      case 'share':
        console.log('Share file:', file.name);
        break;
      case 'preview':
        console.log('Preview file:', file.name);
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
      className="group relative bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-shrink-0">
            {getFileIcon(file.type)}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-all duration-200"
            >
              <MoreVertical size={16} />
            </button>
            
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute right-0 top-8 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10"
                >
                  <button
                    onClick={() => handleMenuAction('preview')}
                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Eye size={16} />
                    Preview
                  </button>
                  <button
                    onClick={() => handleMenuAction('download')}
                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Download size={16} />
                    Download
                  </button>
                  <button
                    onClick={() => handleMenuAction('share')}
                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                  <button
                    onClick={() => handleMenuAction('important')}
                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Star size={16} className={file.important ? 'text-yellow-500 fill-current' : ''} />
                    {file.important ? 'Remove from Important' : 'Mark as Important'}
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
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {file.name}
          </h3>
          
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
            <span>{file.modified}</span>
            <span>{file.size}</span>
          </div>
        </div>

        {file.important && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2"
          >
            <Star size={16} className="text-yellow-500 fill-current" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FileCard;