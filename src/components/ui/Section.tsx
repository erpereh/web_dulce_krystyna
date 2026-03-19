import type { SectionProps, SectionHeadingProps } from '@/types';
import { FadeIn } from '@/components/animations/FadeIn';

export const Section = ({ id, className = '', children }: SectionProps) => {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`py-16 px-6 md:py-24 md:px-12 lg:py-32 lg:px-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) => {
  const alignClass = centered ? 'text-center' : '';

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <FadeIn>
          <p className="text-gold-muted text-xs uppercase tracking-[0.2em] font-sans mb-4">
            {eyebrow}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-cream tracking-tight leading-tight">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p
            className={`mt-4 text-base md:text-lg text-warm-gray leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
};
