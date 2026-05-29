import { CheckCircle2 } from 'lucide-react';

const pillars = [
  { title: 'Premium Visual Design', text: 'Clean layouts and refined typography.' },
  { title: 'Responsive by Default', text: 'Works on phones, tablets, and desktops.' },
  { title: 'Brand-Focused', text: 'Websites that match your identity and goals.' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="section">
      <div className="container" style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 420px' }}>
          <div className="section-kicker">
            Why <span className="brand-script">FirstStep</span>
          </div>
          <h2 style={{ marginTop: 8 }}>Built for clarity, speed, and growth</h2>
          <p className="small-muted" style={{ marginTop: 12 }}>
            We emphasise clear structure, fast loading, and design that supports your business goals.
          </p>
        </div>

        <div style={{ flex: '1 1 320px', display: 'grid', gap: 12 }}>
          {pillars.map((p) => (
            <div key={p.title} className="stat" style={{ padding: 16 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 36, height: 36, display: 'grid', placeItems: 'center', borderRadius: 8, background: 'rgba(14,165,233,0.06)' }}>
                  <CheckCircle2 style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{p.title}</div>
                  <div className="small-muted" style={{ marginTop: 6 }}>{p.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
