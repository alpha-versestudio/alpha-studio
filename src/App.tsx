import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Novels from './pages/Novels';
import Contact from './pages/Contact';
import Success from './pages/Success';
import BlueWolf from './pages/BlueWolf';
import Join from './pages/Join';
import Purchase from './pages/Purchase';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router basename="/alpha-studio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/blue-wolf" element={<BlueWolf />} />
          <Route path="/join" element={<Join />} />
          <Route path="/purchase/:type" element={<Purchase />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
