import React, { useState } from 'react';
import SearchBar from '../components/UI/SearchBar';
import MapCard from '../components/UI/MapCard';
import { allMaps } from '../data/mockData';

const MapsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  
  // Get all unique regions from map data
  const regions = Array.from(
    new Set(allMaps.map(map => map.region))
  ).sort();

  // Filter maps based on search term and selected region
  const filteredMaps = allMaps.filter(map => {
    const matchesSearch = map.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          map.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === '' || map.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleRegionFilter = (region: string) => {
    setSelectedRegion(region === selectedRegion ? '' : region);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Pokémon Tibia Maps</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore all the regions and locations in the Pokémon Tibia world. Find spawn locations, resources, and points of interest.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <SearchBar onSearch={handleSearch} placeholder="Search maps by name or location..." />
        
        <div className="flex flex-wrap gap-2">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => handleRegionFilter(region)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedRegion === region
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {filteredMaps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaps.map(map => (
            <MapCard key={map.id} map={map} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Maps Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default MapsPage;