import React, { useState } from 'react';
import { Search, Star, Clock, MapPin, Heart, ChevronDown } from 'lucide-react';

const RestaurantsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const filters = [
    { key: 'all', name: 'All Restaurants' },
    { key: 'fast-food', name: 'Fast Food' },
    { key: 'pizza', name: 'Pizza' },
    { key: 'chinese', name: 'Chinese' },
    { key: 'indian', name: 'Indian' },
    { key: 'italian', name: 'Italian' },
    { key: 'healthy', name: 'Healthy' }
  ];

  const restaurants = [
    {
      id: 1,
      name: "Mario's Pizza Palace",
      cuisine: 'Italian',
      rating: 4.8,
      deliveryTime: '25-30 min',
      distance: '1.2 km',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?w=400&h=300&fit=crop',
      offer: '50% OFF up to ₹100',
      tags: ['Pizza', 'Italian', 'Fast Food']
    },
    {
      id: 2,
      name: "Dragon Palace",
      cuisine: 'Chinese',
      rating: 4.6,
      deliveryTime: '30-35 min',
      distance: '2.1 km',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?w=400&h=300&fit=crop',
      offer: '₹125 OFF above ₹249',
      tags: ['Chinese', 'Asian', 'Noodles']
    },
    {
      id: 3,
      name: "Burger Junction",
      cuisine: 'American',
      rating: 4.7,
      deliveryTime: '20-25 min',
      distance: '0.8 km',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=400&h=300&fit=crop',
      offer: 'Buy 1 Get 1 Free',
      tags: ['Burgers', 'Fast Food', 'American']
    },
    {
      id: 4,
      name: "Spice Garden",
      cuisine: 'Indian',
      rating: 4.9,
      deliveryTime: '35-40 min',
      distance: '1.5 km',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=400&h=300&fit=crop',
      offer: '30% OFF up to ₹150',
      tags: ['Indian', 'Curry', 'Vegetarian']
    },
    {
      id: 5,
      name: "Fresh Salad Co.",
      cuisine: 'Healthy',
      rating: 4.5,
      deliveryTime: '15-20 min',
      distance: '0.5 km',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?w=400&h=300&fit=crop',
      offer: '₹75 OFF above ₹199',
      tags: ['Healthy', 'Salads', 'Vegan']
    },
    {
      id: 6,
      name: "Taco Fiesta",
      cuisine: 'Mexican',
      rating: 4.4,
      deliveryTime: '25-30 min',
      distance: '1.8 km',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=400&h=300&fit=crop',
      offer: '40% OFF up to ₹120',
      tags: ['Mexican', 'Tacos', 'Spicy']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Restaurants Near You
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover amazing food from local restaurants
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search restaurants, cuisines, or dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 pr-10 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="delivery-time">Delivery Time</option>
                <option value="distance">Distance</option>
                <option value="offers">Best Offers</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 mt-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter.key
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-500'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Restaurant Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {restaurant.offer}
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-green-600 fill-current" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {restaurant.cuisine}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.distance}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white dark:bg-gray-800 border-2 border-red-500 text-red-500 px-8 py-3 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
            Load More Restaurants
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;