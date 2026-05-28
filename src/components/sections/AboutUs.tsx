import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="section">
      <div className="container section-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-kicker">About Us</div>
          <h2 className="section-title" style={{ maxWidth: 700 }}>We build modern websites for local businesses and growing brands.</h2>
          <p className="text-lead" style={{ marginBottom: 16, maxWidth: 860 }}>
            We are a team of two focused on building modern websites for local and small businesses, along with custom web development for growing brands. We specialize in portfolio design and creating user-friendly web experiences. Using MERN, AI, and modern tools, we develop interactive, high-performance websites. Contact us via DM or email.
          </p>
          <p className="small-muted" style={{ fontSize: '16px', lineHeight: 1.8, maxWidth: 820 }}>
            The goal is simple: create a clean, confident digital presence that feels premium, works smoothly, and helps you win better clients.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 20 }}>
          {[
            { number: '2', label: 'Focused team' },
            { number: 'MERN', label: 'Modern stack' },
            { number: 'AI', label: 'Smart workflows' },
            { number: 'UX', label: 'User-first design' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card card-hover"
              style={{ padding: 22, borderRadius: 20 }}
            >
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--accent)', marginBottom: 6 }}>{stat.number}</div>
              <div className="small-muted" style={{ fontSize: '14px' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
