import React, { useState } from 'react';
import SearchBar from '../components/UI/SearchBar';
import SystemCard from '../components/UI/SystemCard';
import { allSystems } from '../data/mockData';

const SystemsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter systems based on search term
  const filteredSystems = allSystems.filter(system => 
    system.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    system.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Game Systems</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn about the various game systems and mechanics in Pokémon Tibia. Understanding these systems is key to mastering the game.
        </p>
      </div>

      <div className="flex mb-8">
        <SearchBar onSearch={handleSearch} placeholder="Search game systems..." />
      </div>

      {filteredSystems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSystems.map(system => (
            <SystemCard key={system.id} system={system} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Systems Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default SystemsPage;