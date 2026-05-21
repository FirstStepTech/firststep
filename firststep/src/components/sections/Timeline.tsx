import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery Call',
    text: 'We understand your website goals, business type, target audience, and visual expectations.',
  },
  {
    title: 'UI Planning',
    text: 'We structure content, layout sections, visual hierarchy, and user flow before development begins.',
  },
  {
    title: 'Development',
    text: 'Your website is built with responsive code, polished UI, and performance-focused implementation.',
  },
  {
    title: 'Launch & Support',
    text: 'After launch, we continue with updates, refinements, and support whenever your business needs it.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full px-4 py-2 text-xs sm:text-sm" style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
            Our web process
          </div>
          <h2 className="mt-5 text-[2rem] font-semibold tracking-[-0.04em] leading-tight sm:text-[2.6rem] md:text-[3.1rem]" style={{ color: 'var(--foreground)' }}>
            A simple path from idea to launch.
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="absolute left-5 top-0 bottom-0 w-px md:left-1/2" style={{ background: 'linear-gradient(180deg, rgba(79,124,255,0.42), rgba(79,124,255,0.06))' }} />
          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative grid gap-4 md:grid-cols-2"
                >
                  <div className={isEven ? 'md:pr-10' : 'md:col-start-2 md:pl-10'}>
                    <div className="ml-12 rounded-[1.5rem] border p-5 md:ml-0 sm:p-6" style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}>
                      <div className="text-xs font-medium uppercase tracking-[0.24em] sm:text-sm" style={{ color: 'var(--accent-text)' }}>Step {index + 1}</div>
                      <h3 className="mt-3 text-xl font-semibold sm:text-2xl" style={{ color: 'var(--foreground)' }}>{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--muted-foreground)' }}>{step.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-5 top-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2" style={{ background: 'var(--accent)', boxShadow: '0 0 0 6px rgba(79,124,255,0.10)' }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
