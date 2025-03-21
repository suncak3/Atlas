import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Advantages from './pages/Advantages';
import Contacts from './pages/Contacts';
import { LanguageContext } from './utils/LanguageContext';

function App() {
  const [language, setLanguage] = useState('ru'); // Default language is Russian

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/advantages" element={<Advantages />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;