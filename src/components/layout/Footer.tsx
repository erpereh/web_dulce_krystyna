import { FOOTER_LINKS, SOCIAL_LINKS, BUSINESS_INFO, WHATSAPP_URL } from '@/data/navigation';

export const Footer = () => {
  return (
    <footer className="bg-surface-elevated border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <a href="#inicio" className="inline-block">
              <span className="font-display text-2xl text-cream">{BUSINESS_INFO.name}</span>
            </a>
            <p className="text-gold-muted text-xs uppercase tracking-[0.15em] mt-2 mb-4">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-warm-gray text-sm leading-relaxed">
              Cada tarta es una obra de arte hecha a mano con ingredientes naturales y mucho
              cariño. Pastelería artesanal en el Ensanche de Vallecas, Madrid.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-cream text-xs uppercase tracking-[0.15em] font-sans mb-6">
              Navegación
            </h3>
            <nav aria-label="Navegación del pie de página">
              <ul className="flex flex-col gap-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-warm-gray text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream text-xs uppercase tracking-[0.15em] font-sans mb-6">
              Contacto
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <p className="text-warm-gray text-sm">{BUSINESS_INFO.address.full}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray text-sm hover:text-gold transition-colors duration-300"
              >
                WhatsApp: {BUSINESS_INFO.phoneDisplay}
              </a>
              <a
                href="https://www.instagram.com/dulceskrystyna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray text-sm hover:text-gold transition-colors duration-300"
              >
                Instagram: {BUSINESS_INFO.instagram}
              </a>
              <p className="text-warm-gray text-sm">{BUSINESS_INFO.schedule.weekdays}</p>
              <p className="text-warm-gray text-sm">{BUSINESS_INFO.schedule.weekends}</p>
            </address>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray text-sm hover:text-gold transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray text-xs">
            © 2025 {BUSINESS_INFO.name} · Pastelería Artesanal · Madrid
          </p>
          <p className="text-gold-muted text-xs tracking-[0.1em]">
            Hecho con amor en el Ensanche de Vallecas
          </p>
        </div>
      </div>
    </footer>
  );
};
