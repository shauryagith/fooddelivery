import React from 'react';
import { MapPin, Search, ShoppingCart, Truck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MapPin,
      title: 'Set Your Location',
      description: 'Enter your delivery address to see restaurants nearby',
      color: 'from-red-500 to-pink-500',
      step: '01'
    },
    {
      icon: Search,
      title: 'Browse & Choose',
      description: 'Explore menus from hundreds of local restaurants',
      color: 'from-orange-500 to-yellow-500',
      step: '02'
    },
    {
      icon: ShoppingCart,
      title: 'Add to Cart',
      description: 'Select your favorite dishes and customize as needed',
      color: 'from-green-500 to-emerald-500',
      step: '03'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Sit back and relax while we deliver hot food to your door',
      color: 'from-blue-500 to-cyan-500',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Truck className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting your favorite food delivered is as easy as 1, 2, 3, 4. Here's how simple it is.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 via-green-500 to-blue-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Ordering Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;