import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { heroSlides } from '../data/content';
import { asset } from '../utils/asset';

const HeroCarousel = () => (
  <section className="hero" id="home">
    <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 4500, disableOnInteraction: false }} loop pagination={{ clickable: true }} className="hero-swiper">
      {heroSlides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className="hero-slide" style={{ backgroundImage: `url(${asset(slide.image)})` }}>
            <div className="hero-slide-overlay" />
            <div className="hero-content">
              <div className="hero-badge-tag">
                <span className="hero-volleyball-icon">🏐</span>
                MassMakers Volleyball Club
              </div>
              <h1>{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="cta-row">
                <Link className="primary-btn" to={slide.cta.link}>{slide.cta.label}</Link>
                <Link className="ghost-btn hero-ghost" to="/contact">Book for friendly match</Link>
              </div>
            </div>
            <div className="hero-net-pattern" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default HeroCarousel;
