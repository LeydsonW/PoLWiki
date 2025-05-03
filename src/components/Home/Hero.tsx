import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="4" fill="none" />
          <line x1="0" y1="40" x2="80" y2="40" stroke="white" strokeWidth="4" />
          <circle cx="40" cy="40" r="12" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to Pokémon Tibia Wiki
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Your comprehensive guide for everything Pokémon Tibia. Discover Pokémon, maps, quests, and more!
        </p>

        {/* Search and CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400"
              placeholder="Search Pokémon, maps, quests..."
            />
          </div>
          <div className="flex gap-3">
            <Link
              to="/pokemons"
              className="flex-1 sm:flex-none py-4 px-6 bg-white text-red-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Pokémon
            </Link>
            <Link
              to="/getting-started"
              className="flex-1 sm:flex-none py-4 px-6 bg-red-700 text-white font-medium rounded-lg hover:bg-red-800 transition-colors duration-200"
            >
              Getting Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;