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
      <section className="company-overview-section">
          <div className="overview-content">
            <div className="overview-text">
              <div className="section-heading">
                <h2>{language === 'ru' ? 'О компании Atlas Link' : 'About Atlas Link Company'}</h2>
              </div>
              <p>
                {language === 'ru' 
                  ? 'ATLAS LINK COMPANY – это логистическая компания, предоставляющая международные логистические решения для промышленных предприятий.' +
                    'Мы специализируемся на организации поставок из Европы, США, Азии и других стран в Казахстан и Центральную Азию.' +
                    'Наша ключевая задача — организовать быструю, надёжную и полностью сопровождаемую доставку грузов: от обычных упаковок до сложных негабаритных позиций.'
                  : 'ATLAS LINK COMPANY is a logistics company providing international logistics solutions for industrial enterprises.' +
                    '                    "We specialize in organizing supplies from Europe, the United States, Asia and other countries to Kazakhstan and Central Asia.' +
                    '                    "Our key task is to organize fast, reliable and fully escorted cargo delivery: from ordinary packages to complex oversized items.'}
              </p>
              <p>
                {language === 'ru'
                  ? 'Наши клиенты — это предприятия нефтегазовой отрасли, энергетики, горно-металлургического комплекса и промышленного строительства.' +
                     +
                    'Мы не торгуем продукцией и не предлагаем технологии. Наша зона ответственности — логистика: от момента формирования заказа у поставщика до приёмки товара клиентом на складе.'
                  : 'Our clients are enterprises of the oil and gas industry, energy, mining and metallurgical complex and industrial construction.' +
                    'We do not sell products or offer technology. Our area of responsibility is logistics: from the moment the order is formed from the supplier to the acceptance of the goods by the customer in the warehouse.'}
              </p>
            </div>
            <div className="overview-image">
              <img src="https://i.postimg.cc/vBRJm6RB/logo-black.jpg" alt="Logo"/>
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
              <div className="link-mission-box">
                <Link to="/contacts" className="btn btn-secondary">{language === 'ru' ? 'Связаться с нами' : 'Contact Us'}</Link>
              </div>
            </div>
            
            <div className="values-box">
              <div className="section-heading">
                <h2>{language === 'ru' ? 'Наши ценности' : 'Our Values'}</h2>
              </div>
              <ul className="values-list">
                <li>
                  <h4>{language === 'ru' ? 'Скорость и точность' : 'Speed and accuracy'}</h4>
                  <p>{language === 'ru' ? 'Мы ценим ваше время и знаем, что логистика — это критически важный элемент производственного процесса. Наши поставки точны и своевременны.' : 'We appreciate your time and know that logistics is a critical element of the production process. Our deliveries are accurate and timely.'}</p>
                </li>
                <li>
                  <h4>{language === 'ru' ? 'Адаптивность' : 'Adaptability'}</h4>
                  <p>{language === 'ru' ? 'Мы гибко перестраиваем маршруты в зависимости от внешнеэкономической ситуации, санкций, ограничений и погодных условий.' : 'We flexibly adjust routes depending on the external economic situation, sanctions, restrictions and weather conditions.'}</p>
                </li>
                <li>
                  <h4>{language === 'ru' ? 'Экспертиза и глобальное партнёрство' : 'Expertise and global partnership'}</h4>
                  <p>{language === 'ru' ? 'Работаем напрямую с логистическими агентами IATA и WCA по всему миру, что позволяет организовывать поставки в любые точки без посредников.' : 'We work directly with IATA and WCA logistics agents around the world, which allows us to arrange deliveries to any point without intermediaries.'}</p>
                </li>
                <li>
                  <h4>{language === 'ru' ? 'Прозрачность и ответственность' : 'Transparency and responsibility'}</h4>
                  <p>{language === 'ru' ? 'Мы даём честные сроки и расставляем приоритеты в интересах клиента. Без скрытых комиссий, без задержек, без шаблонов.' : 'We give fair deadlines and set priorities in the interests of the client. No hidden fees, no delays, no templates.'}</p>
                </li>
                <li>
                  <h4>{language === 'ru' ? 'Полный контроль и сопровождение' : 'Full control and support'}</h4>
                  <p>{language === 'ru' ? 'Мы сопровождаем груз на всех этапах: от погрузки до таможенного оформления, обеспечивая прозрачную коммуникацию и безопасность.\n' : 'We accompany the cargo at all stages: from loading to customs clearance, ensuring transparent communication and security.'}</p>
                </li>
              </ul>
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
              <img src="/assets/partners/OGServices.jpg" alt="OG-Services" />
              <span>OG Services</span>
            </div>
            <div className="partner-logo">
              <img src="/assets/partners/Lenergy.jfif" alt="Lenergy" />
              <span>Lenergy</span>
            </div>
            <div className="partner-logo">
              <img src="/assets/partners/ARGLogo.png" alt="ARG" />
              <span>ARG</span>
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