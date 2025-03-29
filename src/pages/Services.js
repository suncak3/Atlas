import React, { useContext } from 'react';
import { LanguageContext } from '../utils/LanguageContext';
import { getText } from '../utils/localization';
import '../styles/services.css';

const Services = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="services-page">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <h1>{getText(language, 'services.title')}</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section-dark">
        <div className="container">
          <div className="services-grid">
            {/* Service 1: Logistics */}
            <div className="service-card full-card">
              {/*<div className="service-image">*/}
              {/*  <img src="https://i.postimg.cc/MHWcBHk0/image.png" alt="Logistics" />*/}
              {/*</div>*/}
              <div className="service-content">
                <h2>{getText(language, 'services.logistics.title')}</h2>
                <div className="service-features">
                  <ul>
                    <li>{language === 'ru' ? 'Международные грузоперевозки любым видом транспорта' : 'International freight transportation by any mode of transport'}</li>
                    <li>{language === 'ru' ? 'Мультимодальные перевозки' : 'Multimodal transportation'}</li>
                    <li>{language === 'ru' ? 'Доставка негабаритных грузов' : 'Delivery of oversized cargo'}</li>
                    <li>{language === 'ru' ? 'Контейнерные перевозки' : 'Container transportation'}</li>
                    <li>{language === 'ru' ? 'Складская логистика' : 'Warehouse logistics'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2: Customs */}
            <div className="service-card full-card reverse">
              <div className="service-content">
                <h2>{getText(language, 'services.customs.title')}</h2>
                <div className="service-features">
                  <ul>
                    <li>{language === 'ru' ? 'Полное таможенное оформление грузов' : 'Complete customs clearance of goods'}</li>
                    <li>{language === 'ru' ? 'Оформление сертификатов и разрешительной документации' : 'Processing of certificates and permits'}</li>
                    <li>{language === 'ru' ? 'Таможенное сопровождение' : 'Customs support'}</li>
                    <li>{language === 'ru' ? 'Подготовка всех необходимых документов' : 'Preparation of all necessary documents'}</li>
                    <li>{language === 'ru' ? 'Соответствие международным стандартам' : 'Compliance with international standards'}</li>
                  </ul>
                </div>
              </div>
              <div className="service-image">
                <img src="/assets/service-customs.jpg" alt="Customs" />
              </div>
            </div>

            {/* Service 3: Door to Door */}
            <div className="service-card full-card">
              <div className="service-image">
                <img src="/assets/service-door.jpg" alt="Door to Door" />
              </div>
              <div className="service-content">
                <h2>{getText(language, 'services.delivery.title')}</h2>
                <div className="service-features">
                  <ul>
                    <li>{language === 'ru' ? 'Полный контроль движения груза от отправителя до получателя' : 'Full control of cargo movement from sender to recipient'}</li>
                    <li>{language === 'ru' ? 'Оптимальное планирование маршрута' : 'Optimal route planning'}</li>
                    <li>{language === 'ru' ? 'Отслеживание груза в реальном времени' : 'Real-time cargo tracking'}</li>
                    <li>{language === 'ru' ? 'Информирование на каждом этапе' : 'Updates at each stage'}</li>
                    <li>{language === 'ru' ? 'Доставка в любую точку мира' : 'Delivery to any point in the world'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4: Special Cargo */}
            <div className="service-card full-card reverse">
              <div className="service-content">
                <h2>{getText(language, 'services.specialCargo.title')}</h2>
                <div className="service-features">
                  <ul>
                    <li>{language === 'ru' ? 'Перевозка нефтегазового оборудования' : 'Transportation of oil and gas equipment'}</li>
                    <li>{language === 'ru' ? 'Доставка крупногабаритных конструкций' : 'Delivery of oversized structures'}</li>
                    <li>{language === 'ru' ? 'Транспортировка опасных грузов' : 'Transportation of dangerous goods'}</li>
                    <li>{language === 'ru' ? 'Перевозка чувствительного оборудования' : 'Transportation of sensitive equipment'}</li>
                    <li>{language === 'ru' ? 'Специализированные контейнеры и упаковка' : 'Specialized containers and packaging'}</li>
                  </ul>
                </div>
              </div>
              <div className="service-image">
                <img src="/assets/service-special.jpg" alt="Special Cargo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="certification-section section-blue">
        <div className="container">
          <div className="section-heading text-center">
            <h2>{language === 'ru' ? 'Сертификация и соответствие стандартам' : 'Certification and Standards Compliance'}</h2>
          </div>
          
          <div className="certification-content">
            <p className="certification-intro">{getText(language, 'cargo.certification.title')}</p>
            
            <ul className="certification-list">
              {getText(language, 'cargo.certification.list').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <div className="standards-logos">
              <div className="standard-logo">
                <img src="/assets/iso-logo.png" alt="ISO 9001" />
                <span>ISO 9001</span>
              </div>
              <div className="standard-logo">
                <img src="/assets/astm-logo.png" alt="ASTM" />
                <span>ASTM</span>
              </div>
              <div className="standard-logo">
                <img src="/assets/gost-logo.png" alt="GOST" />
                <span>GOST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>{language === 'ru' ? 'Готовы начать сотрудничество?' : 'Ready to start cooperation?'}</h2>
            <p>{language === 'ru' ? 'Свяжитесь с нами, чтобы обсудить ваши потребности в логистике и получить индивидуальное предложение.' : 'Contact us to discuss your logistics needs and get a personalized offer.'}</p>
            <a href="/contacts" className="btn btn-primary">{language === 'ru' ? 'Связаться с нами' : 'Contact Us'}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;