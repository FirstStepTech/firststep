import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function ContactUs() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Let&apos;s build something that feels right.</h2>
          <p className="section-subtitle" style={{ marginBottom: 28 }}>
            Reach us through email or Instagram DM for project inquiries, portfolio work, and custom web development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="contact-grid"
        >
          <div className="glass-card contact-card">
            <Mail className="contact-icon" />
            <div>
              <div style={{ fontWeight: 600 }}>Email</div>
              <a href="mailto:firststepwebtech@gmail.com" className="small-muted" style={{ fontSize: '14px' }}>firststepwebtech@gmail.com</a>
            </div>
          </div>
          <div className="glass-card contact-card">
            <span className="contact-icon" aria-hidden="true">
              <InstagramIcon />
            </span>
            <div>
              <div style={{ fontWeight: 600 }}>Instagram</div>
              <a href="https://instagram.com/try.firststep" target="_blank" rel="noreferrer" className="small-muted" style={{ fontSize: '14px' }}>try.firststep</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button variant="primary" onClick={() => window.dispatchEvent(new Event('open-consultation'))}>
            Schedule a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
