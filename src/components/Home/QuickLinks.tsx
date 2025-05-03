import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Scroll, Palette, Bot, BookOpen, Trophy } from 'lucide-react';

const QuickLinks: React.FC = () => {
  const links = [
    { 
      icon: <Map size={24} />, 
      title: 'Maps', 
      description: 'Explore game regions', 
      path: '/maps',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
    },
    { 
      icon: <Scroll size={24} />, 
      title: 'Quests', 
      description: 'Complete adventures', 
      path: '/quests',
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300'
    },
    { 
      icon: <Palette size={24} />, 
      title: 'Skins', 
      description: 'Customize your look', 
      path: '/skins',
      color: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300'
    },
    { 
      icon: <Bot size={24} />, 
      title: 'Systems', 
      description: 'Game mechanics', 
      path: '/systems',
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
    },
    { 
      icon: <BookOpen size={24} />, 
      title: 'Guides', 
      description: 'Learn to play', 
      path: '/guides',
      color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300'
    },
    { 
      icon: <Trophy size={24} />, 
      title: 'Achievements', 
      description: 'Unlock rewards', 
      path: '/achievements',
      color: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300'
    },
  ];

  return (
    <section className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group border border-gray-100 dark:border-gray-700"
          >
            <div className={`p-3 rounded-full mb-3 ${link.color}`}>
              {link.icon}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200">
              {link.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;