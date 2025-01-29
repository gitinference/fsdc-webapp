import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TitlePage from "./pages/TitlePage.tsx";

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
      </Routes>
   </Router>
  );
}

export default App;
