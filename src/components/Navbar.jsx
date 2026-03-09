import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { navLinks } from '../data/content';

const sectionIds = ['home', 'about', 'team', 'gallery', 'matches', 'contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (path) => {
    const sectionId = path === '/' ? 'home' : path.replace('/', '');
    return activeSection === sectionId;
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo brand">
          <span className="logo-mark">MMVC</span>
        </Link>
        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className={isActive(item.path) ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-socials">
          <a href="https://www.instagram.com/mass_makers_ppy" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.youtube.com/@mass_makers" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
