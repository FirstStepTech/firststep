import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
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
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const styles = {
    primary: {
      background: 'var(--accent)',
      border: '1px solid var(--accent)',
      color: '#ffffff',
    },
    secondary: {
      background: 'transparent',
      border: '1px solid var(--foreground)',
      color: 'var(--foreground)',
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={styles[variant]}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 hover:opacity-80',
        sizeClasses[size],
        (loading || disabled) && 'opacity-50 cursor-not-allowed',
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
  );
}
