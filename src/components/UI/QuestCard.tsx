import React from 'react';
import { Link } from 'react-router-dom';
import { Scroll, Star, Clock } from 'lucide-react';
import { Quest } from '../../types';

interface QuestCardProps {
  quest: Quest;
}

const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  // Difficulty stars
  const renderDifficulty = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={14}
          className={`${
            i < quest.difficulty
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300 dark:text-gray-600'
          }`}
        />
      ));
  };

  return (
    <Link to={`/quests/${quest.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <Scroll size={18} className="text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {quest.name}
              </h3>
            </div>
            <div className="flex">
              {renderDifficulty()}
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {quest.description}
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs mb-4">
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Clock size={14} />
              <span>{quest.estimatedTime}</span>
            </div>
            <div className="text-right">
              <span 
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  quest.status === 'New' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                    : quest.status === 'Popular' 
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                }`}
              >
                {quest.status}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-700 pt-3">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                Rewards:
              </div>
              <div className="flex gap-2">
                {quest.rewards.map((reward, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {reward}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestCard;