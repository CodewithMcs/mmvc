import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { gallery } from '../data/content';
import { asset } from '../utils/asset';

const Gallery = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <section className="section gallery" id="gallery">
      <SectionHeader kicker="Gallery" title="Training, Matches, Happy Moments" subtitle="A peek into our grind." />
      <div className="gallery-grid">
        {gallery.map((img, i) => (
          <button
            key={i}
            className="gallery-card"
            style={{ backgroundImage: `url(${asset(img)})` }}
            onClick={() => setOpenImage(asset(img))}
            aria-label="Open image"
          >
            <div className="gallery-overlay">MassMakers VC</div>
          </button>
        ))}
      </div>

      {openImage && (
        <div className="lightbox" onClick={() => setOpenImage(null)} role="presentation">
          <img src={openImage} alt="Gallery full view" />
          <button className="lightbox-close" onClick={() => setOpenImage(null)} aria-label="Close image">✕</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
