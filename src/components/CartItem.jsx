import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  console.log(item);

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center space-x-4">
        <img src={item.thumbnail || item.images?.[0]} alt={item.title} className="h-16 w-16 object-cover rounded" />
        <div>
          <h3 className="font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600">${item.price}</p>
        </div>
      </div>

      <button
         onClick={() => dispatch(removeFromCart(item.id))}
         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Remove
      </button> 
    </div>
  );
}

export default CartItem;