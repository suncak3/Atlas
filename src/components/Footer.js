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
          <div className="footer-section">
            <h4>{language === 'ru' ? 'Компания' : 'Company'}</h4>
            <ul>
              <li><Link to="/about">{getText(language, 'nav.about')}</Link></li>
              <li><Link to="/services">{getText(language, 'nav.services')}</Link></li>
              <li><Link to="/advantages">{getText(language, 'nav.advantages')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{language === 'ru' ? 'Наши услуги' : 'Our Services'}</h4>
            <ul>
              <li><Link to="/services">{language === 'ru' ? 'Логистика и международные перевозки' : 'Logistics and International Transportation'}</Link></li>
              <li><Link to="/services">{language === 'ru' ? 'Таможенное оформление' : 'Customs Clearance'}</Link></li>
              <li><Link to="/services">{language === 'ru' ? 'Доставка "от двери до двери"' : 'Door-to-Door Delivery'}</Link></li>
              <li><Link to="/services">{language === 'ru' ? 'Перевозка специфических грузов' : 'Special Cargo Transportation'}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section footer-contact">
            <h4>{getText(language, 'contacts.title')}</h4>
            <p><i className="icon phone"></i> {getText(language, 'contacts.phone')}</p>
            <p><i className="icon email"></i> {getText(language, 'contacts.email')}</p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="icon linkedin"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="icon facebook"></i>
              </a>
            </div>
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