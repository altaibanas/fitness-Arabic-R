import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "fas fa-dumbbell",
      title: "تدريب شخصي",
      description: "برامج تدريبية شخصية تناسب أهدافك وقدراتك مع مدربين متخصصين يتابعون تقدمك خطوة بخطوة"
    },
    {
      icon: "fas fa-apple-alt",
      title: "استشارات تغذية",
      description: "خطط غذائية مصممة خصيصاً لتحقيق أهدافك الصحية والبدنية مع متابعة أسبوعية"
    },
    {
      icon: "fas fa-users",
      title: "تدريب جماعي",
      description: "جلسات تدريبية جماعية متنوعة في بيئة محفزة وملهمة مع مدربين متخصصين"
    },
    {
      icon: "fas fa-heartbeat",
      title: "برامج تأهيلية",
      description: "برامج تأهيلية بعد الإصابات أو للتحسين الوظيفي للجسم مع أخصائيين في العلاج الطبيعي"
    },
    {
      icon: "fas fa-running",
      title: "تدريب رياضي",
      description: "برامج تدريبية متخصصة للرياضيين المحترفين والهواة لتحسين الأداء الرياضي"
    },
    {
      icon: "fas fa-spa",
      title: "جلسات استرخاء",
      description: "جلسات يوغا وتأمل ومساج لتحقيق التوازن الجسدي والعقلي وتخفيف التوتر"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>خدماتنا المتكاملة</h2>
          <p>نقدم مجموعة متنوعة من الخدمات لتحقيق أهدافك الصحية والبدنية</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;