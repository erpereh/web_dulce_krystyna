// Navigation types
export interface NavLink {
  label: string;
  href: string;
}

// Section types
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

// Animation types
export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

// Button types
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

// Creation category types
export interface CreationCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

// Gallery types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
  width: number;
  height: number;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}

// Animated counter types
export interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

// Lightbox types
export interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

// Layout types
export interface LayoutProps {
  children: React.ReactNode;
}
