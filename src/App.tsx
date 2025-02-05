import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Questionnaire from "./components/Questionaire.tsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> Escala de seguridad alimentaria</h1>
     <Questionnaire/>
    </>
  )
}

export default App
