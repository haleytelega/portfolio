import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About'
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  const [categories] = useState([
    { name: 'About Me'},
    { name: 'portfolio'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const dir = {
    name: 'contact',
    componenet:' Contact'
  }
  return (
    <div className="App">
      <header>
      <Header></Header>
      </header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
          ) : (
            <Contact></Contact>
          )}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
