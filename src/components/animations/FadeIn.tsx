import { m } from 'motion/react';
import type { FadeInProps } from '@/types';

const directionVariants = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className,
}: FadeInProps) => {
  const initialOffset = directionVariants[direction];

  return (
    <m.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </m.div>
  );
};
