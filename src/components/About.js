import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: "fas fa-medal",
      title: "خبرة 10+ سنوات",
      description: "خبرة واسعة في مجال اللياقة البدنية"
    },
    {
      icon: "fas fa-user-tie",
      title: "مدربون محترفون",
      description: "مدربون معتمدون دولياً"
    },
    {
      icon: "fas fa-clipboard-check",
      title: "برامج مخصصة",
      description: "خطط تناسب احتياجاتك وأهدافك"
    },
    {
      icon: "fas fa-heartbeat",
      title: "نتائج مضمونة",
      description: "تحقيق أهدافك في وقت قياسي"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>من نحن</h2>
          <p>مركزنا يقدم حلولاً متكاملة للياقة البدنية والصحة بأساليب علمية حديثة</p>
        </div>
        
        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <h3>نحن نساعدك لتحقيق أهدافك الصحية والبدنية بطرق علمية</h3>
            <p>تأسس مركز Help For Ideal Body Fitness عام 2010 بمهمة واضحة: مساعدة الأفراد على تحقيق أقصى إمكاناتهم البدنية والصحية. من خلال فريق من المدربين المحترفين وأخصائيي التغذية، نقدم برامج مخصصة تناسب كل فرد وفقاً لأهدافه وقدراته.</p>
            <p>نسعى لخلق بيئة محفزة وداعمة تلهم عملائنا لتحقيق أهدافهم، مع التركيز على الجوانب الثلاثة للصحة: الجسدية والعقلية والروحية.</p>
            
            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item animate-on-scroll">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{marginTop: '30px'}}>
              <Link to="/contact" className="btn">تواصل معنا اليوم</Link>
            </div>
          </div>
          
          <div className="about-image animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="مركز اللياقة البدنية" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;