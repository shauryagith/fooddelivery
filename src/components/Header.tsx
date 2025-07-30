import React, { useState } from 'react';
import { Menu, X, Sun, Moon, MapPin, User, ShoppingBag, ChevronDown, Store, Gift, HelpCircle, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAuth, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();

  const navigationItems = [
    { 
      name: 'Home', 
      key: 'home',
      hasDropdown: false 
    },
    { 
      name: 'Restaurants', 
      key: 'restaurants',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Browse All', key: 'restaurants', icon: Store },
        { name: 'Top Rated', key: 'top-rated', icon: User },
        { name: 'Near Me', key: 'near-me', icon: MapPin },
        { name: 'Fast Delivery', key: 'fast-delivery', icon: ShoppingBag }
      ]
    },
    { 
      name: 'Offers', 
      key: 'offers',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Daily Deals', key: 'daily-deals', icon: Gift },
        { name: 'Coupons', key: 'coupons', icon: Gift },
        { name: 'Cashback', key: 'cashback', icon: Gift }
      ]
    },
    { 
      name: 'Help', 
      key: 'help',
      hasDropdown: true,
      dropdownItems: [
        { name: 'FAQ', key: 'faq', icon: HelpCircle },
        { name: 'Contact Us', key: 'contact', icon: Phone },
        { name: 'Track Order', key: 'track', icon: MapPin }
      ]
    }
  ];

  const handleNavClick = (key: string) => {
    onPageChange(key);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              FoodieExpress
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <div
                key={item.key}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.key)}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.key
                      ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.key ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 opacity-100 transition-all duration-300 transform translate-y-0 z-50">
                    {item.dropdownItems?.map((dropdownItem) => {
                      const Icon = dropdownItem.icon;
                      return (
                        <button
                          key={dropdownItem.key}
                          onClick={() => handleNavClick(dropdownItem.key)}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{dropdownItem.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Location */}
            <div className="hidden lg:flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-sm">XYZ, India</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => onOpenAuth('login')}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`block w-full text-left px-2 py-2 rounded-lg transition-colors ${
                  currentPage === item.key
                    ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-red-500'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => onOpenAuth('login')}
                className="flex-1 px-4 py-2 text-center border border-red-500 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;