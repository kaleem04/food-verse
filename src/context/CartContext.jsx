import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(' pkr', ''));
      return total + price;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart ,getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}; 