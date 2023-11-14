import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage"
import Ask from "./pages/AskMe/ask"
import Error from "./pages/Error/error"
import About from './pages/about/about';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="ask" element={<Ask />} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App