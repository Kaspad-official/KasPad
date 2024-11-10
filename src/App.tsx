import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StakingPools from './pages/StakingPools';
import Documentation from './pages/Documentation';
import TierCalculator from './pages/TierCalculator';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking" element={<StakingPools />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/calculator" element={<TierCalculator />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;