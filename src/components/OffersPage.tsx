import React, { useState } from 'react';
import { Gift, Clock, Star, Tag, Percent, CreditCard, Users, Zap } from 'lucide-react';

const OffersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { key: 'all', name: 'All Offers', icon: Gift },
    { key: 'daily', name: 'Daily Deals', icon: Clock },
    { key: 'cashback', name: 'Cashback', icon: CreditCard },
    { key: 'first-order', name: 'First Order', icon: Star }
  ];

  const offers = [
    {
      id: 1,
      title: '50% OFF up to ₹100',
      description: 'Valid on orders above ₹199',
      code: 'SAVE50',
      restaurant: "Mario's Pizza Palace",
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?w=300&h=200&fit=crop',
      validUntil: '2024-12-31',
      type: 'discount',
      category: 'all'
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free',
      description: 'On all burgers and combos',
      code: 'BOGO',
      restaurant: 'Burger Junction',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=300&h=200&fit=crop',
      validUntil: '2024-12-25',
      type: 'bogo',
      category: 'daily'
    },
    {
      id: 3,
      title: '20% Cashback',
      description: 'Up to ₹150 cashback on orders above ₹500',
      code: 'CASHBACK20',
      restaurant: 'All Restaurants',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=300&h=200&fit=crop',
      validUntil: '2024-12-30',
      type: 'cashback',
      category: 'cashback'
    },
    {
      id: 4,
      title: '60% OFF First Order',
      description: 'Maximum discount ₹120 for new users',
      code: 'WELCOME60',
      restaurant: 'All Restaurants',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?w=300&h=200&fit=crop',
      validUntil: '2024-12-31',
      type: 'first-order',
      category: 'first-order'
    },
    {
      id: 5,
      title: 'Free Delivery',
      description: 'On orders above ₹299',
      code: 'FREEDEL',
      restaurant: 'All Restaurants',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?w=300&h=200&fit=crop',
      validUntil: '2024-12-28',
      type: 'free-delivery',
      category: 'all'
    },
    {
      id: 6,
      title: '₹200 OFF',
      description: 'On orders above ₹800',
      code: 'MEGA200',
      restaurant: 'Premium Restaurants',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=300&h=200&fit=crop',
      validUntil: '2024-12-29',
      type: 'discount',
      category: 'daily'
    }
  ];

  const filteredOffers = activeTab === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === activeTab);

  const getOfferIcon = (type: string) => {
    switch (type) {
      case 'discount': return <Percent className="w-5 h-5" />;
      case 'cashback': return <CreditCard className="w-5 h-5" />;
      case 'bogo': return <Users className="w-5 h-5" />;
      case 'first-order': return <Star className="w-5 h-5" />;
      case 'free-delivery': return <Zap className="w-5 h-5" />;
      default: return <Gift className="w-5 h-5" />;
    }
  };

  const getOfferColor = (type: string) => {
    switch (type) {
      case 'discount': return 'from-red-500 to-pink-500';
      case 'cashback': return 'from-green-500 to-emerald-500';
      case 'bogo': return 'from-blue-500 to-cyan-500';
      case 'first-order': return 'from-yellow-500 to-orange-500';
      case 'free-delivery': return 'from-purple-500 to-indigo-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4" />
            <span>Special Offers</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Amazing
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Deals & Offers
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Save more on your favorite meals with our exclusive offers and deals
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Offer Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.restaurant}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getOfferColor(offer.type)} text-white px-3 py-1 rounded-full flex items-center space-x-1`}>
                  {getOfferIcon(offer.type)}
                  <span className="text-sm font-medium">{offer.type.replace('-', ' ').toUpperCase()}</span>
                </div>
              </div>

              {/* Offer Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {offer.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  Valid at: {offer.restaurant}
                </p>

                {/* Offer Code */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Use Code</p>
                      <p className="text-lg font-bold text-red-500">{offer.code}</p>
                    </div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
                      Copy
                    </button>
                  </div>
                </div>

                {/* Valid Until */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">🎉 Weekend Special!</h2>
            <p className="text-xl mb-6">
              Get flat 40% OFF on orders above ₹599 this weekend only!
            </p>
            <div className="bg-white/20 rounded-xl p-4 mb-6">
              <p className="text-sm mb-2">Use Code</p>
              <p className="text-2xl font-bold">WEEKEND40</p>
            </div>
            <button className="bg-white text-red-500 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Order Now & Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;