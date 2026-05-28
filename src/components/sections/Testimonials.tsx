import type { ReactNode } from 'react';

const testimonials: Array<{ name: string; role: string; rating: string; quote: ReactNode }> = [
  {
    name: 'Durga Satisk',
    role: 'Business Consultancy Client',
    rating: '4.8/5',
    quote: (
      <>
        <span className="brand-script">FirstStep</span> handled everything with excellent clarity and professionalism. The team was responsive and guided us at every step.
      </>
    ),
  },
  {
    name: 'Ganesh Kumar',
    role: 'Startup Advisory Client',
    rating: '4.9/5',
    quote: 'Well-organized and supportive process; communication was clear and timely.',
  },
  {
    name: 'Aditya Sharma',
    role: 'Growth Strategy Client',
    rating: '5/5',
    quote: 'Quality of service and UI felt premium. Helped us present our business much stronger.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container section-narrow">
        <div className="section-header">
          <div className="section-kicker">Testimonials</div>
          <h2 className="section-title">Real feedback from clients</h2>
          <p className="section-subtitle">
            Trusted by businesses that value clarity and dependable execution.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card card-hover testimonial-card testimonial-card-inner">
              <div className="testimonial-quote">“{t.quote}”</div>
              <div className="testimonial-meta">
                <div className="testimonial-name">{t.name}</div>
                <div className="small-muted" style={{ fontSize: '13px' }}>{t.role} • {t.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
