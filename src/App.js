import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, Game, Error } from './pages/';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:hashCode" element={<Game />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;