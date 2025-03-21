import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../utils/LanguageContext';
import { getText } from '../utils/localization';
import '../styles/header.css';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo_blue.png" alt="Atlas Link Company" />
          </Link>
        </div>

        <div className="language-switcher desktop-only">
          <button onClick={toggleLanguage} className="language-btn">
            {language === 'ru' ? 'EN' : 'RU'}
          </button>
        </div>

        <div className="hamburger mobile-only" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className={isActive('/about')}>
              <Link to="/about" onClick={() => setMenuOpen(false)}>{getText(language, 'nav.about')}</Link>
            </li>
            <li className={isActive('/services')}>
              <Link to="/services" onClick={() => setMenuOpen(false)}>{getText(language, 'nav.services')}</Link>
            </li>
            <li className={isActive('/advantages')}>
              <Link to="/advantages" onClick={() => setMenuOpen(false)}>{getText(language, 'nav.advantages')}</Link>
            </li>
            <li className={isActive('/contacts')}>
              <Link to="/contacts" onClick={() => setMenuOpen(false)}>{getText(language, 'nav.contacts')}</Link>
            </li>
            <li className="mobile-only">
              <button onClick={toggleLanguage} className="language-btn mobile">
                {language === 'ru' ? 'EN' : 'RU'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;