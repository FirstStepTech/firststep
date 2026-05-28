import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section id="overview" className="section hero-section">
      <div className="container hero-container">
        <div className="brand-script" style={{ fontSize: '2.6rem', marginBottom: 6 }}>
          First Step
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-title"
        >
          Elegant websites for serious businesses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-lead"
        >
          We design and develop professional websites that convert visitors into clients. Clean, fast, and focused on growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-actions"
        >
          <Button variant="primary" className="rounded-full whitespace-nowrap" onClick={() => window.dispatchEvent(new Event('open-consultation'))}>
            Start a Project <ChevronRight className="h-4 w-4" />
          </Button>
          <a href="#work" className="btn btn-outline rounded-full whitespace-nowrap">See Our Work</a>
        </motion.div>
      </div>
    </section>
  );
}
