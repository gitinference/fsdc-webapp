import React, { useState, useEffect } from "react";

interface Question {
  id: string;
  question: string;
  type: string;
  options?: Array<string | { value: string; next?: string }>;
}

const Questionnaire: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<{ [key: string]: string }>(
    JSON.parse(localStorage.getItem("responses") || "{}")
  );
  const [currentIndex, setCurrentIndex] = useState(
    Number(localStorage.getItem("currentIndex")) || 0
  );

  // Cargar preguntas desde JSON
  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error cargando preguntas:", error));
  }, []);

    // Guardar respuestas y progreso en localStorage
    useEffect(() => {
      localStorage.setItem("responses", JSON.stringify(responses));
      localStorage.setItem("currentIndex", currentIndex.toString());
    }, [responses, currentIndex]);

  // Manejo de respuestas
  const handleChange = (questionId: string, answer: string, next?: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: answer }));

    if (next) {
      const nextIndex = questions.findIndex((q) => q.id === next);
      if (nextIndex !== -1) {
        setCurrentIndex(nextIndex);
        return;
      }
    }

    // Si no hay "next", pasa a la siguiente pregunta
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Mensaje de carga mientras se obtiene el JSON
  if (!questions.length) return <p className="text-center text-lg">Cargando preguntas...</p>;


    // Si el usuario completó todas las preguntas, mostrar mensaje de finalización
    if (currentIndex >= questions.length) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-2xl font-bold mb-4">✅ ¡Cuestionario Completado!</h2>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
            onClick={() => {
              console.log("Respuestas enviadas:", responses);
              localStorage.removeItem("responses"); // Limpiar localStorage al finalizar
              localStorage.removeItem("currentIndex");
            }}
          >
            Enviar Respuestas
          </button>
        </div>
      );
    }

  const question = questions[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      {/* Barra de progreso */}
      <div className="w-full max-w-lg bg-gray-200 rounded-full h-2 mt-4 mb-6">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Pregunta actual */}
      <h2 className="text-2xl font-bold text-center mb-4">{question.question}</h2>

      {/* Opciones de respuesta */}
      {question.type === "radio" &&
        question.options?.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const next = typeof option === "object" ? option.next : undefined;

          return (
            <label
              key={value}
              className="block w-full max-w-md text-left bg-gray-100 hover:bg-gray-200 rounded-lg p-3 mb-2 cursor-pointer"
            >
              <input
                type="radio"
                name={`question-${question.id}`} 
                value={value}
                checked={responses[question.id] === value}
                className="mr-2"
                onChange={() => handleChange(question.id, value, next)}
              />
              {value}
            </label>
          );
        })}

     
    </div>
  );
};

export default Questionnaire;
