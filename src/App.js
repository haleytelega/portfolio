import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About'

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio'
    },
    { name: 'Resume'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <header>
      <Header></Header>
      </header>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>
      <main>
      <About></About>
      </main>
    </div>
  );
}

export default App;
