import { motion } from 'framer-motion';
import FirstStepLogo from '@/components/branding/FirstStepLogo';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07111d]"
    >
      <div className="text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center">
          <FirstStepLogo />
        </motion.div>
        <div className="mx-auto mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            onAnimationComplete={onComplete}
            className="h-full origin-left bg-[linear-gradient(90deg,#38bdf8,#0ea5e9,#ffffff)]"
          />
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-400">
          Loading <span className="brand-script">FirstStep</span>
        </p>
      </div>
    </motion.div>
  );
}
