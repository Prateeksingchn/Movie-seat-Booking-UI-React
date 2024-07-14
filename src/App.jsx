import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';

// Placeholder components for other pages
const NowShowing = () => <h2>Now Showing</h2>;
const ComingSoon = () => <h2>Coming Soon</h2>;
const AboutUs = () => <h2>About Us</h2>;

function App() {
  return (
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
  );
}

export default App;