import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import NowShowing from './components/NowShowing';
import ComingSoon from './components/ComingSoon';
import AboutUs from './components/AboutUs';
import { MovieTicketProvider } from './context/MovieTicketContext';

// Placeholder components for other pages

function App() {
  return (
    <MovieTicketProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/now-showing" element={<NowShowing />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </MovieTicketProvider>
  );
}

export default App;