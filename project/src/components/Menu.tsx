import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import React from 'react';
import { useCart } from '../context/cartContext';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  isVegetarian: boolean;
  isAvailable: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Burger',
    price: 8.99,
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and special sauce',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80',
    category: 'Burgers',
    isVegetarian: true,
    isAvailable: true,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    price: 12.99,
    description: 'Fresh mozzarella, tomatoes, and basil on crispy crust',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80',
    category: 'Pizza',
    isVegetarian: true,
    isAvailable: true,
    rating: 4.8
  },
  {
    id: '3',
    name: 'Caesar Salad',
    price: 7.99,
    description: 'Crisp romaine lettuce, parmesan cheese, and homemade croutons',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80',
    category: 'Salads',
    isVegetarian: true,
    isAvailable: true,
    rating: 4.3
  },
  {
    id: '1',
    name: 'Classic Masala Dosa',
    description: 'Crispy rice crepe served with potato masala, coconut chutney, and sambar',
    price: 60,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',
    isVegetarian: true,
    isAvailable: true,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Butter Chicken Bowl',
    description: 'Tender chicken in rich tomato gravy served with butter naan',
    price: 180,
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    isVegetarian: false,
    isAvailable: true,
    rating: 0,
  },
  {
      id: '3',
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh tomatoes, mozzarella cheese, and basil',
      price: 250,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.8
    },
    {
      id: '4',
      name: 'Chicken Burger',
      description: 'Grilled chicken patty with lettuce, tomato, and mayo in a sesame bun',
      price: 150,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 4.5
    },
    {
      id: '5',
      name: 'Caesar Salad',
      description: 'Romaine lettuce with Caesar dressing, croutons, and Parmesan cheese',
      price: 120,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.3
    },
    {
      id: '6',
      name: 'Spaghetti Carbonara',
      description: 'Pasta with creamy sauce, pancetta, and Parmesan cheese',
      price: 200,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 4.7
    },
    {
      id: '7',
      name: 'Veggie Wrap',
      description: 'Whole wheat wrap filled with fresh vegetables and hummus',
      price: 100,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.2
    },
    {
      id: '8',
      name: 'Fish and Chips',
      description: 'Crispy battered fish served with fries and tartar sauce',
      price: 220,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 3.9
    },
    {
      id: '9',
      name: 'Paneer Tikka',
      description: 'Grilled paneer cubes marinated in spices, served with mint chutney',
      price: 150,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.6
    },
    {
      id: '10',
      name: 'Beef Steak',
      description: 'Juicy beef steak served with mashed potatoes and steamed vegetables',
      price: 300,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 4.9
    },
    {
      id: '11',
      name: 'Falafel Plate',
      description: 'Crispy falafel balls served with pita bread, hummus, and salad',
      price: 140,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.4
    },
    {
      id: '12',
      name: 'Chicken Shawarma',
      description: 'Marinated chicken wrapped in pita bread with garlic sauce and pickles',
      price: 160,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 4.7
    },
    {
      id: '13',
      name: 'Veggie Burger',
      description: 'Vegetable patty with lettuce, tomato, and mayo in a sesame bun',
      price: 130,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.2
    },
    {
      id: '14',
      name: 'Grilled Cheese Sandwich',
      description: 'Toasted sandwich with melted cheese and a side of fries',
      price: 90,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.0
    },
    {
      id: '15',
      name: 'Chicken Alfredo Pasta',
      description: 'Pasta with creamy Alfredo sauce and grilled chicken',
      price: 220,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 4.6
    },
    {
      id: '16',
      name: 'Greek Salad',
      description: 'Salad with cucumbers, tomatoes, olives, feta cheese, and olive oil',
      price: 110,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.3
    },
    {
      id: '17',
      name: 'Pepperoni Pizza',
      description: 'Pizza topped with pepperoni slices and mozzarella cheese',
      price: 270,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 4.9
    },
    {
      id: '18',
      name: 'Veggie Pasta',
      description: 'Pasta with mixed vegetables in a tomato-based sauce',
      price: 180,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.5
    },
    {
      id: '19',
      name: 'Chicken Nuggets',
      description: 'Crispy chicken nuggets served with a side of fries',
      price: 120,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 4.8
    },
    {
      id: '20',
      name: 'Mushroom Risotto',
      description: 'Creamy risotto with mushrooms and Parmesan cheese',
      price: 200,
      category: 'Continental',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4.5
    },
    {
      id: '21',
      name: 'BBQ Chicken Wings',
      description: 'Chicken wings coated in BBQ sauce, served with celery and ranch',
      price: 180,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 4
    },
    {
      id: '22',
      name: 'Egg Fried Rice',
      description: 'Stir-fried rice with eggs, vegetables, and soy sauce',
      price: 140,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: false,
      isAvailable: true,
      rating: 3.5
    },
    {
      id: '23',
      name: 'Veggie Quesadilla',
      description: 'Grilled tortilla filled with cheese and vegetables, served with salsa',
      price: 130,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',

      isVegetarian: true,
      isAvailable: true,
      rating: 4
    },
    {
      id: '24',
      name: 'Chicken Caesar Wrap',
      description: 'Grilled chicken, romaine lettuce, and Caesar dressing in a wrap',
      price: 150,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',
      isVegetarian: false,
      isAvailable: true,
      rating: 4.5
    },
];

const Menu = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          Our Menu
        </motion.h1>

        <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${item.price}</span>
                  <button
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                    className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Plus size={16} />
                    <span>Add to Cart</span>
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

export default Menu;