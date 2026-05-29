import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Lenis from 'lenis';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import Features from '@/components/sections/Features';
import SelectedWork from '@/components/sections/SelectedWork';
import Testimonials from '@/components/sections/Testimonials';
import ContactUs from '@/components/sections/ContactUs';
import Footer from '@/components/sections/Footer';
import InquiryModal from '@/components/forms/InquiryModal';
import { ArrowUp } from 'lucide-react';

function NoiseOverlay() {
  return <div className="noise-overlay" />;
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
      aria-label="Go to top"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

export default function App() {
  const [inquiryType, setInquiryType] = useState<'consultation' | 'proposal' | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (!href) return;
      const el = document.querySelector(href) as HTMLElement | null;
      if (el && lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -72 });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    const openConsultation = () => setInquiryType('consultation');
    const openProposal = () => setInquiryType('proposal');

    window.addEventListener('open-consultation', openConsultation as EventListener);
    window.addEventListener('open-proposal', openProposal as EventListener);

    return () => {
      window.removeEventListener('open-consultation', openConsultation as EventListener);
      window.removeEventListener('open-proposal', openProposal as EventListener);
    };
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--surface-solid)',
            color: 'var(--foreground)',
            border: '1px solid var(--card-border)',
            borderRadius: '1rem',
            fontSize: '14px',
            padding: '14px 18px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.16)',
          },
          success: { iconTheme: { primary: '#0097b2', secondary: '#fff' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative min-h-screen overflow-hidden text-[var(--foreground)]"
        style={{ background: 'var(--background)' }}
      >
        <NoiseOverlay />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <AboutUs />
            <Features />
            <SelectedWork />
            <Testimonials />
            <ContactUs />
            <Footer />
          </main>
        </div>

        <ScrollToTop />

        <InquiryModal
          open={inquiryType !== null}
          type={inquiryType ?? 'consultation'}
          onClose={() => setInquiryType(null)}
        />
      </motion.div>
    </>
  );
}
