const PageHero = ({ eyebrow, title, children }) => (
  <section className="page-hero">
    <div className="wrap">
      <p className="eyebrow eyebrow--light reveal" style={{ '--d': '0ms' }}>{eyebrow}</p>
      <h1 className="reveal" style={{ '--d': '90ms' }}>{title}</h1>
      {children && <div className="page-hero__lead reveal" style={{ '--d': '180ms' }}>{children}</div>}
    </div>
  </section>
);

export default PageHero;
