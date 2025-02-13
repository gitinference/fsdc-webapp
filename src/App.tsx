import { useState } from "react";
import Questionnaire from "./components/Questionnaire";
import "./App.css";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      {!startQuiz ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Escala de Seguridad Alimentaria</h1>
          <h2 className="text-xl text-gray-700 mb-4">para Puerto Rico</h2>

          <p className="text-lg text-gray-600 mb-4">
            📝 Responda las siguientes preguntas sobre su seguridad alimentaria.
          </p>
          <p className="text-md text-gray-500 mb-6">
            📌 Lea cada pregunta y seleccione la opción que mejor refleje su situación.
          </p>

          <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-lg"
            onClick={() => setStartQuiz(true)}
          >
            Comenzar Cuestionario
          </button>
        </div>
      ) : (
        <Questionnaire />
      )}
    </div>
  );
}

export default App;
