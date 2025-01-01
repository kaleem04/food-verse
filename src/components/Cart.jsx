import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart,getTotalPrice} = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <p>{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        
      )}
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Total: {getTotalPrice()} pkr</h2>
          </div>
    </div>
  );
};

export default Cart;