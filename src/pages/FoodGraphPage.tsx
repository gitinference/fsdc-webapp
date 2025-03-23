import { useState } from "react";
import GraphComponent from "../components/GraphComponent";
function FoodGraphPage() {

    const [selectedVar, setSelectedVar] = useState<string>("supermarkets_and_others"); // Default for security graph
    const [qtr, setQtr] = useState<number>(1); // Default Qtr for food graph
    const [year, setYear] = useState<string>("2023"); // Allow any year input as a string

    const foodOptions = ["supermarkets_and_others", "supermarkets", "convenience_retailers", "whole_foods"];


    let graphParams = { var: selectedVar, year, qtr, title: "Food Data" };


    return (
        <div className="flex flex-col justify-center items-center p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">📊 Gráfica de Datos</h1>

            {/* Dropdown for selecting `var` when Security or Food Graph is selected */}
            <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">
                    Select Variable:
                </label>
                <select
                    className="p-2 border rounded"
                    value={selectedVar}
                    onChange={(e) => setSelectedVar(e.target.value)}
                >
                    {(foodOptions).map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {/* Input for selecting `qtr` when Food Graph is selected */}
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

            {/* Input for selecting `year` */}
            <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">
                    Select Year:
                </label>
                <input
                    type="number"
                    className="p-2 border rounded w-20 text-center"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>


            {/* Render the GraphComponent with selected graph and parameters */}
            <div className="w-full flex justify-center">
                <GraphComponent endpoint={"/graph/food"} params={graphParams} />
            </div>
        </div>
    );
}

export default FoodGraphPage;
