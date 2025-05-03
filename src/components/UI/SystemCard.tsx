import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, ArrowRight } from 'lucide-react';
import { System } from '../../types';

interface SystemCardProps {
  system: System;
}

const SystemCard: React.FC<SystemCardProps> = ({ system }) => {
  return (
    <Link to={`/systems/${system.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100 dark:border-gray-700 p-5">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
            <Cog size={20} />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {system.name}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {system.description}
            </p>
            
            {/* Key Features */}
            <ul className="mb-4 space-y-1">
              {system.keyFeatures.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-green-500 dark:text-green-400">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="flex items-center mt-2 text-red-500 dark:text-red-400 font-medium text-sm">
              <span>Learn more</span>
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SystemCard;