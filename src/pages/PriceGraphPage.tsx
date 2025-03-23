import { useState } from "react";
import GraphComponent from "../components/GraphComponent";
function PriceGraphPage() {


    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center p-6">
            <h1 className="text-3xl font-bold mb-6">📊 Gráfica de Datos</h1>

            {/* Render the GraphComponent with selected graph and parameters */}
            <div className="w-full flex justify-center">
                <GraphComponent endpoint={'/graph/price'} params={undefined} />
            </div>
        </div>
    );
}

export default PriceGraphPage;
