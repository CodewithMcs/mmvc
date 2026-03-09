import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">
        <span className="logo-mark">MMVC</span>
        <div>
          <strong>MassMakers Volleyball Club</strong>
          <p className="foot-tagline">Built for power, passion, and performance.</p>
        </div>
      </div>
    </div>

    <div className="footer-main">
      <div className="footer-col">
        <h4 className="footer-heading">Club</h4>
        <div className="footer-links">
          <a href="/#about">About Us</a>
          <a href="/#team">Our Team</a>
          <a href="/#matches">Match Schedule</a>
          <a href="/#news">Latest News</a>
        </div>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Get Involved</h4>
        <div className="footer-links">
          <a href="/#contact">Contact Us</a>
          <a href="/#contact">Tryout Info</a>
          <a href="/#contact">Sponsorship</a>
          <a href="/#contact">Friendly Match</a>
        </div>
      </div>
      <div className="footer-col">
        <h4 className="footer-heading">Contact</h4>
        <div className="footer-contact">
          <p><FaEnvelope /> massmakersvc@gmail.com</p>
          <p><FaPhoneAlt /> +91 63799 98181</p>
          <p><FaMapMarkerAlt /> <a href="https://maps.app.goo.gl/q7e6KZxBXgrvw3Y9A" target="_blank" rel="noreferrer">MassMakers Facility — open map</a></p>
        </div>
        <div className="footer-socials">
          <a href="https://www.instagram.com/mass_makers_ppy" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.youtube.com/@mass_makers" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://wa.me/916379998181" aria-label="WhatsApp"><IoLogoWhatsapp /></a>
        </div>
      </div>
    </div>

    <div className="footer-sub">
      <span>© 2026 MassMakers Volleyball Club. All rights reserved.</span>
      <div className="footer-sub-links">
        <a href="#">Privacy Policy</a>
        <span className="dot">•</span>
        <a href="#">Terms of Use</a>
        <span className="dot">•</span>
        <span>Practice: Mon–Fri 6a–10p • Sat 8a–8p • Sun 10a–6p</span>
      </div>
      <div className="footer-actions">
        <a className="to-top" href="#home" aria-label="Back to top"><FaArrowUp /></a>
        <a className="wa-fab" href="https://wa.me/916379998181" aria-label="WhatsApp chat"><IoLogoWhatsapp /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
