import { useState, useEffect, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  velocity: number;
}

export function useMousePosition() {
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    velocity: 0,
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos(prev => {
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      const velocity = Math.min(Math.sqrt(dx * dx + dy * dy) * 0.1, 3);
      return {
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: -(e.clientY / window.innerHeight) * 2 + 1,
        velocity,
      };
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return mousePos;
}
