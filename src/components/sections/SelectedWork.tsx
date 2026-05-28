import { motion } from 'framer-motion';

export default function SelectedWork() {
  const projects = [
    {
      name: 'TechStartup Co',
      category: 'Landing Page',
      description: 'High-converting SaaS landing page that increased sign-ups by 45%.',
      image: 'https://picsum.photos/seed/firststep-landing/900/600',
    },
    {
      name: 'Local Service',
      category: 'Business Website',
      description: 'Professional services website with integrated inquiry forms and testimonials.',
      image: 'https://picsum.photos/seed/firststep-service/900/600',
    },
    {
      name: 'E-commerce Store',
      category: 'Online Store',
      description: 'Custom e-commerce platform with clean product presentation and checkout flow.',
      image: 'https://picsum.photos/seed/firststep-commerce/900/600',
    },
    {
      name: 'Consulting Firm',
      category: 'Corporate Website',
      description: 'Elegant website showcasing expertise and building client trust.',
      image: 'https://picsum.photos/seed/firststep-consulting/900/600',
    },
  ];

  return (
    <section id="work" className="section">
      <div className="container section-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-kicker">Selected Work</div>
          <h2 className="section-title">Recent builds</h2>
          <p className="section-subtitle">
            A selection of websites we've built for businesses across various industries.
          </p>
        </motion.div>

        <div className="work-grid">
          {projects.map((p, idx) => {
            const spanClass = idx === 0 ? 'work-span-6' : 'work-span-3';
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`glass-card card-hover work-card ${spanClass}`}
              >
                <div className="work-media">
                  <img src={p.image} alt={`${p.name} preview`} className="media-image" loading="lazy" />
                </div>
                <div className="work-body">
                  <div className="small-muted" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent)' }}>
                    {p.category}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '18px', marginTop: 8, marginBottom: 8 }}>{p.name}</h3>
                  <p className="small-muted" style={{ fontSize: '14px', lineHeight: 1.6 }}>{p.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
