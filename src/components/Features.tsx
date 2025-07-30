import React from 'react';
import { Clock, Shield, MapPin, Star, Truck, CreditCard } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Lightning Fast Delivery',
      description: 'Get your favorite meals delivered in under 30 minutes with our express delivery network.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Contactless delivery and secure payment options ensure your safety and peace of mind.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your order in real-time from preparation to your doorstep with live GPS tracking.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'All our partner restaurants are carefully vetted to ensure the highest quality standards.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Truck,
      title: '24/7 Availability',
      description: 'Hungry at any hour? We deliver round the clock to satisfy your cravings anytime.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payments',
      description: 'Multiple payment options including cards, digital wallets, and cash on delivery.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Built for Your
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Convenience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've designed every aspect of our service to make food delivery fast, reliable, and enjoyable for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1M+</div>
              <div className="text-red-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50K+</div>
              <div className="text-red-100">Restaurant Partners</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100+</div>
              <div className="text-red-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-red-100">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;