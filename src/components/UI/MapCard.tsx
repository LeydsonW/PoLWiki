import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from '../../types';
import { MapPin } from 'lucide-react';

interface MapCardProps {
  map: Map;
}

const MapCard: React.FC<MapCardProps> = ({ map }) => {
  return (
    <Link to={`/maps/${map.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
        {/* Map Image */}
        <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
          <img 
            src={map.image} 
            alt={map.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-lg font-semibold text-white drop-shadow-md">
              {map.name}
            </h3>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-4">
          <div className="flex items-start gap-2 mb-2">
            <MapPin size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {map.location}
            </p>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
            {map.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {map.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MapCard;