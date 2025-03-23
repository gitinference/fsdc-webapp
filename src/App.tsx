import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Questionnaire from "./components/Questionnaire"
import "./App.css";
import NutritionGraphPage from "./pages/NutritionGraphPage";
import PriceGraphPage from "./pages/PriceGraphPage";
import SecurityGraphPage from "./pages/SecurityGraphPage";
import FoodGraphPage from "./pages/FoodGraphPage";
import MyPlateGraphPage from "./pages/MyPlateGraphPage";

function App() {
  return (
    <Router>
      <div className="h-auto w-auto flex flex-col">
        {/* Navigation Bar */}
        <nav className="w-full bg-gray-200 p-4 flex justify-center space-x-6 shadow-md">
          <Link to="/" className="text-blue-600 hover:underline text-lg">
            📋 Cuestionario
          </Link>
          <Link to="/graph/nutrition" className="text-blue-600 hover:underline text-lg">
            📊 Nutrition Graph
          </Link>
          <Link to="/graph/price" className="text-blue-600 hover:underline text-lg">
            📊 Price Graph
          </Link>
          <Link to="/graph/security" className="text-blue-600 hover:underline text-lg">
            📊 Security Graph
          </Link>
          <Link to="/graph/food" className="text-blue-600 hover:underline text-lg">
            📊 Food Graph
          </Link>
          <Link to="/graph/myplate" className="text-blue-600 hover:underline text-lg">
            📊 My Plate Graph
          </Link>
        </nav>

        {/* Page Content */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Routes>
            <Route path="/" element={<Questionnaire />} />
            <Route path="/graph/nutrition" element={<NutritionGraphPage />} />
            <Route path="/graph/price" element={<PriceGraphPage />} />
            <Route path="/graph/security" element={<SecurityGraphPage />} />
            <Route path="/graph/food" element={<FoodGraphPage />} />
            <Route path="/graph/myplate" element={<MyPlateGraphPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
