import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading product details...</div>
  }

  if (error || !product) {
    return <div className="text-center mt-10 text-red-600">Product not found!</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
         <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-80 object-cover rounded-md"
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple-700 mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600 mb-4">${product.price}</p>

            <button
                onClick={() => dispatch(addToCart(product))}
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 w-fit">
                  Add to Cart
                </button>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
