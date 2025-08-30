import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  Home,
  FolderOpen,
  Clock,
  Star,
  Trash2,
  Upload,
  FileText,
  Image,
  Video,
  Headphones,
  Archive,
  ChevronDown,
  HardDrive
} from 'lucide-react';
import { useView } from '../../context/ViewContext';
import StorageIndicator from '../ui/StorageIndicator';

const Sidebar = () => {
  const location = useLocation();
  const { showSidebar } = useView();
  const [showFileTypes, setShowFileTypes] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: FolderOpen, label: 'All Files', path: '/files' },
    { icon: Clock, label: 'Recent', path: '/recent' },
    { icon: Star, label: 'Important', path: '/important' },
    { icon: Trash2, label: 'Trash', path: '/trash' },
  ];

  const fileTypeItems = [
    { icon: FileText, label: 'Documents', path: '/files/documents', color: 'text-blue-600' },
    { icon: Image, label: 'Images', path: '/files/images', color: 'text-green-600' },
    { icon: Video, label: 'Videos', path: '/files/videos', color: 'text-red-600' },
    { icon: Headphones, label: 'Audio', path: '/files/audios', color: 'text-purple-600' },
    { icon: Archive, label: 'Archives', path: '/files/archives', color: 'text-orange-600' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ 
        x: showSidebar ? 0 : -256, 
        opacity: showSidebar ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto z-40"
    >
      <div className="space-y-6">
        {/* Upload Button */}
        <motion.a
          href="/upload"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg transition-colors duration-200"
        >
          <Upload size={20} />
          Upload Files
        </motion.a>

        {/* Main Navigation */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.path}
                href={item.path}
                whileHover={{ x: 4 }}
                className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </motion.a>
            );
          })}
        </nav>

        {/* File Types Section */}
        <div>
          <button
            onClick={() => setShowFileTypes(!showFileTypes)}
            className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <HardDrive size={20} />
              <span className="font-medium">File Types</span>
            </div>
            <motion.div
              animate={{ rotate: showFileTypes ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>

          <AnimatePresence>
            {showFileTypes && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="ml-6 mt-2 space-y-1">
                  {fileTypeItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.path}
                        href={item.path}
                        whileHover={{ x: 4 }}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 ${
                          isActive(item.path) ? 'bg-blue-50 text-blue-700' : ''
                        }`}
                      >
                        <Icon size={18} className={item.color} />
                        <span className="text-sm">{item.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Storage Indicator */}
        <StorageIndicator />
      </div>
    </motion.aside>
  );
};

export default Sidebar;