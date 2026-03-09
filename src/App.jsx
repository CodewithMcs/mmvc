import { useEffect, useMemo } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import WinningMoments from './components/WinningMoments';
import News from './components/News';
import ReelsShowcase from './components/ReelsShowcase';
import FAQ from './components/FAQ';
import Matches from './components/Matches';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { players, matches } from './data/content';

const MainPage = () => {
  const { section } = useParams();
  const location = useLocation();
  const BASE = 'https://mmvc.vercel.app';

  const canonicalUrl = useMemo(() => {
    const cleanPath = location.pathname === '/' ? '' : location.pathname;
    return `${BASE}${cleanPath}`;
  }, [location.pathname]);

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'SportsTeam',
      name: 'MassMakers VC',
      sport: 'Volleyball',
      url: BASE,
      memberOf: {
        '@type': 'SportsOrganization',
        name: 'MassMakers Volleyball Club',
      },
      member: players.map((p) => ({
        '@type': 'Person',
        name: p.name,
        jobTitle: p.position,
      })),
      event: matches.map((m) => ({
        '@type': 'SportsEvent',
        name: `MassMakers VC vs ${m.opponent}`,
        startDate: `${m.date} ${m.time}`,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: m.location,
          address: 'MassMakers Facility — see map',
        },
        competitor: [
          { '@type': 'SportsTeam', name: 'MassMakers VC' },
          { '@type': 'SportsTeam', name: m.opponent },
        ],
      })),
    }),
    [],
  );

  useEffect(() => {
    const targetId = section || 'home';
    const element = document.getElementById(targetId);
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  }, [section, location.pathname]);

  return (
    <div className="app-shell">
      <SEO
        title="MassMakers VC | Volleyball Club"
        description="Official site of MassMakers VC. Rosters, matches, news, reels, and photos from New England’s fiercest volleyball club."
        keywords={[
          'volleyball club',
          'MassMakers VC',
          'Boston volleyball',
          'matches',
          'players',
          'reels',
          'gallery',
        ]}
        url={canonicalUrl}
        canonical={canonicalUrl}
        image={`${BASE}/images/hero1.jpg`}
        type="website"
      >
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </SEO>
      <Navbar />
      <HeroCarousel />
      <StatsBar />
      <About />
      <Team />
      <Gallery />
      <WinningMoments />
      <News />
      <ReelsShowcase />
      <FAQ />
      <Matches />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/:section" element={<MainPage />} />
  </Routes>
);

export default App;
