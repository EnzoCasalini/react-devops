import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ApiData from './ApiData';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="/test" element={<ApiData />} />
      </Routes>
    </Router>
  );
}

export default App;