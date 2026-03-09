import SectionHeader from './SectionHeader';
import { winningMoments } from '../data/content';

const WinningMoments = () => (
  <section className="section wins" id="moments">
    <SectionHeader kicker="Highlights" title="Winning Moments" subtitle="Moments that shifted matches and the season." />
    <div className="wins-grid">
      {winningMoments.map((item) => (
        <div key={item.title} className="win-card card glass">
          <span className="win-tag">{item.tag}</span>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WinningMoments;
