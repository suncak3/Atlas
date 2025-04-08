import React, { useContext } from 'react';
import { LanguageContext } from '../utils/LanguageContext';
import { getText } from '../utils/localization';
import '../styles/servicesPage.css';
import FlipCard from "../components/FlipCard";



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
      <section className="services-page-grid-section section-dark">
        <h4>* {getText(language, 'alertCard.title')}</h4>
        <div className="services-page-grid">
          {/* Service 1: Logistics */}
          <div className="service-page-card">
            <div className="service-page-content">
              <FlipCard
                  frontContent={<h2>{getText(language, 'services.logistics.title')}</h2>}
                  backContent={
                    <div className="service-page-features">
                      <ul>
                        <li>{language === 'ru' ? 'Международные грузоперевозки любым видом транспорта' : 'International freight transportation by any mode of transport'}</li>
                        <li>{language === 'ru' ? 'Мультимодальные перевозки' : 'Multimodal transportation'}</li>
                        <li>{language === 'ru' ? 'Доставка негабаритных грузов' : 'Delivery of oversized cargo'}</li>
                        <li>{language === 'ru' ? 'Контейнерные перевозки' : 'Container transportation'}</li>
                        <li>{language === 'ru' ? 'Складская логистика' : 'Warehouse logistics'}</li>
                      </ul>
                    </div>
                  }
                  frontImage={"./assets/cards-bkgs/service_card_bkg_1.png"}
                  frontImageAlt="Игральная карта"
              />
            </div>
          </div>

          {/* Service 2: Customs */}
          <div className="service-page-card full-card reverse">
            <div className="service-page-content">
              <FlipCard
                  frontContent={<h2>{getText(language, 'services.customs.title')}</h2>}
                  backContent={
                    <div className="service-page-features">
                      <ul>
                        <li>{language === 'ru' ? 'Полное таможенное оформление грузов' : 'Complete customs clearance of goods'}</li>
                        <li>{language === 'ru' ? 'Оформление сертификатов и разрешительной документации' : 'Processing of certificates and permits'}</li>
                        <li>{language === 'ru' ? 'Таможенное сопровождение' : 'Customs support'}</li>
                        <li>{language === 'ru' ? 'Подготовка всех необходимых документов' : 'Preparation of all necessary documents'}</li>
                        <li>{language === 'ru' ? 'Соответствие международным стандартам' : 'Compliance with international standards'}</li>
                      </ul>
                    </div>
                  }
                  frontImage={"./assets/cards-bkgs/service_card_bkg_2.png"}
                  frontImageAlt="Игральная карта"
              />
            </div>
          </div>

          {/* Service 3: Door to Door */}
          <div className="service-page-card full-card">
            <div className="service-page-content">
              <FlipCard
                  frontContent={<h2>{getText(language, 'services.delivery.title')}</h2>}
                  backContent={
                    <div className="service-page-features">
                      <ul>
                        <li>{language === 'ru' ? 'Полный контроль движения груза от отправителя до получателя' : 'Full control of cargo movement from sender to recipient'}</li>
                        <li>{language === 'ru' ? 'Оптимальное планирование маршрута' : 'Optimal route planning'}</li>
                        <li>{language === 'ru' ? 'Отслеживание груза в реальном времени' : 'Real-time cargo tracking'}</li>
                        <li>{language === 'ru' ? 'Информирование на каждом этапе' : 'Updates at each stage'}</li>
                        <li>{language === 'ru' ? 'Доставка в любую точку мира' : 'Delivery to any point in the world'}</li>
                      </ul>
                    </div>
                  }
                  frontImage={"./assets/cards-bkgs/service_card_bkg_3.png"}
                  frontImageAlt="Игральная карта"
              />
            </div>
          </div>

          {/* Service 4: Special Cargo */}
          <div className="service-page-card full-card reverse">
            <div className="service-page-content">
              <FlipCard
                  frontContent={<h2>{getText(language, 'services.specialCargo.title')}</h2>}
                  backContent={
                    <div className="service-page-features">
                      <ul>
                        <li>{language === 'ru' ? 'Перевозка нефтегазового оборудования' : 'Transportation of oil and gas equipment'}</li>
                        <li>{language === 'ru' ? 'Доставка крупногабаритных конструкций' : 'Delivery of oversized structures'}</li>
                        <li>{language === 'ru' ? 'Транспортировка опасных грузов' : 'Transportation of dangerous goods'}</li>
                        <li>{language === 'ru' ? 'Перевозка чувствительного оборудования' : 'Transportation of sensitive equipment'}</li>
                        <li>{language === 'ru' ? 'Специализированные контейнеры и упаковка' : 'Specialized containers and packaging'}</li>
                      </ul>
                    </div>
                  }
                  frontImage={"./assets/cards-bkgs/service_card_bkg_4.png"}
                  frontImageAlt="Игральная карта"
              />
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