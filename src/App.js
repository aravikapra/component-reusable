import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Layouts/Dashboard';
import LandingPage from './Layouts/LandingPage';
import Penjualan from './Pages/Penjualan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/penjualan" element={<Penjualan />}/>
      </Routes>
    </Router>
  );
}

export default App;
