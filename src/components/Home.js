import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: "5,000+", text: "عميل راضٍ" },
    { number: "15+", text: "مدرب محترف" },
    { number: "98%", text: "رضا العملاء" },
    { number: "10+", text: "سنوات خبرة" }
  ];

  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="animate-on-scroll">جسمك المثالي يبدأ من هنا</h1>
        <p className="animate-on-scroll">مركز Help For Ideal Body Fitness يوفر لك برامج تدريب وتغذية شخصية مع مدربين محترفين لتحقيق أهدافك الصحية والبدنية بأسرع وقت ممكن</p>
        <div className="hero-btns">
          <Link to="/pricing" className="btn animate-on-scroll">ابدأ رحلتك الآن</Link>
          <Link to="/about" className="btn btn-outline animate-on-scroll">اكتشف المزيد</Link>
        </div>
        
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item animate-on-scroll">
              <h3>{stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;