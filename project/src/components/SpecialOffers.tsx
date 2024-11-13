import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';

const offers = [
  {
    id: '1',
    title: 'Early Bird Special',
    description: 'Get 20% off on all breakfast items between 8 AM - 10 AM',
    validUntil: '2024-04-01',
    code: 'EARLY20',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Lunch Combo Deal',
    description: 'Any main course + drink + dessert for just $12.99',
    validUntil: '2024-03-31',
    code: 'COMBO12',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80'
  }
];

const SpecialOffers = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Special Offers
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-white/80">
                      <Clock size={16} />
                      <span className="text-sm">Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Tag size={16} className="text-indigo-600 dark:text-indigo-400" />
                    <span className="font-mono text-sm">{offer.code}</span>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Claim Offer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;