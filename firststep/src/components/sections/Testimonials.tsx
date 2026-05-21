import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Durga Satisk',
    role: 'Business Consultancy Client',
    rating: '4.8/5',
    quote: 'FirstStep handled everything with excellent clarity and professionalism. The team was responsive, guided us at every step, and made the whole consultancy experience smooth and premium.',
  },
  {
    name: 'Ganesh Kumar',
    role: 'Startup Advisory Client',
    rating: '4.9/5',
    quote: 'I was impressed by how well-organized and supportive the process was. From planning to communication, FirstStep gave our company confidence and a very polished service experience.',
  },
  {
    name: 'Aditya Sharma',
    role: 'Growth Strategy Client',
    rating: '5/5',
    quote: 'The UI of the experience, the communication, and the quality of service all felt premium. FirstStep really helped us present and plan our business in a much stronger way.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full px-4 py-2 text-sm" style={{ border: '1px solid var(--accent-border)', background: 'var(--accent-soft)', color: 'var(--accent-text)' }}>
            Testimonials
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl" style={{ color: 'var(--foreground)' }}>
            Real feedback from real clients.
          </h2>
          <p className="mt-5 text-lg leading-8" style={{ color: 'var(--muted-foreground)' }}>
            Trusted by businesses that value premium service, clean communication, and dependable execution.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glow-card rounded-[1.8rem] border p-7"
              style={{ borderColor: 'var(--card-border)', background: 'var(--surface)' }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--accent-text)' }}>{item.rating}</div>
              </div>
              <p className="mt-6 text-sm leading-7 md:text-[15px]" style={{ color: 'var(--muted-foreground)' }}>
                “{item.quote}”
              </p>
              <div className="mt-8 border-t pt-5" style={{ borderColor: 'var(--card-border)' }}>
                <div className="font-medium" style={{ color: 'var(--foreground)' }}>{item.name}</div>
                <div className="mt-1 text-sm" style={{ color: 'var(--muted-foreground)' }}>{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
