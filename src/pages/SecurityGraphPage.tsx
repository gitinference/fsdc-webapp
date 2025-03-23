import { useState } from "react";
import GraphComponent from "../components/GraphComponent";
function SecurityGraphPage() {

    const [selectedVar, setSelectedVar] = useState<string>("total_insec"); // Default for security graph
    const [year, setYear] = useState<string>("2023"); // Allow any year input as a string

    const securityOptions = ["total_insec", "insecurity_hous"];
    let graphParams = { year, var: selectedVar }


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
                    {(securityOptions).map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
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
                <GraphComponent endpoint={"/graph/security"} params={graphParams} />
            </div>
        </div>
    );
}

export default SecurityGraphPage;
