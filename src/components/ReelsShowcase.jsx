import SectionHeader from './SectionHeader';
import { reels } from '../data/content';

const ReelsShowcase = () => (
  <section className="section reels" id="reels">
    <SectionHeader kicker="Social" title="Reels & Shorts" subtitle="Quick-hit highlights on Instagram and YouTube." />
    <div className="reels-grid">
      {reels.map((item) => (
        <div key={item.platform + item.url} className="reel-card card">
          {item.embed ? (
            <div className="reel-embed">
              <iframe
                src={item.embed}
                title={item.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : null}
          <div className="reel-body">
            <div className="reel-meta">
              <span className="reel-badge">{item.badge}</span>
              <span className="reel-platform">{item.platform}</span>
            </div>
            <h3>{item.title}</h3>
          </div>
          <div className="reel-actions">
            <a className="primary-btn tiny" href={item.url} target="_blank" rel="noreferrer">Watch</a>
            <a className="ghost-btn tiny" href={item.url} target="_blank" rel="noreferrer">More</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ReelsShowcase;
