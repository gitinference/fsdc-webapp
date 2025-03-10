import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Questionnaire from "./components/Questionnaire";
import GraphPage from "./pages/GraphPage"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="w-full bg-gray-200 p-4 flex justify-center space-x-6 shadow-md">
          <Link to="/" className="text-blue-600 hover:underline text-lg">
            📋 Cuestionario
          </Link>
          <Link to="/graph" className="text-blue-600 hover:underline text-lg">
            📊 Ver Gráficas
          </Link>
        </nav>

        {/* Page Content */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Routes>
            <Route path="/" element={<Questionnaire />} />
            <Route path="/graph" element={<GraphPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
