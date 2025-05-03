import React, { useState } from 'react';
import SearchBar from '../components/UI/SearchBar';
import QuestCard from '../components/UI/QuestCard';
import { allQuests } from '../data/mockData';

const QuestsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<number | null>(null);
  
  // Filter quests based on search term and difficulty
  const filteredQuests = allQuests.filter(quest => {
    const matchesSearch = quest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         quest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === null || quest.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleDifficultyFilter = (difficulty: number) => {
    setDifficultyFilter(difficultyFilter === difficulty ? null : difficulty);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Quests & Adventures</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover exciting quests and adventures in Pokémon Tibia. Complete quests to earn rewards and progress in the game.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <SearchBar onSearch={handleSearch} placeholder="Search quests..." />
        
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 self-center mr-2">Difficulty:</span>
          {[1, 2, 3, 4, 5].map(difficulty => (
            <button
              key={difficulty}
              onClick={() => handleDifficultyFilter(difficulty)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                difficultyFilter === difficulty
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {difficulty} {difficulty === 1 ? 'Star' : 'Stars'}
            </button>
          ))}
        </div>
      </div>

      {filteredQuests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuests.map(quest => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Quests Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestsPage;