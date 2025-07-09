import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;