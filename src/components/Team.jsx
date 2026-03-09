import { players } from '../data/content';
import SectionHeader from './SectionHeader';
import { asset } from '../utils/asset';

const Team = () => (
  <section className="section team" id="team">
    <SectionHeader kicker="Roster" title="The Makers on the Court" subtitle="Depth, versatility, and high-energy play." />
    <div className="player-grid">
      {players.map((player) => (
        <div className="player-card" key={player.number}>
          <div className="player-photo" style={{ backgroundImage: `url(${asset(player.photo)})` }}>
            <span className="jersey">#{player.number}</span>
            <div className="player-position-tag">
              <span>{player.emoji}</span> {player.position}
            </div>
          </div>
          <div className="player-info">
            <h4>{player.name}</h4>
            <p className="player-role">{player.position}</p>
          </div>
          <div className="player-stripe" />
        </div>
      ))}
    </div>
  </section>
);

export default Team;
