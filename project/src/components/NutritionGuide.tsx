import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import React from 'react';

const nutritionItems = [
  {
    id: '1',
    name: 'Classic Burger',
    calories: 650,
    protein: 35,
    carbs: 45,
    fat: 25,
    category: 'Burgers'
  },
  {
    id: '2',
    name: 'Caesar Salad',
    calories: 320,
    protein: 12,
    carbs: 15,
    fat: 8,
    category: 'Salads'
  }
];

const NutritionGuide = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredItems = nutritionItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || item.category === selectedCategory)
  );

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Nutrition Guide
        </motion.h1>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
            >
              <option value="All">All Categories</option>
              <option value="Burgers">Burgers</option>
              <option value="Salads">Salads</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4">{item.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Calories</div>
                  <div className="text-xl font-bold">{item.calories}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Protein</div>
                  <div className="text-xl font-bold">{item.protein}g</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Carbs</div>
                  <div className="text-xl font-bold">{item.carbs}g</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Fat</div>
                  <div className="text-xl font-bold">{item.fat}g</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionGuide;