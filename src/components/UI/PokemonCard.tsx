import React from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../../types';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  // Get type color for card gradient
  const getTypeColor = (type: string): string => {
    const typeColors: Record<string, string> = {
      normal: 'from-gray-300 to-gray-100',
      fire: 'from-red-500 to-yellow-300',
      water: 'from-blue-500 to-blue-300',
      electric: 'from-yellow-400 to-yellow-200',
      grass: 'from-green-500 to-green-300',
      ice: 'from-blue-300 to-blue-100',
      fighting: 'from-red-700 to-red-500',
      poison: 'from-purple-600 to-purple-400',
      ground: 'from-yellow-700 to-yellow-500',
      flying: 'from-blue-400 to-indigo-300',
      psychic: 'from-pink-500 to-pink-300',
      bug: 'from-green-600 to-green-400',
      rock: 'from-yellow-800 to-yellow-600',
      ghost: 'from-indigo-700 to-indigo-500',
      dragon: 'from-indigo-600 to-blue-500',
      dark: 'from-gray-800 to-gray-600',
      steel: 'from-gray-500 to-gray-300',
      fairy: 'from-pink-400 to-pink-200',
    };
    
    return typeColors[type.toLowerCase()] || 'from-gray-300 to-gray-100';
  };

  return (
    <Link to={`/pokemons/${pokemon.id}`} className="group">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
        {/* Pokemon Image with Type Gradient Background */}
        <div className={`h-40 bg-gradient-to-br ${getTypeColor(pokemon.types[0])} flex items-center justify-center p-4`}>
          <img 
            src={pokemon.image} 
            alt={pokemon.name} 
            className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Card Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {pokemon.name}
            </h3>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              #{String(pokemon.id).padStart(3, '0')}
            </span>
          </div>
          
          {/* Pokemon Types */}
          <div className="flex flex-wrap gap-2 mb-3">
            {pokemon.types.map((type) => (
              <span 
                key={type} 
                className="px-2 py-1 text-xs font-medium rounded-full"
                style={{ 
                  backgroundColor: type.toLowerCase() === 'fire' ? '#F87171' : 
                                  type.toLowerCase() === 'water' ? '#60A5FA' : 
                                  type.toLowerCase() === 'grass' ? '#34D399' : 
                                  type.toLowerCase() === 'electric' ? '#FBBF24' : 
                                  type.toLowerCase() === 'normal' ? '#9CA3AF' : 
                                  '#9CA3AF',
                  color: 'white'
                }}
              >
                {type}
              </span>
            ))}
          </div>
          
          {/* Base Stats */}
          <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-semibold">HP:</span> {pokemon.stats.hp}
            </div>
            <div>
              <span className="font-semibold">ATK:</span> {pokemon.stats.attack}
            </div>
            <div>
              <span className="font-semibold">DEF:</span> {pokemon.stats.defense}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;