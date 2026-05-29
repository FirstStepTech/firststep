import { Moon, SunMedium } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: 'dark' | 'light';
  onToggle: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onToggle}
      className="theme-toggle-pill flex h-10 w-10 items-center justify-center rounded-full transition"
      style={{
        color: 'var(--foreground)',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </motion.button>
  );
}
