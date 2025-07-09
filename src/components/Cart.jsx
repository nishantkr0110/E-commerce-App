import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-pink-100 p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your Cart is Empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="text-right mt-6">
            <p className="text-xl font-semibold text-purple-800">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
