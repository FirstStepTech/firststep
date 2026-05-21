import { motion } from 'framer-motion';
import { CheckCircle2, MonitorSmartphone, Palette, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Palette,
    title: 'Premium Visual Design',
    text: 'Clean layouts, modern color systems, refined typography, and polished interfaces designed for real businesses.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Mobile & Desktop Ready',
    text: 'Every design is carefully adapted for phones, tablets, laptops, and large desktop screens.',
  },
  {
    icon: Sparkles,
    title: 'Brand-Focused Execution',
    text: 'We turn brand identity into a website experience that feels premium, clear, and conversion-ready.',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(79,124,255,0.07), transparent 40%)' }} />
      <div className="container-premium relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex rounded-full px-4 py-2 text-xs sm:text-sm" style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
              Why choose FirstStep
            </div>
            <h2 className="mt-5 text-[2rem] font-semibold tracking-[-0.04em] leading-tight sm:text-[2.6rem] md:text-[3.1rem]" style={{ color: 'var(--foreground)' }}>
              Better websites with better clarity, better structure, and better design.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8" style={{ color: 'var(--muted-foreground)' }}>
              We focus on web design and development that helps your brand look professional, feel modern, and communicate clearly across every screen size.
            </p>

            <div className="mt-7 space-y-4">
              {['Custom layouts for your brand', 'Responsive design for every device', 'Professional UI with modern development'].map((item) => (
                <div key={item} className="flex items-center gap-3" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:gap-5"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-[1.5rem] border p-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:rounded-[1.8rem] sm:p-6"
                  style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl sm:h-12 sm:w-12" style={{ background: 'rgba(79,124,255,0.08)', boxShadow: 'inset 0 0 0 1px rgba(79,124,255,0.14)' }}>
                      <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold sm:text-lg" style={{ color: 'var(--foreground)' }}>{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--muted-foreground)' }}>{pillar.text}</p>
                    </div>
                  </div>
                  <div className="mt-5 h-px w-full" style={{ background: 'linear-gradient(90deg, rgba(79,124,255,0.28), transparent)' }} />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
