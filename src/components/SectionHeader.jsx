const SectionHeader = ({ kicker, title, subtitle, align = 'left' }) => (
  <div className={`section-header ${align === 'center' ? 'align-center' : ''}`}>
    <p className="kicker">{kicker}</p>
    <div className="title-row">
      <h2>{title}</h2>
      <span className="accent-bar" />
    </div>
    {subtitle && <p className="subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeader;
