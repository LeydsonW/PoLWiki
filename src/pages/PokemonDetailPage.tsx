import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Scroll } from 'lucide-react';
import { allPokemons } from '../data/mockData';

const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pokemon = allPokemons.find(p => p.id.toString() === id);

  if (!pokemon) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Pokémon Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The Pokémon you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/pokemons" 
          className="inline-flex items-center text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Pokémon List
        </Link>
      </div>
    );
  }

  // Get type color for badges
  const getTypeColor = (type: string): string => {
    const typeColors: Record<string, string> = {
      normal: 'bg-gray-300 text-gray-800',
      fire: 'bg-red-500 text-white',
      water: 'bg-blue-500 text-white',
      electric: 'bg-yellow-400 text-yellow-800',
      grass: 'bg-green-500 text-white',
      ice: 'bg-blue-300 text-blue-800',
      fighting: 'bg-red-700 text-white',
      poison: 'bg-purple-600 text-white',
      ground: 'bg-yellow-700 text-white',
      flying: 'bg-blue-400 text-white',
      psychic: 'bg-pink-500 text-white',
      bug: 'bg-green-600 text-white',
      rock: 'bg-yellow-800 text-white',
      ghost: 'bg-indigo-700 text-white',
      dragon: 'bg-indigo-600 text-white',
      dark: 'bg-gray-800 text-white',
      steel: 'bg-gray-500 text-white',
      fairy: 'bg-pink-400 text-white',
    };
    
    return typeColors[type.toLowerCase()] || 'bg-gray-300 text-gray-800';
  };

  return (
    <div>
      <div className="mb-6">
        <Link
          to="/pokemons"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Pokémon List
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Pokémon Image */}
          <div className="md:w-1/3 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-8 flex items-center justify-center">
            <img 
              src={pokemon.image} 
              alt={pokemon.name} 
              className="w-56 h-56 object-contain"
            />
          </div>

          {/* Pokémon Info */}
          <div className="md:w-2/3 p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                {pokemon.name}
              </h1>
              <span className="text-xl font-medium text-gray-500 dark:text-gray-400">
                #{String(pokemon.id).padStart(3, '0')}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {pokemon.types.map(type => (
                <span 
                  key={type}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(type)}`}
                >
                  {type}
                </span>
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {pokemon.description}
            </p>

            {/* Stats */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Base Stats</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">HP</div>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-red-500 h-2.5 rounded-full" 
                        style={{ width: `${(pokemon.stats.hp / 255) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                      {pokemon.stats.hp}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Attack</div>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-orange-500 h-2.5 rounded-full" 
                        style={{ width: `${(pokemon.stats.attack / 255) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                      {pokemon.stats.attack}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Defense</div>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full" 
                        style={{ width: `${(pokemon.stats.defense / 255) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                      {pokemon.stats.defense}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Sp. Attack</div>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-purple-500 h-2.5 rounded-full" 
                        style={{ width: `${(pokemon.stats.spAttack / 255) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                      {pokemon.stats.spAttack}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Sp. Defense</div>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-green-500 h-2.5 rounded-full" 
                        style={{ width: `${(pokemon.stats.spDefense / 255) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                      {pokemon.stats.spDefense}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Speed</div>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-yellow-500 h-2.5 rounded-full" 
                        style={{ width: `${(pokemon.stats.speed / 255) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                      {pokemon.stats.speed}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Abilities</h2>
                <ul className="space-y-2">
                  {pokemon.abilities.map((ability, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star size={16} className="text-yellow-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{ability.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{ability.description}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Spawn Locations</h2>
                <ul className="space-y-2">
                  {pokemon.locations.map((location, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <MapPin size={16} className="text-red-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{location.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Level: {location.minLevel}-{location.maxLevel}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Quests */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Related Quests</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            {pokemon.relatedQuests.length > 0 ? (
              <ul className="space-y-4">
                {pokemon.relatedQuests.map((quest, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Scroll size={18} className="text-purple-500 mt-0.5" />
                    <div>
                      <Link 
                        to={`/quests/${quest.id}`}
                        className="font-medium text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                      >
                        {quest.name}
                      </Link>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{quest.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No related quests available for this Pokémon.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;