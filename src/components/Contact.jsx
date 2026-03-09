import { FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Contact = () => (
  <section className="section contact" id="contact">
    <SectionHeader kicker="Contact" title="Connect With the Club" subtitle="Schedule a scrimmage, sponsor, or ask about tryouts." />
    <div className="contact-grid">
      <div className="contact-info card glass">
        <div className="contact-top">
          <div className="contact-badge">
            <span className="pulse-dot" />
            <span>We're available</span>
          </div>
          <h3>Let's talk volleyball</h3>
          <p className="contact-blurb">Whether it's gym rentals, partner events, or player questions — we're here to help.</p>
        </div>

        <div className="contact-lines">
          <a href="mailto:massmakersvc@gmail.com" className="contact-line-item">
            <span className="contact-icon"><FaEnvelope /></span>
            <span>
              <strong>Email us</strong>
              <small>massmakersvc@gmail.com</small>
            </span>
          </a>
          <a href="tel:+16175552026" className="contact-line-item">
            <span className="contact-icon"><FaPhoneAlt /></span>
            <span>
              <strong>Call us</strong>
              <small>+91 63799 98181</small>
            </span>
          </a>
          <a className="contact-line-item" href="https://maps.app.goo.gl/q7e6KZxBXgrvw3Y9A" target="_blank" rel="noreferrer">
            <span className="contact-icon"><FaMapMarkerAlt /></span>
            <span>
              <strong>Visit us</strong>
              <small>MassMakers Facility — open map</small>
            </span>
          </a>
        </div>

        <div className="contact-tags">
          <span>Friendly match requests</span>
          <span>Tryout info</span>
          <span>Sponsorships</span>
          <span>Media inquiries</span>
        </div>

        <div className="contact-socials">
          <p className="mini-label">Follow us</p>
          <div className="socials">
            <a href="https://www.instagram.com/mass_makers_ppy" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.youtube.com/@mass_makers" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <form className="contact-form card glass">
        <div className="form-header">
          <h3>Send us a message</h3>
          <p>We reply within one business day.</p>
        </div>
        <div className="input-row">
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="name@email.com" required />
          </label>
        </div>
        <label>
          Topic
          <select required>
            <option value="">Select one</option>
            <option>Friendly match</option>
            <option>Player tryout</option>
            <option>Sponsorship</option>
            <option>Media</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Message
          <textarea rows="5" placeholder="Tell us how we can help..." required />
        </label>
        <button type="submit" className="primary-btn full">Send Message <span className="btn-arrow">→</span></button>
        <p className="contact-note">Your info stays private. We never share or sell your data.</p>
      </form>
    </div>
  </section>
);

export default Contact;
