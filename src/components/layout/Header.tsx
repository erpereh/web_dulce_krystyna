import { useState, useMemo } from 'react';
import { m, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { NAV_LINKS, WHATSAPP_URL } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

const SECTION_IDS = ['inicio', 'creaciones', 'nosotras', 'contacto'];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const activeSection = useActiveSection(SECTION_IDS);

  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(10,10,10,0)', 'rgba(10,10,10,0.95)']
  );

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = useMemo(
    () =>
      (href: string) => {
        const sectionId = href.replace('#', '');
        const isActive = activeSection === sectionId;
        return [
          'text-xs uppercase tracking-[0.12em] font-sans transition-colors duration-300',
          isActive ? 'text-gold' : 'text-cream hover:text-gold',
        ].join(' ');
      },
    [activeSection]
  );

  return (
    <m.header
      style={{ backgroundColor: headerBg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
            aria-label="Dulce Krystyna — Inicio"
          >
            <span className="font-display text-2xl md:text-3xl text-gold font-bold">DK</span>
            <span className="hidden sm:inline font-display text-lg text-cream">
              Dulce Krystyna
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-surface-card px-6 py-2.5 text-xs uppercase tracking-[0.12em] font-sans font-semibold hover:bg-gold-light transition-colors duration-300"
            >
              Hacer un encargo
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 gap-1.5 text-cream hover:text-gold transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-px bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-16 bg-surface z-40 flex flex-col justify-center items-center gap-10"
          >
            <nav aria-label="Menú móvil">
              <ul className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className={[
                          'text-2xl font-display transition-colors duration-300',
                          isActive ? 'text-gold' : 'text-cream hover:text-gold',
                        ].join(' ')}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="bg-gold text-surface-card px-8 py-3 text-sm uppercase tracking-[0.12em] font-sans font-semibold hover:bg-gold-light transition-colors duration-300"
            >
              Hacer un encargo
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
};
