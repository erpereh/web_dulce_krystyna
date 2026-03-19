import { Helmet } from 'react-helmet-async';
import type { SEOProps } from '@/types';

const SITE_NAME = 'Dulce Krystyna';
const DEFAULT_OG_IMAGE = '/og-image.jpg';
const SITE_URL = 'https://dulcekrystyna.es';

export const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
}: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME} — Pastelería Artesanal Madrid`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
