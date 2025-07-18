import ProductItem from "./ProductItem";
import useFetch from "../utils/UseFetch";
import { useState } from "react";

const ProductList = () => {

  //Fetch all products from API using a custom hook.
  const {data, loading, error} = useFetch("https://dummyjson.com/products");
  const [search, setSearch] = useState("");

  const filteredProducts = data?.filter(product => product.title.toLowerCase().includes(search.toLowerCase())
);

if (loading) return <p className="text-center mt-10 text-lg">Loading products...</p>;
if (error) return <p className="text-center mt-10 text-red-500">Failed to fetch products.</p>;

return (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 py-10 px-4">
    <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-8">Products</h2>

    <div className="max-w-xl mx-auto mb-8">
      <input
         type="text"
         placeholder="Search products..."
         className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
      {filteredProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  </div>
 );
}

export default ProductList;