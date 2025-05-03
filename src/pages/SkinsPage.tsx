import React, { useState } from 'react';
import SearchBar from '../components/UI/SearchBar';
import SkinCard from '../components/UI/SkinCard';
import { allSkins } from '../data/mockData';

const SkinsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [premiumFilter, setPremiumFilter] = useState<boolean | null>(null);
  
  // Filter skins based on search term and premium status
  const filteredSkins = allSkins.filter(skin => {
    const matchesSearch = skin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         skin.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPremium = premiumFilter === null || skin.premium === premiumFilter;
    return matchesSearch && matchesPremium;
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Character Skins</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse and discover character skins to personalize your appearance in Pokémon Tibia.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <SearchBar onSearch={handleSearch} placeholder="Search skins by name or creator..." />
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setPremiumFilter(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              premiumFilter === null
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setPremiumFilter(false)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              premiumFilter === false
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Free
          </button>
          <button
            onClick={() => setPremiumFilter(true)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              premiumFilter === true
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Premium
          </button>
        </div>
      </div>

      {filteredSkins.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkins.map(skin => (
            <SkinCard key={skin.id} skin={skin} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Skins Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default SkinsPage;