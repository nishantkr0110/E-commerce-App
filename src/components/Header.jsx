// Github link - https://github.com/nishantkr0110/E-commerce-App.git

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300 duration-300">
        ShoppyGlobe
        </Link>

        <nav className="flex items-center space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-200 duration-200">Home</Link>
          <Link to="/cart" className="relative hover:text-yellow-200 duration-200 flex items-center">
          <ShoppingCart className="h-6 w-6 mr-1"/>
          <span className="bg-yellow-300 text-black font-semibold text-sm px-2 rounded-full">
            {cartItems.length}
          </span>
         </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;