import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('شكراً للاشتراك في نشرتنا الإخبارية!');
    setEmail('');
  };

  const quickLinks = [
    { path: "/", text: "الرئيسية" },
    { path: "/about", text: "من نحن" },
    { path: "/services", text: "الخدمات" },
    { path: "/trainers", text: "المدربون" },
    { path: "/pricing", text: "الباقات" },
    { path: "/contact", text: "اتصل بنا" }
  ];

  const serviceLinks = [
    { text: "تدريب شخصي" },
    { text: "استشارات تغذية" },
    { text: "تدريب جماعي" },
    { text: "برامج تأهيلية" },
    { text: "تدريب رياضي" },
    { text: "جلسات استرخاء" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Help For Ideal Body</h3>
            <p>مركز متخصص في اللياقة البدنية والتدريب الشخصي والتغذية الصحية، نساعدك لتحقيق أهدافك الصحية والبدنية بأحدث الأساليب العلمية.</p>
            <div className="social-links" style={{marginTop: '25px'}}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>روابط سريعة</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}><i className="fas fa-chevron-left"></i> {link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>خدماتنا</h3>
            <ul className="footer-links">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#"><i className="fas fa-chevron-left"></i> {link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>النشرة الإخبارية</h3>
            <p>اشترك في نشرتنا الإخبارية لتصلك أحدث العروض والنصائح الصحية والتمارين المجانية.</p>
            <form onSubmit={handleNewsletterSubmit} style={{marginTop: '20px'}}>
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                style={{width: '100%', padding: '14px', borderRadius: '10px', border: 'none', marginBottom: '12px', background: 'rgba(255,255,255,0.1)', color: 'white'}}
              />
              <button type="submit" style={{width: '100%'}}>اشترك الآن</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 Help For Ideal Body Fitness. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;