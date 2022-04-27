import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, Game } from './pages/';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:hashCode" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;