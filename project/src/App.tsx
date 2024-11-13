import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import { MenuCard } from './components/MenuCard';
import Navbar from './components/Navbar';
//import { CartProvider } from './context/cartContext';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import NutritionGuide from './components/NutritionGuide';
import PaymentModal from './components/PaymentModal';
import Profile from './components/Profile';
import { Sidebar } from './components/SideBar';
import SpecialOffers from './components/SpecialOffers';
import type { MenuItem } from './types';
//import * as OrderUtils from './Utils/OrderUtils';
const SAMPLE_MENU_ITEMS: MenuItem[] = [
 /*
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
    {
      id: '25',
      name: 'Vegetable Stir Fry',
      description: 'Mixed vegetables stir-fried with soy sauce and served with rice',
      price: 160,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',
      isVegetarian: true,
      isAvailable: true,
      preparationTime: 15
    },
    {
      id: '26',
      name: 'Beef Tacos',
      description: 'Soft tacos filled with seasoned beef, lettuce, cheese, and salsa',
      price: 180,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',
      isVegetarian: false,
      isAvailable: true,
      preparationTime: 10
    },
    {
      id: '27',
      name: 'Tomato Basil Soup',
      description: 'Creamy tomato soup with fresh basil, served with a side of bread',
      price: 90,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',
      isVegetarian: true,
      isAvailable: true,
      preparationTime: 10
    },
    {
      id: '28',
      name: 'Chicken Biryani',
      description: 'Spiced rice with chicken, served with raita and salad',
      price: 200,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',
      isVegetarian: false,
      isAvailable: true,
      preparationTime: 30
    },
    {
      id: '29',
      name: 'Veggie Spring Rolls',
      description: 'Crispy spring rolls filled with vegetables, served with sweet chili sauce',
      price: 100,
      category: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',
      isVegetarian: true,
      isAvailable: true,
      rating: 4
    },*/
    {
      id: '30',
      name: 'Grilled Salmon',
      description: 'Grilled salmon fillet served with lemon butter sauce and vegetables',
      price: 300,
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=800',
      isVegetarian: false,
      isAvailable: true,
      preparationTime: 25
    },
    {
      id: '31',
      name: 'Masala Chai',
      description: 'Traditional Indian spiced tea with milk',
      price: 20,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&q=80&w=800',
      isVegetarian: true,
      isAvailable: true,
      preparationTime: 5
    }
];

function App() {
  const [menuItems] = useState<MenuItem[]>(SAMPLE_MENU_ITEMS);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddToCart = (item: MenuItem) => {
    console.log('Added to cart:', item);
    // TODO: Implement cart functionality
  };

  return (
    <Router>
    <Navbar toggleSidebar={toggleSidebar} cartCount={0} />
    <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    <main className="max-w-7xl mx-auto px-4 pt-20 pb-16 flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/nutrition-guide" element={<NutritionGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<PaymentModal isOpen={true} onClose={() => {}} amount={0} onSuccess={() => {}} />} />
      { /* <Route path="/OrderUtils" element={<OrderUtils />} />*/}
        <Route path="/menu-card" element={
          <div className="menu">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems.map(item => (
                    <MenuCard key={item.id} item={item} onAddToCart={() => handleAddToCart(item)} />
                  ))}
                </div>
              </div>
            } />
            <Route path="/login" element={<Login />} />

          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;