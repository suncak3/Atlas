import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../utils/LanguageContext';
import { getText } from '../utils/localization';
import '../styles/footer.css';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src="/assets/logo_blue.png" alt="Atlas Link Company" />
            </Link>
          </div>
          
          <div className="footer-nav">
            <h4>{getText(language, 'nav.about')}</h4>
            <ul>
              <li><Link to="/about">{getText(language, 'nav.about')}</Link></li>
              <li><Link to="/services">{getText(language, 'nav.services')}</Link></li>
              <li><Link to="/advantages">{getText(language, 'nav.advantages')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>{getText(language, 'contacts.title')}</h4>
            <p><i className="icon phone"></i> {getText(language, 'contacts.phone')}</p>
            <p><i className="icon email"></i> {getText(language, 'contacts.email')}</p>
            <p><i className="icon email"></i> {getText(language, 'contacts.logistEmail')}</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Atlas Link Company. {language === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;