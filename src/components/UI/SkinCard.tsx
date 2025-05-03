import React from 'react';
import { Link } from 'react-router-dom';
import { User, Star } from 'lucide-react';
import { Skin } from '../../types';

interface SkinCardProps {
  skin: Skin;
}

const SkinCard: React.FC<SkinCardProps> = ({ skin }) => {
  return (
    <Link to={`/skins/${skin.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
        {/* Skin Image */}
        <div className="relative h-52 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <img 
            src={skin.image} 
            alt={skin.name} 
            className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          {skin.premium && (
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-bold rounded-full bg-yellow-400 text-yellow-900">
                PREMIUM
              </span>
            </div>
          )}
        </div>
        
        {/* Card Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {skin.name}
            </h3>
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < skin.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {skin.description}
          </p>
          
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <User size={14} />
              <span>By {skin.creator}</span>
            </div>
            <span className="font-medium text-red-500 dark:text-red-400">
              {skin.price ? `${skin.price} coins` : 'Free'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkinCard;