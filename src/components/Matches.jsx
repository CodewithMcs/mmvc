import SectionHeader from './SectionHeader';
import { matches } from '../data/content';

const Matches = () => {
  const nextMatch = matches[0];
  const formatDateParts = (date) => {
    const [month, day] = date.replace(',', '').split(' ');
    return { month, day };
  };

  return (
    <section className="section matches" id="matches">
      <SectionHeader kicker="Matches" title="Upcoming Tournament" subtitle="Catch us courtside this season." />

      <div className="matches-grid">
        <div className="next-match card">
          <div className="next-match-tag">Next up</div>
          <p className="next-match-eyebrow">{nextMatch.location}</p>
          <h3 className="next-match-opponent">{nextMatch.opponent}</h3>
          <div className="next-match-meta">
            <div className="meta-block">
              <span className="meta-label">Date</span>
              <strong>{nextMatch.date}</strong>
            </div>
            <div className="meta-block">
              <span className="meta-label">First serve</span>
              <strong>{nextMatch.time}</strong>
            </div>
            <div className="meta-block">
              <span className="meta-label">Venue</span>
              <strong>{nextMatch.location}</strong>
            </div>
          </div>
          <div className="next-footnote">
            Expect a fast-tempo match - we are leaning into quick sets and aggressive serves.
          </div>
        </div>

        <div className="schedule-panel card glass">
          <div className="schedule-head">
            <div>
              <p className="kicker">Season run</p>
              <h3>Full match slate</h3>
            </div>
          </div>

          <div className="match-list">
            {matches.map((game) => {
              const { month, day } = formatDateParts(game.date);
              return (
                <div key={game.date + game.opponent} className="match-row">
                  <div className="match-date-block">
                    <span className="month">{month}</span>
                    <span className="day">{day}</span>
                  </div>
                  <div className="match-details">
                    <div className="match-header">
                      <p className="match-name">{game.opponent}</p>
                    </div>
                    <p className="match-location">{game.location}</p>
                    <p className="match-time">{game.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matches;
