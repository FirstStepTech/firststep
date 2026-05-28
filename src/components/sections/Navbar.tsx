import ThemeToggle from '@/components/theme/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="site-nav w-full fixed top-0 z-[60]">
      <div className="floating-nav-wrap">
        <div className="nav-shell nav-glass">
          <a href="#overview" className="site-logo brand-script nav-logo" style={{ fontSize: '1.4rem' }}>
            First Step
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link text-[13px]">
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button variant="primary" size="sm" className="min-w-[148px] px-5 text-[13px]" onClick={() => window.dispatchEvent(new Event('open-consultation'))}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
