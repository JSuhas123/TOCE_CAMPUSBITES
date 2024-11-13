export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Breakfast' | 'Lunch' | 'Snacks' | 'Beverages' | 'Fast Food' | 'Continental';
  image: string;
  isVegetarian: boolean;
  isAvailable: boolean;
  preparationTime: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'staff' | 'admin';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  status: 'pending' | 'preparing' | 'ready' | 'completed';
  total: number;
  createdAt: Date;
  userId: string;
}