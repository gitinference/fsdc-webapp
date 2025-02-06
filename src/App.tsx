import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Questionnaire from "./components/Questionaire.tsx";
import Header from "./components/Header";
import Title from "./components/Title";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
    <Header/>
    <Title/>
    <Footer/>
     <Questionnaire/>
    </div>
  )
}

export default App
