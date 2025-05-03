import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PokemonCard from '../UI/PokemonCard';
import { Pokemon } from '../../types';

interface FeaturedSectionProps {
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  pokemons: Pokemon[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  description,
  linkText,
  linkTo,
  pokemons,
}) => {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        </div>
        <Link 
          to={linkTo}
          className="inline-flex items-center text-sm font-medium text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors duration-200"
        >
          {linkText}
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;