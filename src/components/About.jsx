import SectionHeader from './SectionHeader';
import { mission } from '../data/content';
import { asset } from '../utils/asset';

const About = () => (
  <section className="section about" id="about">
    <SectionHeader kicker="About" title="Built for Speed, Heart, and Teamwork" subtitle="MassMakers Volleyball Club" />
    <div className="about-grid">
      <div className="card glass">
        <h3>Who We Are</h3>
        <p>{mission.about}</p>
      </div>
      <div className="card glass">
        <h3>Mission & Vision</h3>
        <p>{mission.vision}</p>
        <ul className="pill-list">
          <li>Fast transitions</li>
          <li>Team-first mindset</li>
          <li>Relentless defense</li>
          <li>Community impact</li>
        </ul>
      </div>
      <div className="card coach">
        <img src={asset(mission.coach.photo)} alt={mission.coach.name} loading="lazy" />
        <div>
          <p className="kicker">Head Coach</p>
          <h3>{mission.coach.name}</h3>
          <p className="coach-role">{mission.coach.role}</p>
          <p>{mission.coach.bio}</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
