import React from 'react';
import './App.css'
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header>
      <Header></Header>
      </header>
      <nav>
      <Nav></Nav>
      </nav>
    </div>
  );
}

export default App;
