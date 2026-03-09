import SectionHeader from './SectionHeader';
import { news } from '../data/content';

const News = () => (
  <section className="section news" id="news">
    <SectionHeader kicker="News" title="Volleyball News" subtitle="Latest stories and tours around the sport." />
    <div className="news-grid">
      {news.map((item) => (
        <a key={item.title} href={item.link} className="news-card card" target="_blank" rel="noreferrer">
          <p className="kicker">{item.source}</p>
          <h3>{item.title}</h3>
          <span className="news-link">Read story ↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default News;
