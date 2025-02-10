import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoffeeQuestionnaire from './coffeeQuestionare';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <h1>Click below to find the coffee questionnaire</h1>
        <Router>
      <Routes>
        {/* Coffee Questionnaire Route */}
        <Route path="/coffee" element={<CoffeeQuestionnaire />} />
        
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", padding: "20px" }}>
              <h1>Vite + React</h1>
              <p>Click below to find the coffee questionnaire</p>
              <Link to="/coffee">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
        {/* <Route path="/coffeeQuestionare" element={<CoffeeQuestionnaire />} /> */}
      </div>
      

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
