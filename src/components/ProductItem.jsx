import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 duration-300 transform">
      <img 
         src={product.thumbnail}
         alt={product.title}
         className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
        <p className="text-gray-500 mb-2">${product.price}</p>

        <div className="flex justify-between mt-4">
          <Link
             to={`/product/${product.id}`}
             className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
              View Details
          </Link>
          <button
             onClick={() => dispatch(addToCart(product))}
             className="bg-purple-600 text-white text-sm px-3 py-1 rounded hover:bg-purple-700">
              Add to Cart
             </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductItem);