import React, { createContext, useContext, useState } from 'react';
//import { generateOrderId } from '../Utils/OrderUtils';'

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Coupon {
  code: string;
  discount: number;
  validUntil: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  applyCoupon: (code: string) => boolean;
  clearCart: () => void;
  subtotal: number;
  discount: number;
  total: number;
  activeCoupon: Coupon | null;
}

const VALID_COUPONS: Coupon[] = [
  { code: 'EARLY20', discount: 0.20, validUntil: '2024-04-01' },
  { code: 'COMBO12', discount: 0.15, validUntil: '2024-03-31' },
];

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  applyCoupon: () => false,
  clearCart: () => {},
  subtotal: 0,
  discount: 0,
  total: 0,
  activeCoupon: null,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeCoupon, setActiveCoupon] = useState<Coupon | null>(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = activeCoupon ? subtotal * activeCoupon.discount : 0;
  const total = subtotal - discount;

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const applyCoupon = (code: string) => {
    const coupon = VALID_COUPONS.find(
      (c) => c.code === code && new Date(c.validUntil) > new Date()
    );
    
    if (coupon) {
      setActiveCoupon(coupon);
      return true;
    }
    return false;
  };

  const clearCart = () => {
    setCartItems([]);
    setActiveCoupon(null);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity,
        applyCoupon,
        clearCart,
        subtotal,
        discount,
        total,
        activeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);