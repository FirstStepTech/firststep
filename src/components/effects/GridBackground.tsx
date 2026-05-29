import { useMousePosition } from '@/hooks/useMousePosition';

export default function GridBackground() {
  const mousePos = useMousePosition();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Main grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />
      {/* Gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[120px] transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.55), transparent)',
          left: `${50 + mousePos.normalizedX * 10}%`,
          top: `${50 - mousePos.normalizedY * 10}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px] transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4), transparent)',
          right: `${30 - mousePos.normalizedX * 5}%`,
          bottom: `${30 + mousePos.normalizedY * 5}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,8,0.8)_100%)]" />
    </div>
  );
}
