import { motion } from 'framer-motion';

const stats = [
  ['10+', 'Projects Completed'],
  ['100%', 'Client Satisfaction'],
  ['5+', 'Industries Served'],
  ['24/7', 'Support Availability'],
];

export default function Stats() {
  return (
    <section id="about" className="px-4 pb-4 sm:px-6 lg:px-8">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border"
          style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}
        >
          <div className="grid gap-px md:grid-cols-4" style={{ background: 'var(--card-border)' }}>
            {stats.map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="px-6 py-10 text-center md:px-8 md:py-12"
                style={{ background: 'var(--background-elevated)' }}
              >
                <div className="text-4xl font-semibold tracking-[-0.04em]" style={{ color: 'var(--foreground)' }}>{value}</div>
                <div className="mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
