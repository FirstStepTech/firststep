import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)' }}>Ready to launch your website?</h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Book a short consultation and we’ll outline a plan, timeline, and estimate for your project.
          </p>
          <div style={{ marginTop: 18, display: 'flex', justifyContent: 'center', gap: 12 }}>
            <Button variant="primary" onClick={() => window.dispatchEvent(new Event('open-consultation'))}>
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Button>
            <a href="#pricing" className="btn btn-outline">View Pricing</a>
          </div>
        </div>
      </div>
    </section>
  );
}
