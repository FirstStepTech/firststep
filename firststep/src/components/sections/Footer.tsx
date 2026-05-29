import FirstStepLogo from '@/components/branding/FirstStepLogo';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Services', 'Process', 'Testimonials'],
  Solutions: ['Business Consultancy', 'Company Setup', 'Strategy Support', 'Proposal Request'],
  Resources: ['FAQs', 'Consultation', 'Project Inquiry', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--card-border)', background: 'var(--background)' }}>
      <div className="container-premium px-4 py-16 sm:px-6 lg:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <FirstStepLogo />
            <p className="mt-5 max-w-xl text-sm leading-7" style={{ color: 'var(--muted-foreground)' }}>
              FirstStep presents business consultancy and professional company support through a premium website experience designed to build trust, clarity, and strong first impressions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border p-4" style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}>
                <Mail className="h-4 w-4" style={{ color: 'var(--accent-strong)' }} />
                <div className="mt-3 text-sm font-medium" style={{ color: 'var(--foreground)' }}>Email</div>
                <div className="mt-1 text-sm break-all" style={{ color: 'var(--muted-foreground)' }}>firststepwebtech@gmail.com</div>
              </div>
              <div className="rounded-2xl border p-4" style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}>
                <Phone className="h-4 w-4" style={{ color: 'var(--accent-strong)' }} />
                <div className="mt-3 text-sm font-medium" style={{ color: 'var(--foreground)' }}>Phone</div>
                <div className="mt-1 text-sm" style={{ color: 'var(--muted-foreground)' }}>Available via inquiry form</div>
              </div>
              <div className="rounded-2xl border p-4" style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}>
                <MapPin className="h-4 w-4" style={{ color: 'var(--accent-strong)' }} />
                <div className="mt-3 text-sm font-medium" style={{ color: 'var(--foreground)' }}>Support</div>
                <div className="mt-1 text-sm" style={{ color: 'var(--muted-foreground)' }}>24/7 availability</div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/firststep_webtech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition hover:bg-[var(--accent-soft)] cursor-pointer"
                style={{ borderColor: 'var(--card-border)', background: 'var(--surface)', color: 'var(--foreground)' }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <span>@firststep_webtech</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{title}</h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm transition" style={{ color: 'var(--muted-foreground)' }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm md:flex-row md:items-center" style={{ borderColor: 'var(--card-border)', color: 'var(--muted-foreground)' }}>
          <p>© {new Date().getFullYear()} FirstStep. All rights reserved.</p>
          <p>Step today, succeed tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
