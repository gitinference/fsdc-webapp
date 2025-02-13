import React, { useState, useEffect } from "react";

interface Question {
  id: string;
  question: string;
  type: string;
  options?: Array<string | { value: string; next?: string }>;
}

const Questionnaire: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cargar preguntas desde JSON
  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error cargando preguntas:", error));
  }, []);

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

  // Manejo de validación para que el usuario no avance sin responder
  const handleNext = () => {
    const currentQuestion = questions[currentIndex];
    if (!responses[currentQuestion.id]) {
      alert("Debes seleccionar una opción antes de continuar.");
      return;
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Mensaje de carga mientras se obtiene el JSON
  if (!questions.length) return <p className="text-center text-lg">Cargando preguntas...</p>;

  // Si ya no hay más preguntas, mostrar mensaje de finalización
  if (currentIndex >= questions.length) {
    return (
      <div>
        <h2>¡Cuestionario Completado!</h2>
        <button onClick={() => console.log("Respuestas enviadas:", responses)}>
          Enviar Respuestas
        </button>
      </div>
    );
  }

  const question = questions[currentIndex];

  return (
    <div>
      <h2>{question.question}</h2>
      {question.type === "radio" &&
        question.options?.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const next = typeof option === "object" ? option.next : undefined;

          return (
            <label key={value}>
              <input
                type="radio"
                name={question.id}
                value={value}
                onChange={() => handleChange(question.id, value, next)}
              />
              {value}
            </label>
          );
        })}

      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Questionnaire;
