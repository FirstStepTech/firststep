import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const plans = [
  { name: 'Landing Page', tag: 'For campaigns & launches', description: 'Single-page website focused on conversions.', features: ['Hero, sections, CTA', 'Mobile-optimized', 'Fast delivery'] },
  { name: 'Business Website', tag: 'Best for brands', description: 'Multi-section website for services and trust.', features: ['Homepage + pages', 'Inquiry form', 'Responsive UI'] },
  { name: 'Custom Project', tag: 'Tailored', description: 'Fully custom web projects and feature work.', features: ['Custom layouts', 'Advanced UI', 'Ongoing support'] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-header">
          <div className="section-kicker">Website packages</div>
          <h2 className="section-title">Clear packages for different goals</h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Choose a package and request a proposal — we will respond with timeline and pricing.
          </p>
        </div>

        <div className="price-grid">
          {plans.map((plan) => (
            <div key={plan.name} className="glass-card price-card">
              <div className="section-kicker" style={{ letterSpacing: '0.16em' }}>{plan.tag}</div>
              <div className="price-title">{plan.name}</div>
              <div className="small-muted" style={{ marginTop: 8 }}>{plan.description}</div>

              <ul style={{ marginTop: 12, paddingLeft: 18 }} className="small-muted">
                {plan.features.map((f) => (
                  <li key={f} style={{ marginTop: 6 }}>{f}</li>
                ))}
              </ul>

              <div style={{ marginTop: 14 }}>
                <Button variant="primary" onClick={() => window.dispatchEvent(new Event('open-proposal'))}>
                  Request Proposal <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
