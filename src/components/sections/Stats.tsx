const stats = [
  ['10+', 'Projects Completed'],
  ['100%', 'Client Satisfaction'],
  ['5+', 'Industries Served'],
  ['24/7', 'Support Availability'],
];

export default function Stats() {
  return (
    <section id="about" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {stats.map(([value, label]) => (
            <div key={label} style={{ minWidth: 160 }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 700 }}>{value}</div>
              <div className="small-muted" style={{ marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
