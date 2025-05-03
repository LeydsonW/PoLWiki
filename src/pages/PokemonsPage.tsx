import React, { useState } from 'react';
import SearchBar from '../components/UI/SearchBar';
import PokemonCard from '../components/UI/PokemonCard';
import { allPokemons } from '../data/mockData';
import { Pokemon } from '../types';

const PokemonsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  
  // Get all unique types from Pokémon data
  const pokemonTypes = Array.from(
    new Set(allPokemons.flatMap(pokemon => pokemon.types))
  ).sort();

  // Filter Pokémon based on search term and selected type
  const filteredPokemons = allPokemons.filter(pokemon => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || pokemon.types.includes(selectedType);
    return matchesSearch && matchesType;
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleTypeFilter = (type: string) => {
    setSelectedType(type === selectedType ? '' : type);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Pokémon Database</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore all Pokémon available in Pokémon Tibia. Use filters to find specific types or search by name.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <SearchBar onSearch={handleSearch} placeholder="Search Pokémon..." />
        
        <div className="flex flex-wrap gap-2">
          {pokemonTypes.map(type => (
            <button
              key={type}
              onClick={() => handleTypeFilter(type)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedType === type
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {filteredPokemons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Pokémon Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default PokemonsPage;