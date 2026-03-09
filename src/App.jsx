import { useEffect } from 'react';
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

const MainPage = () => {
  const { section } = useParams();
  const location = useLocation();

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
