import { m } from 'motion/react';
import type { StaggerContainerProps } from '@/types';

export const StaggerContainer = ({
  children,
  className,
  delayChildren = 0.2,
  staggerChildren = 0.1,
}: StaggerContainerProps) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};
