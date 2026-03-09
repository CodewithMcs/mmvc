import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const CallToAction = () => (
  <section className="cta-banner">
    <div className="cta-content">
      <div>
        <p className="kicker">Join the Makers</p>
        <h3>Want to scrimmage, sponsor, or try out?</h3>
        <p className="subtitle">We love new competition and community partners. Tell us what you have in mind.</p>
      </div>
      <div className="cta-actions">
        <Link className="primary-btn" to="/contact">Reach Out</Link>
        <Link className="ghost-btn" to="/about">Club Overview</Link>
      </div>
    </div>
  </section>
);

export default CallToAction;
