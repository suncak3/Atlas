import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../utils/LanguageContext';
import { getText } from '../utils/localization';
import '../styles/about.css';

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <h1>{getText(language, 'nav.about')}</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview-section section-dark">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <div className="section-heading">
                <h2>{language === 'ru' ? 'О компании Atlas Link' : 'About Atlas Link Company'}</h2>
              </div>
              <p>
                {language === 'ru' 
                  ? 'ATLAS LINK COMPANY – эксперт в области сертификации, логистики, оформления документов и таможенной очистки. Мы гарантируем надежность, прозрачность и высокое качество на каждом этапе сотрудничества.'
                  : 'ATLAS LINK COMPANY is an expert in certification, logistics, document processing, and customs clearance. We guarantee reliability, transparency, and high quality at every stage of cooperation.'}
              </p>
              <p>
                {language === 'ru'
                  ? 'Наша компания предоставляет полный комплекс услуг по международной логистике, включая таможенное оформление, сертификацию и документальное сопровождение грузов. Мы специализируемся на работе с нефтегазовой отраслью и понимаем все особенности и требования этого сектора.'
                  : 'Our company provides a full range of international logistics services, including customs clearance, certification, and documentary support of cargo. We specialize in working with the oil and gas industry and understand all the features and requirements of this sector.'}
              </p>
            </div>
            <div className="overview-image">
              <img src="https://i.postimg.cc/vBRJm6RB/logo-black.jpg"/>
            </div>
          </div>
        </div>
      </section>

      {/* Company Experience */}
      <section className="experience-section section-blue">
        <div className="container">
          <div className="section-heading text-center">
            <h2>{language === 'ru' ? 'Более 5 лет успешной работы' : 'More than 5 years of successful work'}</h2>
          </div>
          
          <div className="experience-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-text">{language === 'ru' ? 'Лет опыта' : 'Years of experience'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-text">{language === 'ru' ? 'Успешных проектов' : 'Successful projects'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-text">{language === 'ru' ? 'Довольных клиентов' : 'Satisfied clients'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-text">{language === 'ru' ? 'Профессионалов в команде' : 'Professionals in the team'}</div>
            </div>
          </div>
          
          <div className="experience-timeline">
            <div className="timeline-heading text-center">
              <h3>{language === 'ru' ? 'Наш путь развития' : 'Our development path'}</h3>
            </div>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2018</div>
                <div className="timeline-content">
                  <h4>{language === 'ru' ? 'Основание компании' : 'Company foundation'}</h4>
                  <p>
                    {language === 'ru'
                      ? 'Начало предоставления услуг по логистике и таможенному оформлению.'
                      : 'Start of providing logistics and customs clearance services.'}
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2019</div>
                <div className="timeline-content">
                  <h4>{language === 'ru' ? 'Расширение сферы услуг' : 'Expansion of services'}</h4>
                  <p>
                    {language === 'ru'
                      ? 'Добавление услуг по сертификации и документальному сопровождению.'
                      : 'Addition of certification and documentary support services.'}
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2020</div>
                <div className="timeline-content">
                  <h4>{language === 'ru' ? 'Первое сотрудничество с нефтегазовыми компаниями' : 'First cooperation with oil and gas companies'}</h4>
                  <p>
                    {language === 'ru'
                      ? 'Начало работы с ТШО, КПО и другими крупными операторами.'
                      : 'Beginning of work with TCO, KPO and other major operators.'}
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2021</div>
                <div className="timeline-content">
                  <h4>{language === 'ru' ? 'Международная экспансия' : 'International expansion'}</h4>
                  <p>
                    {language === 'ru'
                      ? 'Расширение географии перевозок и открытие новых маршрутов.'
                      : 'Expansion of transportation geography and opening of new routes.'}
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2022</div>
                <div className="timeline-content">
                  <h4>{language === 'ru' ? 'Улучшение качества сервиса' : 'Service quality improvement'}</h4>
                  <p>
                    {language === 'ru'
                      ? 'Внедрение новых технологий для отслеживания груза и контроля качества.'
                      : 'Implementation of new technologies for cargo tracking and quality control.'}
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2023</div>
                <div className="timeline-content">
                  <h4>{language === 'ru' ? 'Дальнейший рост и развитие' : 'Further growth and development'}</h4>
                  <p>
                    {language === 'ru'
                      ? 'Увеличение количества клиентов и расширение команды профессионалов.'
                      : 'Increase in the number of clients and expansion of the professional team.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="mission-values-section section-dark">
        <div className="container">
          <div className="mission-values-content">
            <div className="mission-box">
              <div className="section-heading">
                <h2>{language === 'ru' ? 'Наша миссия' : 'Our Mission'}</h2>
              </div>
              <p>
                {language === 'ru'
                  ? 'Создавать надежное стратегическое партнерство, обеспечивать высокое качество на каждом этапе сотрудничества и предоставлять инновационные решения в сфере логистики, таможенного оформления и сертификации.'
                  : 'To create a reliable strategic partnership, ensure high quality at every stage of cooperation, and provide innovative solutions in the field of logistics, customs clearance, and certification.'}
              </p>
            </div>
            
            <div className="values-box">
              <div className="section-heading">
                <h2>{language === 'ru' ? 'Наши ценности' : 'Our Values'}</h2>
              </div>
              <ul className="values-list">
                <li>
                  <h4>{language === 'ru' ? 'Надежность' : 'Reliability'}</h4>
                  <p>{language === 'ru' ? 'Мы всегда выполняем свои обязательства и соблюдаем сроки.' : 'We always fulfill our obligations and meet deadlines.'}</p>
                </li>
                <li>
                  <h4>{language === 'ru' ? 'Профессионализм' : 'Professionalism'}</h4>
                  <p>{language === 'ru' ? 'Мы постоянно совершенствуем наши знания и навыки.' : 'We constantly improve our knowledge and skills.'}</p>
                </li>
                <li>
                  <h4>{language === 'ru' ? 'Клиентоориентированность' : 'Customer Orientation'}</h4>
                  <p>{language === 'ru' ? 'Интересы клиентов всегда на первом месте.' : 'The interests of clients are always in the first place.'}</p>
                </li>
                <li>
                  <h4>{language === 'ru' ? 'Прозрачность' : 'Transparency'}</h4>
                  <p>{language === 'ru' ? 'Мы предоставляем полную информацию о статусе груза на каждом этапе.' : 'We provide complete information about the status of cargo at each stage.'}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section section-blue">
        <div className="container">
          <div className="section-heading text-center">
            <h2>{language === 'ru' ? 'Наша команда' : 'Our Team'}</h2>
            <p>{language === 'ru' ? 'Профессионалы, которые делают нашу компанию успешной' : 'Professionals who make our company successful'}</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/team-ceo.jpg" alt="CEO" />
              </div>
              <div className="member-info">
                <h3>{language === 'ru' ? 'Иван Петров' : 'Ivan Petrov'}</h3>
                <p className="member-position">{language === 'ru' ? 'Генеральный директор' : 'CEO'}</p>
                <p className="member-desc">
                  {language === 'ru'
                    ? 'Более 15 лет опыта в логистике и управлении международными перевозками.'
                    : 'More than 15 years of experience in logistics and international transportation management.'}
                </p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/team-logistics.jpg" alt="Logistics Director" />
              </div>
              <div className="member-info">
                <h3>{language === 'ru' ? 'Алексей Смирнов' : 'Alexey Smirnov'}</h3>
                <p className="member-position">{language === 'ru' ? 'Директор по логистике' : 'Logistics Director'}</p>
                <p className="member-desc">
                  {language === 'ru'
                    ? 'Эксперт в области международной логистики с опытом более 10 лет.'
                    : 'Expert in international logistics with more than 10 years of experience.'}
                </p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/team-customs.jpg" alt="Customs Director" />
              </div>
              <div className="member-info">
                <h3>{language === 'ru' ? 'Мария Иванова' : 'Maria Ivanova'}</h3>
                <p className="member-position">{language === 'ru' ? 'Директор по таможенному оформлению' : 'Customs Director'}</p>
                <p className="member-desc">
                  {language === 'ru'
                    ? 'Более 8 лет опыта в таможенном оформлении и сертификации.'
                    : 'More than 8 years of experience in customs clearance and certification.'}
                </p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/team-client.jpg" alt="Client Relations Director" />
              </div>
              <div className="member-info">
                <h3>{language === 'ru' ? 'Елена Козлова' : 'Elena Kozlova'}</h3>
                <p className="member-position">{language === 'ru' ? 'Директор по работе с клиентами' : 'Client Relations Director'}</p>
                <p className="member-desc">
                  {language === 'ru'
                    ? 'Специалист по работе с ключевыми клиентами и развитию бизнеса.'
                    : 'Specialist in working with key clients and business development.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="partners-section section-dark">
        <div className="container">
          <div className="section-heading text-center">
            <h2>{language === 'ru' ? 'Наши клиенты и партнеры' : 'Our Clients and Partners'}</h2>
            <p>{language === 'ru' ? 'Компании, которые нам доверяют' : 'Companies that trust us'}</p>
          </div>
          
          <div className="partners-logos">
            <div className="partner-logo">
              <img src="/assets/partner-tco.png" alt="TCO" />
              <span>TCO / ТШО</span>
            </div>
            <div className="partner-logo">
              <img src="/assets/partner-kpo.png" alt="KPO" />
              <span>KPO / КПО</span>
            </div>
            <div className="partner-logo">
              <img src="/assets/partner-ncoc.png" alt="NCOC" />
              <span>NCOC</span>
            </div>
            <div className="partner-logo">
              <img src="/assets/partner-oil.png" alt="Oil Company" />
              <span>{language === 'ru' ? 'Нефтяная компания' : 'Oil Company'}</span>
            </div>
            <div className="partner-logo">
              <img src="/assets/partner-gas.png" alt="Gas Company" />
              <span>{language === 'ru' ? 'Газовая компания' : 'Gas Company'}</span>
            </div>
            <div className="partner-logo">
              <img src="/assets/partner-logistics.png" alt="Logistics Partner" />
              <span>{language === 'ru' ? 'Логистический партнер' : 'Logistics Partner'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section-blue">
        <div className="container">
          <div className="cta-content">
            <h2>{language === 'ru' ? 'Готовы начать сотрудничество?' : 'Ready to start cooperation?'}</h2>
            <p>{language === 'ru' ? 'Свяжитесь с нами сегодня, чтобы обсудить ваши потребности и получить индивидуальное предложение.' : 'Contact us today to discuss your needs and get a personalized offer.'}</p>
            <div className="cta-buttons">
              <Link to="/services" className="btn btn-primary">{language === 'ru' ? 'Наши услуги' : 'Our Services'}</Link>
              <Link to="/contacts" className="btn btn-secondary">{language === 'ru' ? 'Связаться с нами' : 'Contact Us'}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;