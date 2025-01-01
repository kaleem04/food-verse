import React from 'react';
import { useParams } from 'react-router-dom';
import {data} from '../data/data.js';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));
  const {addToCart} = useContext(CartContext)


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
    <h1 className="text-4xl font-bold text-center my-4 p-6">{product.name}</h1>
    <div className="flex justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover max-w-md rounded-lg shadow-lg "
      />
    </div>
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <p className="text-lg">{product.longDescription}</p>
      <p className="text-2xl font-bold mt-4">Price: {product.price}</p>
      <div className="p-4">
              <button
                onClick={() => addToCart(product)}
                className="m-1 w-80 h-10 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                Add to Cart
              </button>
            </div>
    </div>
    
  </div>
  );
};

export default ProductDetails;