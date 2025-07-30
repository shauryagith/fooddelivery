import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, HelpCircle, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Orders & Delivery',
      faqs: [
        {
          question: 'How can I track my order?',
          answer: 'You can track your order in real-time through our app or website. Once your order is confirmed, you\'ll receive a tracking link via SMS and email. You can also visit the "Track Order" section in your account.'
        },
        {
          question: 'What if my order is delayed?',
          answer: 'If your order is delayed beyond the estimated delivery time, please contact our customer support. We\'ll investigate the issue and provide you with updates. In case of significant delays, we may offer compensation or refunds.'
        },
        {
          question: 'Can I modify my order after placing it?',
          answer: 'You can modify your order within 2 minutes of placing it, provided the restaurant hasn\'t started preparing it. After that, modifications may not be possible. Contact customer support for assistance.'
        },
        {
          question: 'What are your delivery hours?',
          answer: 'We deliver 24/7 in most areas. However, restaurant availability may vary. Some restaurants may have specific operating hours. You can check restaurant timings on their profile page.'
        }
      ]
    },
    {
      title: 'Payments & Refunds',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit/debit cards, digital wallets (PayPal, Apple Pay, Google Pay), UPI, net banking, and cash on delivery in select areas.'
        },
        {
          question: 'How do refunds work?',
          answer: 'Refunds are processed within 5-7 business days to your original payment method. For cash on delivery orders, refunds are credited to your FoodieExpress wallet, which can be used for future orders.'
        },
        {
          question: 'Why was my payment declined?',
          answer: 'Payment declines can happen due to insufficient funds, incorrect card details, or bank security measures. Please check your payment information and try again, or contact your bank for assistance.'
        }
      ]
    },
    {
      title: 'Account & Profile',
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'You can create an account by clicking "Sign Up" on our homepage. You can register using your email, phone number, or social media accounts (Google, Facebook, Apple).'
        },
        {
          question: 'I forgot my password. How can I reset it?',
          answer: 'Click on "Forgot Password" on the login page and enter your registered email or phone number. You\'ll receive a reset link or OTP to create a new password.'
        },
        {
          question: 'How do I update my delivery address?',
          answer: 'Go to your profile settings and select "Manage Addresses". You can add, edit, or delete delivery addresses. Make sure to set your preferred address as default.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our support team',
      contact: '+1 (555) 123-4567',
      availability: '24/7 Available',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Start Chat',
      availability: '24/7 Available',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your queries',
      contact: 'support@foodieexpress.com',
      availability: 'Response within 24 hours',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Help Center</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How Can We
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help topics, orders, payments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 text-lg border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg"
            />
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {option.description}
                </p>
                <p className="text-red-500 font-semibold mb-2">
                  {option.contact}
                </p>
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{option.availability}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <ChevronRight className="w-6 h-6 text-red-500 mr-2" />
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isExpanded = expandedFaq === globalIndex;
                  
                  return (
                    <div
                      key={faqIndex}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {isExpanded && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
            <p className="text-xl mb-6">
              Our support team is here to assist you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-500 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="bg-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">
                Submit a Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;