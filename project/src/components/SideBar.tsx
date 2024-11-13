import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const favoriteFoodItems = [
  { id: 1, name: 'Pizza', image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Burger', image: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Sushi', image: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Pasta', image: 'https://via.placeholder.com/100' },
  { id: 5, name: 'Salad', image: 'https://via.placeholder.com/100' },
  { id: 6, name: 'Tacos', image: 'https://via.placeholder.com/100' },
  { id: 7, name: 'Steak', image: 'https://via.placeholder.com/100' },
  { id: 8, name: 'Ice Cream', image: 'https://via.placeholder.com/100' },
  { id: 9, name: 'Fries', image: 'https://via.placeholder.com/100' },
  { id: 10, name: 'Sandwich', image: 'https://via.placeholder.com/100' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <button
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onClose();
            }
          }}
        />
      )}

     {/* Sidebar */}
     <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col justify-center items-center h-full p-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Menu</h2>
          <nav>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Home</a></li>
              <li><a href="/menu" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Menu</a></li>
              <li><a href="/offers" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Offers</a></li>
              <li><a href="/careers" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Careers</a></li>
              <li><a href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Favorites</h3>
            <div className="flex overflow-x-auto space-x-4">
              {favoriteFoodItems.map(item => (
                <div key={item.id} className="flex-shrink-0 w-24">
                  <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-md" />
                  <p className="text-center text-gray-800 dark:text-gray-200 mt-2">{item.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};