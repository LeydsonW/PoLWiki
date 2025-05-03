import React from 'react';
import { Github, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation } from '../../data/navigation';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and summary */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">PT</span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Pokémon Tibia Wiki
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              The ultimate resource for Pokémon Tibia players, featuring comprehensive guides, maps, and information.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/guides" 
                  className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Beginner Guides
                </Link>
              </li>
              <li>
                <Link 
                  to="/updates" 
                  className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Latest Updates
                </Link>
              </li>
              <li>
                <Link 
                  to="/community" 
                  className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Pokémon Tibia Wiki. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by fans, for fans
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;