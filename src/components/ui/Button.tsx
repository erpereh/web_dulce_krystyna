import { m } from 'motion/react';
import type { ButtonProps } from '@/types';

const variantClasses = {
  primary:
    'bg-gold text-surface-card font-semibold hover:bg-gold-light border border-gold',
  secondary:
    'bg-transparent text-gold border border-gold hover:bg-gold hover:text-surface-card',
  ghost: 'bg-transparent text-cream border border-transparent hover:text-gold',
};

const sizeClasses = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-base',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
  target,
  rel,
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center uppercase tracking-[0.12em] font-sans transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className].join(' ');

  if (href) {
    return (
      <m.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </m.a>
    );
  }

  return (
    <m.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {children}
    </m.button>
  );
};
