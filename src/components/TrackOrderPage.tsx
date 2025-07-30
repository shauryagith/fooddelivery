import React, { useState } from 'react';
import { Search, MapPin, Clock, CheckCircle, Truck, ChefHat, Package, Phone, MessageCircle } from 'lucide-react';

const TrackOrderPage: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  // Mock order data
  const orderData = {
    orderNumber: 'FE123456789',
    status: 'out_for_delivery',
    estimatedTime: '15-20 min',
    restaurant: {
      name: "Mario's Pizza Palace",
      phone: '+1 (555) 123-4567',
      address: '123 Food Street, New York'
    },
    delivery: {
      address: '456 Home Avenue, Apt 2B, New York',
      driver: {
        name: 'John Smith',
        phone: '+1 (555) 987-6543',
        rating: 4.8
      }
    },
    items: [
      { name: 'Margherita Pizza (Large)', quantity: 1, price: 18.99 },
      { name: 'Garlic Bread', quantity: 2, price: 6.99 },
      { name: 'Coca Cola (500ml)', quantity: 2, price: 3.99 }
    ],
    timeline: [
      {
        status: 'confirmed',
        title: 'Order Confirmed',
        description: 'Your order has been confirmed by the restaurant',
        time: '2:30 PM',
        completed: true
      },
      {
        status: 'preparing',
        title: 'Preparing Your Food',
        description: 'The restaurant is preparing your delicious meal',
        time: '2:35 PM',
        completed: true
      },
      {
        status: 'ready',
        title: 'Order Ready',
        description: 'Your order is ready and waiting for pickup',
        time: '2:50 PM',
        completed: true
      },
      {
        status: 'picked_up',
        title: 'Out for Delivery',
        description: 'Your order is on its way to you',
        time: '2:55 PM',
        completed: true
      },
      {
        status: 'delivered',
        title: 'Delivered',
        description: 'Enjoy your meal!',
        time: 'Expected: 3:15 PM',
        completed: false
      }
    ]
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      setIsTracking(true);
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    const iconClass = `w-6 h-6 ${completed ? 'text-green-500' : 'text-gray-400'}`;
    
    switch (status) {
      case 'confirmed':
        return <CheckCircle className={iconClass} />;
      case 'preparing':
        return <ChefHat className={iconClass} />;
      case 'ready':
        return <Package className={iconClass} />;
      case 'picked_up':
        return <Truck className={iconClass} />;
      case 'delivered':
        return <MapPin className={iconClass} />;
      default:
        return <Clock className={iconClass} />;
    }
  };

  if (!isTracking) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <span>Order Tracking</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Track Your
              <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Order
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Enter your order number to track your delivery in real-time
            </p>
          </div>

          {/* Track Order Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={handleTrackOrder} className="space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your order number (e.g., FE123456789)"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 text-lg border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Track Order
              </button>
            </form>
          </div>

          {/* Demo Button */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Don't have an order number? Try our demo:
            </p>
            <button
              onClick={() => {
                setOrderNumber('FE123456789');
                setIsTracking(true);
              }}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              View Demo Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Order #{orderData.orderNumber}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Estimated delivery: {orderData.estimatedTime}
            </p>
          </div>
          <button
            onClick={() => setIsTracking(false)}
            className="mt-4 lg:mt-0 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Track Another Order
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Order Status
              </h2>
              
              <div className="space-y-6">
                {orderData.timeline.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-green-100 dark:bg-green-900/30' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      {getStatusIcon(step.status, step.completed)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold ${
                          step.completed 
                            ? 'text-gray-900 dark:text-white' 
                            : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {step.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Map Placeholder */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Live Tracking
              </h2>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">Live Map View</p>
                  <p className="text-sm text-gray-400">Your delivery is on the way!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details Sidebar */}
          <div className="space-y-6">
            {/* Delivery Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Delivery Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Delivering to:</p>
                  <p className="text-gray-900 dark:text-white">{orderData.delivery.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Delivery Partner:</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {orderData.delivery.driver.name}
                      </p>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {orderData.delivery.driver.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Restaurant Details
              </h3>
              <div className="space-y-3">
                <p className="font-medium text-gray-900 dark:text-white">
                  {orderData.restaurant.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {orderData.restaurant.address}
                </p>
                <button className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{orderData.restaurant.phone}</span>
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h3>
              <div className="space-y-3">
                {orderData.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-900 dark:text-white text-sm">
                        {item.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      ${item.price}
                    </p>
                  </div>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-red-500">
                      ${orderData.items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;