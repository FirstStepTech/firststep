import { cn } from '@/utils/cn';

export default function FirstStepLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn('flex items-center gap-2.5 sm:gap-3', className)}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:h-11 sm:w-11" style={{ background: 'linear-gradient(180deg, #0f172a, #020617)' }}>
        <div className="absolute inset-[1px] rounded-[15px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
        <div className="relative select-none text-[18px] font-black leading-none tracking-[-0.08em] sm:text-[20px]">
          <span className="bg-[linear-gradient(180deg,#2563eb,#1e40af)] bg-clip-text text-transparent">F</span>
          <span className="ml-[-2px] bg-[linear-gradient(180deg,#e2e8f0,#94a3b8)] bg-clip-text text-transparent">S</span>
        </div>
      </div>
      {!compact && (
        <div className="leading-none">
          <div className="text-base font-semibold tracking-tight sm:text-lg" style={{ color: 'var(--foreground)' }}>
            First<span style={{ color: 'var(--accent-strong)' }}>Step</span>
          </div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.28em] sm:text-[10px]" style={{ color: 'var(--muted-foreground)' }}>
            Step today, succeed tomorrow
          </div>
        </div>
      )}
    </div>
  );
}
