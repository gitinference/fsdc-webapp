import { useState } from "react";
import GraphComponent from "../components/GraphComponent";
function GraphPage() {
  // State to track the selected graph type
  const [selectedGraph, setSelectedGraph] = useState<"nutrition" | "security" | "food">("nutrition");
  const [selectedVar, setSelectedVar] = useState<string>("total_insec"); // Default for security graph
  const [qtr, setQtr] = useState<number>(1); // Default Qtr for food graph
  const [year, setYear] = useState<string>("2023"); // Allow any year input as a string

  const securityOptions = ["total_insec", "insecurity_hous"];
  const foodOptions = ["supermarkets_and_others", "supermarkets", "convenience_retailers", "whole_foods"];


  let graphEndpoint = "/graph/nutrition";
  let graphParams = undefined; // Default: no parameters

  if (selectedGraph === "security") {
    graphEndpoint = "/graph/security";
    graphParams = { year, var: selectedVar };
  } else if (selectedGraph === "food") {
    graphEndpoint = "/graph/food";
    graphParams = { var: selectedVar, year, qtr, title: "Food Data" };
  } else if (selectedGraph === "price") {
    graphEndpoint = "/graph/price";
    graphParams = undefined;

  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Gráfica de Datos</h1>

      {/* Buttons to toggle graphs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSelectedGraph("price")}
          className={`px-4 py-2 rounded ${selectedGraph === "price" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Price Graph
        </button>
        <button
          onClick={() => setSelectedGraph("nutrition")}
          className={`px-4 py-2 rounded ${selectedGraph === "nutrition" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Nutrition Graph
        </button>
        <button
          onClick={() => setSelectedGraph("security")}
          className={`px-4 py-2 rounded ${selectedGraph === "security" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Security Graph
        </button>
        <button
          onClick={() => setSelectedGraph("food")}
          className={`px-4 py-2 rounded ${selectedGraph === "food" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          Food Graph
        </button>
      </div>

      {/* Dropdown for selecting `var` when Security or Food Graph is selected */}
      {selectedGraph === "security" || selectedGraph === "food" ? (
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">
            Select Variable:
          </label>
          <select
            className="p-2 border rounded"
            value={selectedVar}
            onChange={(e) => setSelectedVar(e.target.value)}
          >
            {(selectedGraph === "security" ? securityOptions : foodOptions).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>




      ) : null}

      {/* Input for selecting `qtr` when Food Graph is selected */}
      {selectedGraph === "food" && (
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">
            Select Quarter (1-4):
          </label>
          <input
            type="number"
            className="p-2 border rounded w-20 text-center"
            min="1"
            max="4"
            value={qtr}
            onChange={(e) => setQtr(Number(e.target.value))}
          />
        </div>
      )}

      {/* Render the GraphComponent with selected graph and parameters */}
      <div className="w-full flex justify-center">
        <GraphComponent endpoint={graphEndpoint} params={graphParams} />
      </div>
    </div>
  );
}

export default GraphPage;
