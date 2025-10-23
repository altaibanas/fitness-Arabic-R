import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "العنوان",
      content: "شارع الملك فهد، الرياض، المملكة العربية السعودية"
    },
    {
      icon: "fas fa-phone-alt",
      title: "الهاتف",
      content: "+966 11 123 4567"
    },
    {
      icon: "fas fa-envelope",
      title: "البريد الإلكتروني",
      content: "info@idealbody.com"
    },
    {
      icon: "fas fa-clock",
      title: "ساعات العمل",
      content: ["الأحد - الخميس: 6 صباحاً - 11 مساءً", "الجمعة - السبت: 8 صباحاً - 10 مساءً"]
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>اتصل بنا</h2>
          <p>نحن هنا للإجابة على استفساراتك واستقبال اقتراحاتك</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item animate-on-scroll">
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-text">
                  <h3>{item.title}</h3>
                  {Array.isArray(item.content) ? (
                    item.content.map((line, lineIndex) => (
                      <p key={lineIndex}>{line}</p>
                    ))
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
            
            <div className="contact-item animate-on-scroll">
              <div className="contact-icon">
                <i className="fas fa-comments"></i>
              </div>
              <div className="contact-text">
                <h3>وسائل التواصل</h3>
                <div className="social-links" style={{marginTop: '15px', justifyContent: 'flex-start'}}>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form animate-on-scroll">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="اسمك الكامل" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="بريدك الإلكتروني" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="رقم هاتفك" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{width: '100%', padding: '16px 20px', border: '1px solid #e1e5eb', borderRadius: '12px', fontFamily: 'inherit', fontSize: '1.05rem', background: '#f8fafc', color: 'var(--gray)'}}
                >
                  <option value="" disabled>الخدمة المطلوبة</option>
                  <option value="training">تدريب شخصي</option>
                  <option value="nutrition">استشارات تغذية</option>
                  <option value="group">تدريب جماعي</option>
                  <option value="rehab">برامج تأهيلية</option>
                  <option value="other">استفسار عام</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="رسالتك" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">إرسال الرسالة</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;