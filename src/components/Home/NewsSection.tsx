import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../../types';

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  return (
    <section className="py-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Updates</h2>
          <Link 
            to="/news"
            className="inline-flex items-center text-sm font-medium text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors duration-200"
          >
            View all updates
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="space-y-6">
          {news.map((item) => (
            <Link 
              key={item.id} 
              to={`/news/${item.id}`}
              className="block group"
            >
              <div className="flex flex-col md:flex-row gap-4 pb-6 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                {/* News image (if available) */}
                {item.image && (
                  <div className="md:w-1/4 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-32 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                
                {/* News content */}
                <div className={`${item.image ? 'md:w-3/4' : 'w-full'}`}>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;