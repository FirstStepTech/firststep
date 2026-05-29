import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import FirstStepLogo from '@/components/branding/FirstStepLogo';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#features' },
  { label: 'Why FirstStep', href: '#showcase' },
  { label: 'Process', href: '#timeline' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScrollProgress();

  useEffect(() => {
    setIsScrolled(scrollY > 24);
  }, [scrollY]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b bg-[color:var(--background-elevated)]/80 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.12)]'
          : 'bg-transparent'
      )}
      style={{ borderColor: 'var(--card-border)' }}
    >
      <div className="container-premium px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a href="#top" className="shrink-0">
            <FirstStepLogo />
          </a>

          <div className="hidden lg:flex items-center gap-1 rounded-full px-2 py-2" style={{ border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.03)' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm transition hover:bg-black/5"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" size="sm" onClick={() => window.dispatchEvent(new Event('open-consultation'))}>
              Book Consultation
            </Button>
          </div>

          <button
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl"
            style={{ border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.04)' }}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <motion.span className="block h-0.5 w-5 rounded" style={{ background: 'var(--foreground)' }} animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} />
              <motion.span className="block h-0.5 w-5 rounded" style={{ background: 'var(--foreground)' }} animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
              <motion.span className="block h-0.5 w-5 rounded" style={{ background: 'var(--foreground)' }} animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-xl"
            style={{ borderTop: '1px solid var(--card-border)', background: 'var(--background-elevated)' }}
          >
            <div className="container-premium px-4 py-5 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 transition hover:bg-black/5"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="grid grid-cols-1 gap-3 pt-3">
                <Button variant="primary" onClick={() => { setIsOpen(false); window.dispatchEvent(new Event('open-consultation')); }}>
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
