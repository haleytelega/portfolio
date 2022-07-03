import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav'

function App() {
  const [categories] = useState([
    { name: 'about me'},
    { name: 'portfolio'},
    { name: 'resume'}
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <header>
      <Header></Header>
      </header>
      <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
      ></Nav>
    </div>
  );
}

export default App;
