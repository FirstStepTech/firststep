

const footerLinks = {
  Company: ['About Us', 'Services', 'Work'],
};

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="container">
        <div className="footer-grid">
          <div style={{ maxWidth: 420 }}>
            <div className="brand-script" style={{ fontSize: '2rem', marginBottom: 12 }}>First Step</div>
            <p className="small-muted" style={{ fontSize: '14px', lineHeight: 1.6 }}>
              We design and develop modern websites for local businesses and growing brands.
            </p>
          </div>

          <div>
            <div style={{ fontWeight: 600, marginBottom: 12 }}>Company</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><a href="#about" className="small-muted" style={{ fontSize: '14px' }}>About Us</a></li>
              <li style={{ marginTop: 8 }}><a href="#services" className="small-muted" style={{ fontSize: '14px' }}>Services</a></li>
              <li style={{ marginTop: 8 }}><a href="#work" className="small-muted" style={{ fontSize: '14px' }}>Selected Work</a></li>
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: 600, marginBottom: 12 }}>Contact</div>
            <div className="small-muted" style={{ fontSize: '14px' }}>firststepwebtech@gmail.com</div>
            <div className="small-muted" style={{ fontSize: '14px', marginTop: 6 }}>try.firststep</div>
          </div>
        </div>

        <div className="footer-sub">
          <div className="small-muted" style={{ fontSize: '13px' }}>
            © 2026 <span className="brand-script">FirstStep</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
