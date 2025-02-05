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
  
    // Fetch questions
    useEffect(() => {
      fetch("/questions.json")
        .then((res) => res.json()) // Parse JSON
        .then((data) => setQuestions(data))     // Set questions
        .catch((error) => console.error("Error loading questions:", error)); 
    }, []);
  
    const handleChange = (questionId: string, answer: string, next?: string) => {
      setResponses((prev) => ({ ...prev, [questionId]: answer }));
  
      if (next) {
        const nextIndex = questions.findIndex((q) => q.id === next);
        if (nextIndex !== -1) setCurrentIndex(nextIndex);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const handleSubmit = () => {
      console.log("Respuestas enviadas:", responses);
      alert("¡Cuestionario completado! Revisa la consola para ver las respuestas.");
    };

  };
  
  export default Questionnaire;