const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-200 via-pink-200 to-yellow-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700">Oops! Page not found.</p>
      </div>
    </div>
  );
};

export default NotFound;
