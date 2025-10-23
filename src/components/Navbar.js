import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <i className="fas fa-dumbbell"></i>
          Help For Ideal Body
        </Link>
        
        <button className="mobile-menu-btn" id="menuBtn" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><Link to="/" className={isActive('/')} onClick={closeMenu}>الرئيسية</Link></li>
          <li><Link to="/about" className={isActive('/about')} onClick={closeMenu}>من نحن</Link></li>
          <li><Link to="/services" className={isActive('/services')} onClick={closeMenu}>الخدمات</Link></li>
          <li><Link to="/trainers" className={isActive('/trainers')} onClick={closeMenu}>المدربون</Link></li>
          <li><Link to="/pricing" className={isActive('/pricing')} onClick={closeMenu}>الباقات</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>اتصل بنا</Link></li>
          <li><Link to="/pricing" className="btn" onClick={closeMenu}>احجز الآن</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;