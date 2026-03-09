import { stats } from '../data/content';

const StatsBar = () => (
  <div className="stats-bar">
    {stats.map((item) => (
      <div key={item.label} className="stat">
        <p className="stat-value">{item.value}</p>
        <p className="stat-label">{item.label}</p>
        <span className="stat-detail">{item.detail}</span>
      </div>
    ))}
  </div>
);

export default StatsBar;
