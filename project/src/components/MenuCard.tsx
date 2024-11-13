import { Plus } from 'lucide-react';
import React from 'react';
import { MenuItem } from '../types';


interface MenuItemProps {
  //id: string;
 // name: string;
 // description: string;
 // price: number;
 // image: string;
item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}



export const MenuCard: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  const { id, name, description, price, image } = item;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart({ id, name, description, price, image, category: 'Lunch', isVegetarian: false, isAvailable: true, preparationTime: 10 })}
            className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition duration-300"
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
            <button
              onClick={() => onAddToCart({ id, name, description, price, image, category: 'Lunch', isVegetarian: false, isAvailable: true, preparationTime: 10 })}
              className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition duration-300"
            >
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
