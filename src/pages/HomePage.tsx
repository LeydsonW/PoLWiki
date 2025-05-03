import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedSection from '../components/Home/FeaturedSection';
import NewsSection from '../components/Home/NewsSection';
import QuickLinks from '../components/Home/QuickLinks';
import { featuredPokemons, latestNews } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <QuickLinks />
      
      <FeaturedSection 
        title="Featured Pokémon"
        description="Check out these notable Pokémon in Tibia."
        linkText="View all Pokémon"
        linkTo="/pokemons"
        pokemons={featuredPokemons}
      />
      
      <NewsSection news={latestNews} />
    </div>
  );
};

export default HomePage;