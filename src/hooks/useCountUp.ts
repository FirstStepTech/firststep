import { useState, useEffect, useRef, RefObject } from 'react';

export function useCountUp(
  targetValue: number,
  duration: number = 2000,
  ref?: RefObject<HTMLDivElement | null>
): number {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = ref?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * targetValue));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [targetValue, duration, ref]);

  return count;
}
