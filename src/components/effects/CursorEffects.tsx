import { useEffect, useRef, useCallback } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function CursorEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mousePos = useMousePosition();
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px)`;
    }
    if (trailRef.current) {
      trailRef.current.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [mousePos]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </div>
      {/* Cursor trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99998] transition-all duration-300 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full rounded-full border border-[#38bdf8]/50 opacity-50" />
      </div>
      {/* Magnetic glow on interactive elements */}
      <style>{`
        a:hover ~ .cursor-ring,
        button:hover ~ .cursor-ring {
          width: 60px;
          height: 60px;
          background: rgba(14, 165, 233, 0.1);
          border-color: rgba(56, 189, 248, 0.5);
        }
      `}</style>
    </>
  );
}
