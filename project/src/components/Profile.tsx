import { motion } from 'framer-motion';
import { Bell, Clock, CreditCard, LogOut, MapPin, Settings, User } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  };

  const menuItems = [
    { icon: Clock, label: 'Order History' },
    { icon: MapPin, label: 'Saved Addresses' },
    { icon: CreditCard, label: 'Payment Methods' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Sign Out' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-32 bg-indigo-600">
              <div className="absolute -bottom-16 left-8">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800"
                  />
                  <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-1.5">
                    <User size={20} className="text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-20 px-8 pb-8">
              <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{user.email}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <item.icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;