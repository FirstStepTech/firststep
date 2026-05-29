import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const plans = [
  {
    name: 'Landing Page',
    tag: 'For campaigns & launches',
    description: 'A focused single-page website with strong CTA structure, modern layout, and polished responsiveness.',
    features: ['Custom hero and sections', 'Responsive mobile layout', 'Fast launch structure'],
  },
  {
    name: 'Business Website',
    tag: 'Best for brands',
    description: 'A complete website designed to showcase your company, services, trust value, and inquiry flow with premium presentation.',
    features: ['Multi-section homepage', 'Services and about pages', 'Inquiry integration', 'Premium responsive UI'],
  },
  {
    name: 'Custom Web Project',
    tag: 'Tailored for unique ideas',
    description: 'A custom website experience for agencies, startups, portfolios, and advanced business requirements.',
    features: ['Custom page structure', 'Advanced layout system', 'Unique UI direction', 'Ongoing support options'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full px-4 py-2 text-xs sm:text-sm" style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
            Website packages
          </div>
          <h2 className="mt-5 text-[2rem] font-semibold tracking-[-0.04em] leading-tight sm:text-[2.45rem] md:text-[2.95rem]" style={{ color: 'var(--foreground)' }}>
            Clear packages for different website goals.
          </h2>
          <p className="mt-4 text-base leading-7 sm:text-[17px] sm:leading-8" style={{ color: 'var(--muted-foreground)' }}>
            Pick the website package that suits your requirement and send your inquiry directly from the form.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-[1.8rem] border p-6 sm:p-7"
              style={{
                borderColor: 'var(--card-border)',
                background: 'var(--surface)',
                boxShadow: '0 18px 38px rgba(15,23,42,0.06)',
              }}
            >
              <div>
                <div className="text-sm" style={{ color: 'var(--accent-text)' }}>{plan.tag}</div>
                <h3 className="mt-3 text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>{plan.name}</h3>
              </div>

              <div className="mt-6 inline-flex rounded-2xl px-4 py-3 text-lg font-semibold" style={{ background: 'var(--surface-soft)', color: 'var(--foreground)' }}>
                Custom Quote
              </div>

              <p className="mt-5 text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--muted-foreground)' }}>
                {plan.description}
              </p>

              <div className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm sm:text-[15px]" style={{ color: 'var(--foreground)' }}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--accent-strong)' }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  variant="secondary"
                  className="w-full"
                  icon={<ArrowRight className="h-4 w-4" />}
                  onClick={() => window.dispatchEvent(new Event('open-proposal'))}
                >
                  Request Proposal
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
