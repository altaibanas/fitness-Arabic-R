import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: "أحمد محمد",
      specialty: "خبير لياقة بدنية وتمارين القوة",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "المدرب أحمد"
    },
    {
      name: "سارة عبدالله",
      specialty: "أخصائية تغذية ولياقة بدنية",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "المدربة سارة"
    },
    {
      name: "خالد عمر",
      specialty: "مدرب كمال أجسام وتضخيم العضلات",
     image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  ,
    }
  ];

  return (
    <section id="trainers" className="trainers">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>مدربونا المحترفون</h2>
          <p>فريقنا من الخبراء لمساعدتك في رحلتك الصحية</p>
        </div>
        
        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card animate-on-scroll">
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.alt} />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p>{trainer.specialty}</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;