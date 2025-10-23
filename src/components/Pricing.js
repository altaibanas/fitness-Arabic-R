import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "البداية",
      price: "199",
      description: "للأفراد المبتدئين",
      popular: false,
      features: [
        { included: true, text: "وصول غير محدود إلى الصالة" },
        { included: true, text: "جلسة تدريب شخصي واحدة شهرياً" },
        { included: true, text: "برنامج تدريبي مخصص" },
        { included: true, text: "دعم عبر البريد الإلكتروني" },
        { included: true, text: "لا يوجد عقود طويلة الأجل" },
        { included: false, text: "استشارات تغذية" },
        { included: false, text: "جلسات جماعية غير محدودة" }
      ]
    },
    {
      name: "المحترف",
      price: "399",
      description: "الأكثر شعبية",
      popular: true,
      features: [
        { included: true, text: "وصول غير محدود إلى الصالة" },
        { included: true, text: "4 جلسات تدريب شخصي شهرياً" },
        { included: true, text: "برنامج تدريبي وتغذوي مخصص" },
        { included: true, text: "جلسة استشارة تغذية شهرية" },
        { included: true, text: "دعم فوري عبر الواتساب" },
        { included: true, text: "خصم 20% على المنتجات" },
        { included: true, text: "جلسات جماعية غير محدودة" }
      ]
    },
    {
      name: "المتميز",
      price: "599",
      description: "للرياضيين المحترفين",
      popular: false,
      features: [
        { included: true, text: "وصول غير محدود إلى الصالة" },
        { included: true, text: "8 جلسات تدريب شخصي شهرياً" },
        { included: true, text: "برنامج تدريبي وتغذوي متكامل" },
        { included: true, text: "متابعة أسبوعية مع المدرب" },
        { included: true, text: "تحليل جسم كامل شهري" },
        { included: true, text: "دعم على مدار الساعة" },
        { included: true, text: "خصم 30% على المنتجات" }
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>باقاتنا المميزة</h2>
          <p>خطط أسعار تناسب جميع الاحتياجات والميزانيات</p>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''} animate-on-scroll`}>
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">{plan.price} <span>ر.س / شهر</span></div>
                <p>{plan.description}</p>
              </div>
              <div className="pricing-body">
                <ul className="features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className={feature.included ? 'fas fa-check-circle' : 'fas fa-times-circle'}></i>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn">اشترك الآن</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;