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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[var(--foreground)] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:bg-white/[0.08]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </motion.button>
  );
}
