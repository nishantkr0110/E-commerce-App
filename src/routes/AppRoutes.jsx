import {Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";

//Lazy load components.

const ProductList = lazy(() => import("../components/ProductList"));
const ProductDetails = lazy(() => import("../components/ProductDetails"));
const Cart = lazy(() => import("../components/Cart"));
const NotFound = lazy(() => import("../components/NotFound"));
const Checkout = lazy(() => import("../components/Checkout"));

<Route path="/checkout" element={<Checkout />} />


function AppRoutes() {
  return (
    <Suspense fallback={<div className="text-center mt-10 text-lg text-gray-600">Loading page...</div>}>
       <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
       </Routes>
    </Suspense>
  );
}

export default AppRoutes;