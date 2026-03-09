import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { navLinks } from '../data/content';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => (location.pathname === '/' ? path === '/' : location.pathname.includes(path));

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
