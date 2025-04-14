import React, { useContext } from 'react';
import { LanguageContext } from '../utils/LanguageContext';
import { getText } from '../utils/localization';
import '../styles/advantages.css';

const Advantages = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="advantages-page">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <h1>{getText(language, 'advantages.title')}</h1>
        </div>
      </section>

      {/* Main Advantages Section */}
      <section className="main-advantages-section section-dark">
        <div className="container">
          <div className="advantages-grid">
            {/* Advantage 1 */}
            <div className="advantage-card">
              <div className="advantage-number">01</div>
              <div className="advantage-icon">
                <img src="/assets/icons/Experience.png" alt="Experience" />
              </div>
              <h3>{getText(language, 'advantages.reasons.experience.title')}</h3>
              <p>{getText(language, 'advantages.reasons.experience.text')}</p>
              <div className="advantage-details">
                <ul>
                  <li>{language === 'ru' ? 'Более 5 лет в международной логистике' : 'More than 5 years in international logistics'}</li>
                  <li>{language === 'ru' ? 'Реализовано более 1000 успешных проектов' : 'More than 1000 successful projects completed'}</li>
                  <li>{language === 'ru' ? 'Опытная команда профессионалов' : 'Experienced team of professionals'}</li>
                </ul>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="advantage-card">
              <div className="advantage-number">02</div>
              <div className="advantage-icon">
                <img src="/assets/icons/Approach.png" alt="Approach" />
              </div>
              <h3>{getText(language, 'advantages.reasons.approach.title')}</h3>
              <p>{getText(language, 'advantages.reasons.approach.text')}</p>
              <div className="advantage-details">
                <ul>
                  <li>{language === 'ru' ? 'Полный спектр услуг логистики' : 'Full range of logistics services'}</li>
                  <li>{language === 'ru' ? 'Оформление всех необходимых документов' : 'Preparation of all necessary documents'}</li>
                  <li>{language === 'ru' ? 'Сопровождение груза на всех этапах' : 'Cargo support at all stages'}</li>
                </ul>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="advantage-card">
              <div className="advantage-number">03</div>
              <div className="advantage-icon">
                <img src="/assets/icons/Reliability.png" alt="Reliability" />
              </div>
              <h3>{getText(language, 'advantages.reasons.reliability.title')}</h3>
              <p>{getText(language, 'advantages.reasons.reliability.text')}</p>
              <div className="advantage-details">
                <ul>
                  <li>{language === 'ru' ? 'Строгое соблюдение договорных сроков' : 'Strict adherence to contractual deadlines'}</li>
                  <li>{language === 'ru' ? 'Гарантия безопасной доставки груза' : 'Guaranteed safe delivery of cargo'}</li>
                  <li>{language === 'ru' ? 'Страхование всех перевозок' : 'Insurance for all shipments'}</li>
                </ul>
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="advantage-card">
              <div className="advantage-number">04</div>
              <div className="advantage-icon">
                <img src="/assets/icons/Financial.png" alt="Financial Terms" />
              </div>
              <h3>{getText(language, 'advantages.reasons.financialTerms.title')}</h3>
              <p>{getText(language, 'advantages.reasons.financialTerms.text')}</p>
              <div className="advantage-details">
                <ul>
                  <li>{language === 'ru' ? 'Гибкая система оплаты' : 'Flexible payment system'}</li>
                  <li>{language === 'ru' ? 'Возможность работы с разными валютами' : 'Ability to work with different currencies'}</li>
                  <li>{language === 'ru' ? 'Индивидуальные финансовые условия' : 'Individual financial conditions'}</li>
                </ul>
              </div>
            </div>

            {/* Advantage 5 */}
            <div className="advantage-card">
              <div className="advantage-number">05</div>
              <div className="advantage-icon">
                <img src="/assets/icons/Trust.png" alt="Trust" />
              </div>
              <h3>{getText(language, 'advantages.reasons.trust.title')}</h3>
              <p>{getText(language, 'advantages.reasons.trust.text')}</p>
              <div className="advantage-details">
                <ul>
                  <li>{language === 'ru' ? 'Сотрудничество с ТШО, КПО, NCOC' : 'Cooperation with TCO, KPO, NCOC'}</li>
                  <li>{language === 'ru' ? 'Положительные отзывы клиентов' : 'Positive customer reviews'}</li>
                  <li>{language === 'ru' ? 'Долгосрочные партнерские отношения' : 'Long-term partnerships'}</li>
                </ul>
              </div>
            </div>

            {/* Advantage 6 */}
            <div className="advantage-card">
              <div className="advantage-number">06</div>
              <div className="advantage-icon">
                <img src="/assets/icons/Transparency.png" alt="Transparency" />
              </div>
              <h3>{getText(language, 'advantages.reasons.transparency.title')}</h3>
              <p>{getText(language, 'advantages.reasons.transparency.text')}</p>
              <div className="advantage-details">
                <ul>
                  <li>{language === 'ru' ? 'Регулярные отчеты о статусе груза' : 'Regular updates on cargo status'}</li>
                  <li>{language === 'ru' ? 'Онлайн-отслеживание перемещения груза' : 'Online tracking of cargo movement'}</li>
                  <li>{language === 'ru' ? 'Прозрачное ценообразование' : 'Transparent pricing'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Flexibility Section */}
      <section className="financial-flexibility-section section-blue">
        <div className="container">
          <div className="section-heading text-center">
            <h2>{language === 'ru' ? 'Финансовая гибкость и индивидуальный подход' : 'Financial Flexibility and Individual Approach'}</h2>
          </div>

          <div className="financial-grid">
            <div className="financial-card">
              <div className="financial-icon">
                <img src="/assets/icons/Payment.png" alt="Payment Options" />
              </div>
              <h3>{language === 'ru' ? 'Гибкие условия взаиморасчетов' : 'Flexible Payment Terms'}</h3>
              <p>{language === 'ru' ? 'Предоставляем простые и удобные варианты взаиморасчетов, используя разные валюты и схемы платежей' : 'We provide simple and convenient payment options, using different currencies and payment schemes'}</p>
            </div>

            <div className="financial-card">
              <div className="financial-icon">
                <img src="/assets/icons/Cost.png" alt="Cost Calculation" />
              </div>
              <h3>{language === 'ru' ? 'Индивидуальный расчет стоимости' : 'Individual Cost Calculation'}</h3>
              <p>{language === 'ru' ? 'Подбираем наиболее выгодные и эффективные решения для вашего бизнеса, учитывая все ваши требования' : 'We select the most profitable and effective solutions for your business, taking into account all your requirements'}</p>
            </div>

            <div className="financial-card">
              <div className="financial-icon">
                <img src="/assets/icons/Budget.png" alt="Budget Planning" />
              </div>
              <h3>{language === 'ru' ? 'Эффективное планирование бюджета' : 'Effective Budget Planning'}</h3>
              <p>{language === 'ru' ? 'Помогаем эффективно планировать и распределять бюджет благодаря прозрачному ценообразованию' : 'We help you effectively plan and allocate your budget thanks to transparent pricing'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-dark">
        <div className="container">
          <div className="section-heading text-center">
            <h2>{language === 'ru' ? 'Что говорят наши клиенты' : 'What Our Clients Say'}</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"{language === 'ru' ? 'Мы сотрудничаем с Atlas Link Company более 3 лет. За это время компания зарекомендовала себя как надежный партнер, всегда выполняющий свои обязательства точно в срок.' : 'We have been working with Atlas Link Company for over 3 years. During this time, the company has proven itself as a reliable partner, always fulfilling its obligations right on time.'}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="/assets/partners/Lenergy.jfif" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>Lenergy</h4>
                  <p>{language === 'ru' ? 'Отдел логистики' : 'Logistics Department'}</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"{language === 'ru' ? 'Atlas Link Company помогла нам оптимизировать логистические процессы и значительно сократить сроки доставки оборудования. Рекомендуем как профессионалов своего дела.' : 'Atlas Link Company helped us optimize logistics processes and significantly reduce equipment delivery times. We recommend them as professionals in their field.'}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="/assets/partners/ARGLogo.png" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>ARG</h4>
                  <p>{language === 'ru' ? 'Руководитель отдела закупок' : 'Head of Procurement'}</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"{language === 'ru' ? 'Благодарим команду Atlas Link Company за профессиональный подход к организации сложных перевозок. Особенно ценим оперативность решения возникающих вопросов.' : 'We thank the Atlas Link Company team for their professional approach to organizing complex transportations. We especially appreciate the promptness in resolving emerging issues.'}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="/assets/partners/OGServices.jpg" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>OGServices</h4>
                  <p>{language === 'ru' ? 'Департамент транспорта' : 'Transportation Department'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section-blue">
        <div className="container">
          <div className="cta-content">
            <h2>{language === 'ru' ? 'Готовы ощутить все преимущества работы с нами?' : 'Ready to experience all the benefits of working with us?'}</h2>
            <p>{language === 'ru' ? 'Свяжитесь с нами сегодня и узнайте, как мы можем помочь вашему бизнесу.' : 'Contact us today and find out how we can help your business.'}</p>
            <a href="/contacts" className="btn btn-primary">{language === 'ru' ? 'Связаться с нами' : 'Contact Us'}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advantages;