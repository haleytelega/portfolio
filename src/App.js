import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About'
import Project from './components/Project';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<About />} 
              />
              <Route 
                path="/Portfolio" 
                element={<Project />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
