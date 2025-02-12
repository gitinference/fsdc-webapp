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
      <h1>Click below to find the coffee questionnaire</h1>

<div className="card" style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Ensures the content is centered vertically in the viewport
  padding: '20px'
}}>
  <Router>
    <Routes>
      {/* Coffee Questionnaire Route */}
      <Route path="/coffee" element={<CoffeeQuestionnaire />} />

      {/* Home Route */}
      <Route
        path="/"
        element={
          <div style={{ textAlign: 'center' }}>
            <p>Click below to find the coffee questionnaire</p>
            <Link to="/coffee">
              <button style={{
                backgroundColor: '#4CAF50', // You can customize the button style
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                borderRadius: '5px',
              }}>
                Go to Coffee Questionnaire
              </button>
            </Link>
          </div>
        }
      />
    </Routes>
  </Router>
</div>

      

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
