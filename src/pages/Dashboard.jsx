import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderOpen, 
  Clock, 
  Star, 
  TrendingUp,
  FileText,
  Image,
  Video,
  Headphones
} from 'lucide-react';
import { useFiles } from '../context/FileContext';
import FileCard from '../components/ui/FileCard';
import FolderCard from '../components/ui/FolderCard';
import Breadcrumb from '../components/ui/Breadcrumb';

const Dashboard = () => {
  const { files, folders, recentFiles } = useFiles();

  const stats = [
    {
      icon: FolderOpen,
      label: 'Total Files',
      value: files.length,
      change: '+12%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      label: 'Recent Files',
      value: recentFiles.length,
      change: '+5%',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Star,
      label: 'Important',
      value: files.filter(f => f.important).length,
      change: '+2%',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: TrendingUp,
      label: 'Storage Used',
      value: '45.5 GB',
      change: '+8%',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const quickAccess = [
    { icon: FileText, label: 'Documents', count: 156, path: '/files/documents', color: 'text-blue-600' },
    { icon: Image, label: 'Images', count: 1434, path: '/files/images', color: 'text-green-600' },
    { icon: Video, label: 'Videos', count: 89, path: '/files/videos', color: 'text-red-600' },
    { icon: Headphones, label: 'Audio', count: 156, path: '/files/audios', color: 'text-purple-600' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
        <Breadcrumb />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your files and storage.</p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon size={24} className={stat.color} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Access */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-lg border border-gray-200 p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickAccess.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.path}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
              >
                <div className="p-3 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors mb-3">
                  <Icon size={24} className={item.color} />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.count} files</p>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Files */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recent Files</h2>
          <a href="/recent" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {recentFiles.slice(0, 8).map((file, index) => (
            <FileCard key={file.id} file={file} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Recent Folders */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Folders</h2>
          <a href="/files" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {folders.slice(0, 4).map((folder, index) => (
            <FolderCard key={folder.id} folder={folder} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;