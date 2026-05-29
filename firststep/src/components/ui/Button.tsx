import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading,
  icon,
  children,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3.5 text-sm sm:px-7 sm:text-base',
  };

  const variantClasses = {
    primary: 'text-white border-transparent hover:brightness-110',
    secondary: 'hover:brightness-[1.03]',
    ghost: 'hover:bg-black/5',
    neon: 'text-white border-transparent hover:brightness-110',
  };

  const styles = {
    primary: {
      background: 'linear-gradient(180deg, var(--accent), var(--accent-strong))',
      border: '1px solid rgba(56,189,248,0.28)',
      color: '#ffffff',
      boxShadow: '0 12px 30px rgba(14,165,233,0.20)',
    },
    secondary: {
      background: 'var(--button-secondary-bg)',
      border: '1px solid var(--card-border)',
      color: 'var(--button-secondary-text)',
      boxShadow: '0 8px 18px rgba(10,18,32,0.05)',
    },
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--foreground)',
      boxShadow: 'none',
    },
    neon: {
      background: 'linear-gradient(180deg, #7dd3fc, #0284c7)',
      border: '1px solid rgba(56,189,248,0.28)',
      color: '#ffffff',
      boxShadow: '0 12px 30px rgba(14,165,233,0.20)',
    },
  };

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        style={styles[variant]}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300',
          sizeClasses[size],
          variantClasses[variant],
          (loading || disabled) && 'pointer-events-none opacity-70',
          className
        )}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {!loading && icon && <span>{icon}</span>}
        <span>{children}</span>
      </button>
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('inline-block transition-transform duration-200 ease-out', className)}
    >
      {children}
    </div>
  );
}
