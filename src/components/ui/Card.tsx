import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function GlassCard({
  children,
  className,
  glow = false,
  tilt = false,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  tilt?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 40;
    const rotateY = (centerX - x) / 40;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={tilt ? handleMouseMove : undefined}
      onMouseLeave={tilt ? handleMouseLeave : undefined}
      className={cn(
        'rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 transition-all duration-300',
        glow && 'shadow-[0_20px_60px_rgba(0,0,0,0.25)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(14,165,233,0.10),transparent_55%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
