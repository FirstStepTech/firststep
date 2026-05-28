const steps = [
  { title: 'Discovery Call', text: 'We understand your website goals, audience, and expectations.' },
  { title: 'UI Planning', text: 'Content structure, wireframes, and user flow before build.' },
  { title: 'Development', text: 'Responsive, accessible code with performance in mind.' },
  { title: 'Launch & Support', text: 'Deploy, monitor, and iterate with ongoing support.' },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container">
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div className="small-muted">Our process</div>
          <h2 style={{ marginTop: 8 }}>A clear path from idea to launch</h2>
        </div>

        <div style={{ marginTop: 24, display: 'grid', gap: 12 }}>
          {steps.map((s, i) => (
            <div key={s.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ minWidth: 36, height: 36, borderRadius: 8, display: 'grid', placeItems: 'center', background: 'rgba(14,165,233,0.06)' }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 600 }}>{s.title}</div>
                <div className="small-muted" style={{ marginTop: 6 }}>{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
