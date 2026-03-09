import SectionHeader from './SectionHeader';
import { faq } from '../data/content';

const FAQ = () => (
  <section className="section faq" id="faq">
    <SectionHeader kicker="Rules" title="Volleyball Basics" subtitle="Quick answers for new fans and players." />
    <div className="faq-grid">
      {faq.map((item) => (
        <div key={item.q} className="faq-card card glass">
          <h4>{item.q}</h4>
          <p>{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
