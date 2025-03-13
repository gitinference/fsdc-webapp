import './App.css'
import CoffeeQuestionnaire from './coffeeQuestionare';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {

  return (
    <>
      {/* <h1>Presi</h1> */}

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
            <p>Presione el cuadro de abajo para trasladarse al cuestionario de café</p>
            <Link to="/coffee">
              <button style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                borderRadius: '5px',
              }}>
                Cuestionario de Café
              </button>
            </Link>
          </div>
        }
      />
    </Routes>
  </Router>
</div>

      
    </>
  )
}

export default App
