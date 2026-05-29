import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Lenis from 'lenis';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Showcase from '@/components/sections/Showcase3D';
import Stats from '@/components/sections/Stats';
import Timeline from '@/components/sections/Timeline';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import InquiryModal from '@/components/forms/InquiryModal';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTheme } from '@/hooks/useTheme';

function ScrollProgressBar() {
  const { progress } = useScrollProgress();
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-black/5">
      <motion.div
        className="h-full bg-[linear-gradient(90deg,#38bdf8,#0ea5e9,#bae6fd)]"
        style={{ scaleX: progress, transformOrigin: 'left' }}
      />
    </div>
  );
}

function NoiseOverlay() {
  return <div className="noise-overlay" />;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [lenisReady, setLenisReady] = useState(false);
  const [inquiryType, setInquiryType] = useState<'consultation' | 'proposal' | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const { theme, toggleTheme } = useTheme();

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
    setLenisReady(true);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (!lenisReady) return;

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
  }, [lenisReady]);

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
          success: { iconTheme: { primary: '#0ea5e9', secondary: '#fff' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="relative min-h-screen overflow-hidden text-[var(--foreground)]"
          style={{ background: 'var(--background)' }}
        >
          <ScrollProgressBar />
          <NoiseOverlay />

          <div className="fixed bottom-6 right-6 z-[70]">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>

          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <Features />
              <Stats />
              <Showcase />
              <Timeline />
              <Testimonials />
              <Pricing />
              <FAQ />
              <CTA />
            </main>
            <Footer />
          </div>

          <InquiryModal
            open={inquiryType !== null}
            type={inquiryType ?? 'consultation'}
            onClose={() => setInquiryType(null)}
          />
        </motion.div>
      )}
    </>
  );
}
