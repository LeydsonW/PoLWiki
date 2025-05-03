import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // If we're on the home page, don't show breadcrumbs
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <li>
          <Link 
            to="/" 
            className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 flex items-center"
          >
            <Home size={16} />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          // Format path name to be more readable
          const formattedName = value
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          
          return (
            <React.Fragment key={to}>
              <li className="flex items-center">
                <ChevronRight size={16} className="text-gray-400" />
              </li>
              <li>
                {isLast ? (
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formattedName}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                  >
                    {formattedName}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;