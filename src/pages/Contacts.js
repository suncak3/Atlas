import React, { useContext, useState } from 'react';
import { LanguageContext } from '../utils/LanguageContext';
import { getText } from '../utils/localization';
import AtlasGoogleMap from '../components/AtlasGoogleMap'; // Import the Google Maps component
import '../styles/contacts.css';

const Contacts = () => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend
    console.log('Form submitted:', formData);
    // For now, just show a success message
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contacts-page">
      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <h1>{getText(language, 'contacts.title')}</h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section section-dark">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="icon phone-large"></i>
              </div>
              <h3>{language === 'ru' ? 'Телефон' : 'Phone'}</h3>
              <p>{getText(language, 'contacts.phone')}</p>
              <a href={`tel:${getText(language, 'contacts.phone').replace(/\s/g, '')}`} className="contact-link">
                {language === 'ru' ? 'Позвонить нам' : 'Call us'}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="icon email-large"></i>
              </div>
              <h3>{language === 'ru' ? 'Email' : 'Email'}</h3>
              <p>{getText(language, 'contacts.email')}</p>
              <p>{getText(language, 'contacts.logistEmail')}</p>
              <a href={`mailto:${getText(language, 'contacts.email')}`} className="contact-link">
                {language === 'ru' ? 'Написать нам' : 'Email us'}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="icon location"></i>
              </div>
              <h3>{language === 'ru' ? 'Адрес' : 'Address'}</h3>
              <p>{language === 'ru' ? 'Казахстан, г. Астана' : 'Kazakhstan, Astana city'}</p>
              <p>{language === 'ru' ? 'проспект Туран 19/1, ВП-19, офис 503' : 'street Turan 19/1, office 503 '}</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                {language === 'ru' ? 'Посмотреть на карте' : 'View on map'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section section-blue">
        <div className="container">
          <div className="section-heading text-center">
            <h2>{language === 'ru' ? 'Связаться с нами' : 'Get In Touch'}</h2>
            <p>{language === 'ru' ? 'Заполните форму ниже, и мы свяжемся с вами в ближайшее время' : 'Fill out the form below, and we will contact you as soon as possible'}</p>
          </div>

          <div className="form-container">
            {formSubmitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>{language === 'ru' ? 'Спасибо за ваше сообщение!' : 'Thank you for your message!'}</h3>
                <p>{language === 'ru' ? 'Мы свяжемся с вами в ближайшее время.' : 'We will contact you as soon as possible.'}</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => setFormSubmitted(false)}
                >
                  {language === 'ru' ? 'Отправить еще сообщение' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{language === 'ru' ? 'Имя' : 'Name'} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">{language === 'ru' ? 'Телефон' : 'Phone'}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{language === 'ru' ? 'Тема' : 'Subject'} *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{language === 'ru' ? 'Сообщение' : 'Message'} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">
                    {language === 'ru' ? 'Отправить сообщение' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section - Now using the Google Maps component */}
      <section className="map-section">
        <div className="map-container">
          <AtlasGoogleMap />
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours-section section-dark">
        <div className="container">
          <div className="business-hours-content">
            <div className="hours-info">
              <div className="section-heading">
                <h2>{language === 'ru' ? 'Часы работы' : 'Business Hours'}</h2>
              </div>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">{language === 'ru' ? 'Понедельник - Пятница' : 'Monday - Friday'}</span>
                  <span className="time">9:00 - 18:00</span>
                </div>
                <div className="hours-item">
                  <span className="day">{language === 'ru' ? 'Суббота' : 'Saturday'}</span>
                  <span className="time">10:00 - 14:00</span>
                </div>
                <div className="hours-item">
                  <span className="day">{language === 'ru' ? 'Воскресенье' : 'Sunday'}</span>
                  <span className="time">{language === 'ru' ? 'Выходной' : 'Closed'}</span>
                </div>
              </div>
            </div>
            <div className="hours-image">
              <img src="/assets/office.jpg" alt="Our Office" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;