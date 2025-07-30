import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Truck } from 'lucide-react';

const FloatingFood: React.FC<{ icon: string; delay: number; position: { top: string; left?: string; right?: string } }> = ({ icon, delay, position }) => {
  return (
    <div
      className={`absolute w-16 h-16 text-4xl animate-bounce opacity-20 dark:opacity-30`}
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {icon}
    </div>
  );
};

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const floatingItems = [
    { icon: '🍕', delay: 0, position: { top: '10%', left: '10%' } },
    { icon: '🍔', delay: 1, position: { top: '20%', right: '15%' } },
    { icon: '🍜', delay: 2, position: { top: '60%', left: '5%' } },
    { icon: '🌮', delay: 0.5, position: { top: '70%', right: '10%' } },
    { icon: '🍦', delay: 1.5, position: { top: '30%', left: '80%' } },
    { icon: '🥗', delay: 2.5, position: { top: '50%', right: '20%' } }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Floating Food Icons */}
      {floatingItems.map((item, index) => (
        <FloatingFood key={index} {...item} />
      ))}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-40 w-28 h-28 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Rated #1 Food Delivery App</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Delicious
                <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Food Delivered
                </span>
                <span className="block">Fast & Fresh</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep in under 30 minutes.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for restaurants, cuisines, or dishes"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Find Food Near You
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg mb-2 mx-auto">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">30 min</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Delivery</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-2 mx-auto">
                  <Truck className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mb-2 mx-auto">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🍕</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Mario's Pizza Palace</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">4.9 • 25-30 min</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🍕</span>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Margherita Pizza</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Fresh basil, mozzarella</p>
                      </div>
                    </div>
                    <span className="font-bold text-red-500">₹ 234</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🥤</span>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Cola Drink</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Refreshing cold drink</p>
                      </div>
                    </div>
                    <span className="font-bold text-red-500">₹ 60</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300">
                  Add to Cart - ₹ 294
                </button>
              </div>
            </div>
            
            {/* Delivery Bike Animation */}
            <div className="absolute -bottom-10 -right-10 text-6xl animate-pulse">
              🏍️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;