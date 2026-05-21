import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="section-padding pt-0">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border px-6 py-12 text-center sm:px-8 md:px-12 md:py-16"
          style={{ borderColor: 'var(--card-border)', background: 'linear-gradient(135deg, #08263d 0%, #0369a1 100%)', boxShadow: '0 28px 80px rgba(0,0,0,0.10)' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-[2rem] font-semibold tracking-[-0.04em] leading-tight text-white sm:text-[2.6rem] md:text-[3.1rem]">
              Ready to build a website that looks premium and works better?
            </h2>
            <p className="mt-4 text-base leading-7 text-sky-50/85 sm:text-lg sm:leading-8">
              Let FirstStep design and develop a professional website experience for your company, startup, service business, or brand.
            </p>
            <div className="mt-8 flex justify-center">
              <Button variant="secondary" size="lg" icon={<ArrowRight className="h-5 w-5" />} onClick={() => window.dispatchEvent(new Event('open-consultation'))}>
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
