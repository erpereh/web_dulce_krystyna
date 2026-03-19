import { m } from 'motion/react';
import type { StaggerItemProps } from '@/types';

export const StaggerItem = ({ children, className }: StaggerItemProps) => {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};
