import React from 'react';
import './App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <header>
      <Header></Header>
      </header>
      <nav>
      <Nav></Nav>
      </nav>
      <main>
      <About></About>
      </main>
    </div>
  );
}

export default App;
