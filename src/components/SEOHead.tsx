import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, PHONE } from '@/data/silos';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  type?: 'website' | 'article';
  breadcrumbs?: { name: string; url: string }[];
  serviceType?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  keywords = [],
  type = 'website',
  breadcrumbs = [],
  serviceType,
}) => {
  const fullCanonical = `${SITE_URL}${canonical}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "S.O.S Manutenções Residenciais",
    "description": "Marido de Aluguel, Encanador, Eletricista e Desentupimento em Belo Horizonte",
    "url": SITE_URL,
    "telephone": "+5531987316012",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Ipê Mirim, 550 - Etelvina Carneiro",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "31746-110",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.810729,
      "longitude": -43.937651
    },
    "areaServed": {
      "@type": "City",
      "name": "Belo Horizonte"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": `${SITE_URL}${b.url}`
    }))
  } : null;

  const serviceSchema = serviceType ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "S.O.S Manutenções Residenciais"
    },
    "areaServed": {
      "@type": "City",
      "name": "Belo Horizonte"
    }
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
