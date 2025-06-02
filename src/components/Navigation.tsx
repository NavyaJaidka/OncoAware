
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Home, Info, Calculator, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinkClass = (path: string) => `
    flex items-center px-4 py-2 rounded-lg transition-colors duration-200
    ${isActive(path) 
      ? 'bg-blue-600 text-white shadow-md' 
      : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
    }
  `;

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">OncoAware</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <Link to="/" className={navLinkClass('/')}>
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              <Info className="w-4 h-4 mr-2" />
              About Us
            </Link>
            <Link to="/fractal-calculator" className={navLinkClass('/fractal-calculator')}>
              <Calculator className="w-4 h-4 mr-2" />
              Fractal Calculator
            </Link>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="ml-2 p-2"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
