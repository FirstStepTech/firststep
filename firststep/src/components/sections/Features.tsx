import { motion } from 'framer-motion';
import { Globe, LayoutTemplate, ShoppingCart, Smartphone, Wrench, Zap } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/Card';

const features = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional company websites designed to build trust, showcase services, and convert visitors into inquiries.',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description: 'High-converting landing pages for campaigns, product launches, startups, and marketing funnels.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce UI',
    description: 'Storefront experiences with modern layout, clear navigation, and premium product presentation.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Pixel-clean layouts that work beautifully across mobile, tablet, laptop, and desktop screens.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimized builds, smoother interactions, and lightweight experiences that feel polished and fast.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Continuous updates, fixes, UI refinements, and support to keep your website current and dependable.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex rounded-full px-4 py-2 text-xs sm:text-sm" style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
            Web development services
          </div>
          <h2 className="text-[2rem] font-semibold tracking-[-0.04em] leading-tight sm:text-[2.45rem] md:text-[2.95rem]" style={{ color: 'var(--foreground)' }}>
            Services designed for brands that need a stronger digital presence.
          </h2>
          <p className="mt-4 text-base leading-7 sm:text-[17px] sm:leading-8" style={{ color: 'var(--muted-foreground)' }}>
            We create premium websites for businesses, startups, agencies, products, and personal brands with strong design quality and responsive performance.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <SpotlightCard className="glow-card h-full p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl sm:h-12 sm:w-12" style={{ background: 'linear-gradient(180deg, rgba(79,124,255,0.16), rgba(79,124,255,0.06))', boxShadow: 'inset 0 0 0 1px rgba(79,124,255,0.14)' }}>
                    <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold sm:text-xl" style={{ color: 'var(--foreground)' }}>{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--muted-foreground)' }}>{feature.description}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
