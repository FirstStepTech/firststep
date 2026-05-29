import { Globe, LayoutTemplate, ShoppingCart, Smartphone, Wrench, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional company websites designed to build trust and convert visitors.',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description: 'High-converting landing pages for campaigns and product launches.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Clean storefront experiences with intuitive navigation.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Pixel-perfect layouts across mobile, tablet, and desktop.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast-loading websites optimized for user experience.',
  },
  {
    icon: Wrench,
    title: 'Support',
    description: 'Ongoing maintenance and updates to keep your site current.',
  },
];

export default function Features() {
  return (
    <section id="services" className="section">
      <div className="container section-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-kicker">Our Services</div>
          <h2 className="section-title">What we build</h2>
          <p className="section-subtitle">
            We provide end-to-end web design and development tailored to your business needs.
          </p>
        </motion.div>

        <div className="bento-grid">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const spanClass =
              idx === 0 || idx === 1
                ? 'bento-span-3'
                : idx === 2 || idx === 3 || idx === 4
                  ? 'bento-span-2'
                  : 'bento-span-6';
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`glass-card card-hover bento-card ${spanClass}`}
              >
                <div>
                  <div className="feature-header">
                    <Icon style={{ width: 24, height: 24, color: 'var(--accent)' }} />
                    <div className="feature-title">{feature.title}</div>
                  </div>
                  <div className="small-muted" style={{ fontSize: '14px', lineHeight: 1.6 }}>{feature.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
