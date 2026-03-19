import { useRef, useEffect, useState } from 'react';
import { useInView } from 'motion/react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { AnimatedCounterProps } from '@/types';

export const AnimatedCounter = ({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration, prefersReducedMotion]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-display text-gold mb-2">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-xs uppercase tracking-[0.15em] text-warm-gray font-sans">{label}</p>
    </div>
  );
};
