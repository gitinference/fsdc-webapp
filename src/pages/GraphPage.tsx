import GraphComponent from "../components/GraphComponent";
function GraphPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Gráfica de Datos</h1>
      <div className="w-full flex justify-center">
        <GraphComponent endpoint="/graph/nutrition" />
      </div>
    </div>
  );
}

export default GraphPage;
