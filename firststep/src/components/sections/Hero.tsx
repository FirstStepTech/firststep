import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, LayoutTemplate } from 'lucide-react';
import { Button, MagneticButton } from '@/components/ui/Button';
import FirstStepLogo from '@/components/branding/FirstStepLogo';

const trustItems = ['Custom Website Design', 'Responsive Development', 'UI/UX Strategy', 'Ongoing Web Support'];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(79,124,255,0.12), transparent 38%), linear-gradient(180deg, var(--background) 0%, var(--background-elevated) 48%, var(--background) 100%)' }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <div className="container-premium relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm"
              style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)' }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
              Premium web development for modern brands
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-3xl text-[2.05rem] font-semibold tracking-[-0.04em] leading-[1.04] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.8rem]"
              style={{ color: 'var(--foreground)' }}
            >
              We build modern websites that help brands look more trusted online.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-2xl text-[15px] leading-7 sm:text-[17px] sm:leading-8"
              style={{ color: 'var(--muted-foreground)' }}
            >
              FirstStep designs and develops business websites, startup sites, landing pages, and premium web experiences with responsive layouts, clean UI, and strong brand presentation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <MagneticButton>
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-5 w-5" />} onClick={() => window.dispatchEvent(new Event('open-consultation'))}>
                  Book Consultation
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="secondary" size="lg" onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Services
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: 'var(--card-border)', background: 'var(--surface-soft)', color: 'var(--foreground)' }}>
                  <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] blur-3xl sm:-inset-8" style={{ background: 'rgba(79,124,255,0.10)' }} />
            <div className="relative overflow-hidden rounded-[1.7rem] border p-4 shadow-[0_24px_70px_rgba(0,0,0,0.10)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-6" style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}>
              <div className="rounded-[1.4rem] border p-5 sm:rounded-[1.6rem] sm:p-8 md:p-9" style={{ borderColor: 'var(--card-border)', background: 'var(--background-elevated)' }}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <FirstStepLogo className="items-start" />
                  <div className="rounded-full px-5 py-2 text-[10px] font-medium sm:text-xs" style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)', textAlign: 'center' }}>
                    Web & App Development Studio
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:mt-8">
                  <motion.div whileHover={{ y: -4 }} className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: 'var(--card-border)', background: 'rgba(255,255,255,0.02)' }}>
                    <div className="flex items-center gap-3" style={{ color: 'var(--foreground)' }}>
                      <LayoutTemplate className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                      <span className="text-sm font-medium sm:text-base">Premium UI Design</span>
                    </div>
                    <p className="mt-3 text-sm leading-6" style={{ color: 'var(--muted-foreground)' }}>
                      Elegant interfaces crafted to match your brand and improve the way users experience your business online.
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4 }} className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: 'var(--card-border)', background: 'rgba(255,255,255,0.02)' }}>
                    <div className="flex items-center gap-3" style={{ color: 'var(--foreground)' }}>
                      <Code2 className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                      <span className="text-sm font-medium sm:text-base">Custom Development</span>
                    </div>
                    <p className="mt-3 text-sm leading-6" style={{ color: 'var(--muted-foreground)' }}>
                      Fast, scalable, mobile-friendly websites built for businesses, startups, agencies, and product brands.
                    </p>
                  </motion.div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8">
                  {[
                    ['10+', 'Projects'],
                    ['100%', 'Satisfaction'],
                    ['24/7', 'Support'],
                  ].map(([value, label], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 + index * 0.08 }}
                      className="rounded-2xl border p-3 text-center sm:p-4"
                      style={{ borderColor: 'var(--card-border)', background: 'rgba(255,255,255,0.02)' }}
                    >
                      <div className="text-lg font-semibold sm:text-2xl" style={{ color: 'var(--foreground)' }}>{value}</div>
                      <div className="mt-1 text-[11px] sm:text-xs" style={{ color: 'var(--muted-foreground)' }}>{label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
