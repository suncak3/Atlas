import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../utils/LanguageContext';
import { getText } from '../utils/localization';
import '../styles/Home.css'
import WorldMap from "../components/WorldMap";
import '../styles/services.css'

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-first">
          <div className="hero-content">
            <h1>{getText(language, 'home.hero.title')}</h1>
            <p className="hero-subtitle">{getText(language, 'home.hero.subtitle')}</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">{getText(language, 'nav.services')}</Link>
              <Link to="/contacts" className="btn btn-secondary">{getText(language, 'nav.contacts')}</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://i.postimg.cc/Fzh9SG1z/image-removebg-preview-33.png" alt="Logistics Truck" className="truck-img" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section section-blue">
        <div className="container-second">
          <div className="section-heading text-center">
            <h2>{getText(language, 'home.experience.title')}</h2>
            <p>{getText(language, 'home.experience.subtitle')}</p>
          </div>
          <div className="second-block">
            <div className="text-box">
              <div className="mission-box">
                <div className="mission-icon">
                  <img src="/assets/Goal.png" alt="Mission"/>
                </div>
                <div className="mission-content">
                  <div className="text-mission-content">{getText(language, 'home.mission.title')}</div>
                  <p>{getText(language, 'home.mission.text')}</p>
                </div>
              </div>
              <div className="cooperation-box">
                <div className="cooperation-content">
                  <div className="text-mission-content">{getText(language, 'home.cooperation.title')}</div>
                  <p className="companies">{getText(language, 'home.cooperation.companies')}</p>
                </div>
                <div className="cooperation-icon">
                  <img src="/assets/Handshake.png" alt="Cooperation"/>
                </div>
              </div>
            </div>
            <div className="train-image">
            </div>
          </div>

        </div>
      </section>

      {/* Materials Section */}
      <section className="materials-section section-dark">
        <div className="container-services">
          <div className="section-heading text-center">
            <h2>{getText(language, 'home.materials.title')}</h2>
            <p>{getText(language, 'home.materials.subtitle')}</p>
          </div>

          <div className="service-features">
            <div className="feature">
              <div className="feature-icon">
                <img src="https://i.postimg.cc/pVc7zqmS/Oil-Industry.png" alt="Oil Industry"/>
              </div>
              <h4>{getText(language, 'cargo.understanding.title')}</h4>
            </div>

            <div className="feature">
            <div className="feature-icon">
                <img src="https://i.postimg.cc/zBPPqStn/Truck.png" alt="Large Cargo" />
              </div>
              <h4>{getText(language, 'cargo.delivery.title')}</h4>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="https://i.postimg.cc/vmZJMB8w/Quality.png" alt="Quality Standards" />
              </div>
              <h4>{getText(language, 'cargo.standards.title')}</h4>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="https://i.postimg.cc/fyTxYJPb/Control.png" alt="Cargo Control" />
              </div>
              <h4>{getText(language, 'cargo.control.title')}</h4>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="https://i.postimg.cc/BbkXtb9k/Optimization.png" alt="Optimization" />
              </div>
              <h4>{getText(language, 'cargo.optimization.title')}</h4>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <img src="https://i.postimg.cc/DwVSTScb/Solutions.png" alt="Solutions" />
              </div>
              <h4>{getText(language, 'cargo.solutions.title')}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="geography-section">
          <div className="section-heading text-center">
            <h2>{getText(language, 'geography.title')}</h2>
          </div>
          <WorldMap/>
          {/*<div className="world-map">*/}
          {/*  <div className="map-overlay">*/}
          {/*    <div className="map-point europe">*/}
          {/*      <span className="point-label">{getText(language, 'geography.regions.europe')}</span>*/}
          {/*    </div>*/}
          {/*    <div className="map-point asia">*/}
          {/*      <span className="point-label">{getText(language, 'geography.regions.asia')}</span>*/}
          {/*    </div>*/}
          {/*    <div className="map-point america">*/}
          {/*      <span className="point-label">{getText(language, 'geography.regions.america')}</span>*/}
          {/*    </div>*/}
          {/*    <div className="map-point australia">*/}
          {/*      <span className="point-label">{getText(language, 'geography.regions.australia')}</span>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="geography-features">*/}
          {/*  <div className="geo-feature">*/}
          {/*    <div className="geo-icon">*/}
          {/*      <img src="/assets/transport-icon.png" alt="Transport Types" />*/}
          {/*    </div>*/}
          {/*    <div className="geo-content">*/}
          {/*      <h4>{getText(language, 'geography.transport.title')}</h4>*/}
          {/*      <p>{getText(language, 'geography.transport.types')}</p>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="geo-feature">*/}
          {/*    <div className="geo-icon">*/}
          {/*      <img src="/assets/door-to-door-icon.png" alt="Door to Door" />*/}
          {/*    </div>*/}
          {/*    <div className="geo-content">*/}
          {/*      <h4>{getText(language, 'geography.doorToDoor.title')}</h4>*/}
          {/*      <p>{getText(language, 'geography.doorToDoor.control')}</p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
      </section>

      {/* Services Preview Section */}
      <section className="services-preview-section section-dark">
          <div className="section-heading text-center">
            <h2>{getText(language, 'services.title')}</h2>
          </div>
          
          <div className="services-grid">
            <div className="service-card div2">
              <div className="service-content">
                <h3>{getText(language, 'services.logistics.title')}</h3>
                <Link to="/services" className="service-link">{language === 'ru' ? 'Подробнее' : 'Learn More'}</Link>
              </div>
            </div>
            
            <div className="service-card div4">
              <div className="service-content">
                <h3>{getText(language, 'services.customs.title')}</h3>
                <Link to="/services" className="service-link">{language === 'ru' ? 'Подробнее' : 'Learn More'}</Link>
              </div>
            </div>
            
            <div className="service-card div3">
              <div className="service-content">
                <h3>{getText(language, 'services.delivery.title')}</h3>
                <Link to="/services" className="service-link">{language === 'ru' ? 'Подробнее' : 'Learn More'}</Link>
              </div>
            </div>
            
            <div className="service-card div5">
              <div className="service-content">
                <h3>{getText(language, 'services.specialCargo.title')}</h3>
                <Link to="/services" className="service-link">{language === 'ru' ? 'Подробнее' : 'Learn More'}</Link>
              </div>
            </div>

            <div className="service-card div1">
              <div className="service-content">
                <div className="service-content-text">
                  <h3>{getText(language, 'services.documentation.title')}</h3>
                  <Link to="/services" className="service-link">{language === 'ru' ? 'Подробнее' : 'Learn More'}</Link>
                </div>
              </div>
            </div>
          </div>
      </section>


      {/* Advantages Preview Section */}
      <section className="advantages-preview-section section-blue">
          <div className="section-heading text-center">
            <h2>{getText(language, 'advantages.title')}</h2>
          </div>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-number">01</div>
              <h3>{getText(language, 'advantages.reasons.experience.title')}</h3>
              <p>{getText(language, 'advantages.reasons.experience.text')}</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-number">02</div>
              <h3>{getText(language, 'advantages.reasons.approach.title')}</h3>
              <p>{getText(language, 'advantages.reasons.approach.text')}</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-number">03</div>
              <h3>{getText(language, 'advantages.reasons.reliability.title')}</h3>
              <p>{getText(language, 'advantages.reasons.reliability.text')}</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-number">04</div>
              <h3>{getText(language, 'advantages.reasons.financialTerms.title')}</h3>
              <p>{getText(language, 'advantages.reasons.financialTerms.text')}</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-number">05</div>
              <h3>{getText(language, 'advantages.reasons.trust.title')}</h3>
              <p>{getText(language, 'advantages.reasons.trust.text')}</p>
            </div>

            <div className="advantage-card">
              <div className="advantage-number">06</div>
              <h3>{getText(language, 'advantages.reasons.transparency.title')}</h3>
              <p>{getText(language, 'advantages.reasons.transparency.text')}</p>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/advantages" className="btn btn-primary">{language === 'ru' ? 'Все преимущества' : 'All Advantages'}</Link>
          </div>
      </section>

      {/* Contact Preview Section */}
      <section className="contact-preview-section">
          <div className="contact-preview-content">
            <div className="contact-preview-text">
              <h2>{getText(language, 'contacts.title')}</h2>
              <div className="contact-info">
                <p><i className="icon phone"></i> {getText(language, 'contacts.phone')}</p>
                <p><i className="icon email"></i> {getText(language, 'contacts.email')}</p>
                <p><i className="icon email"></i> {getText(language, 'contacts.logistEmail')}</p>
              </div>
              <Link to="/contacts" className="btn btn-primary mt-3">{language === 'ru' ? 'Связаться с нами' : 'Contact Us'}</Link>
            </div>
            <div className="contact-preview-image">
              <img src="/assets/logo_black.jpg" alt="Contact Us" />
            </div>
          </div>
      </section>
    </div>
  );
};

export default Home;