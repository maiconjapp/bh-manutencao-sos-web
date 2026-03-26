import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '@/data/silos';
import type { FAQItem } from '@/data/silos';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  type?: 'website' | 'article';
  breadcrumbs?: { name: string; url: string }[];
  serviceType?: string;
  faq?: FAQItem[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  keywords = [],
  type = 'website',
  breadcrumbs = [],
  serviceType,
  faq = [],
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
    "areaServed": [
      { "@type": "City", "name": "Belo Horizonte" },
      { "@type": "Place", "name": "Pampulha, Belo Horizonte" },
      { "@type": "Place", "name": "Savassi, Belo Horizonte" },
      { "@type": "Place", "name": "Buritis, Belo Horizonte" }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
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

  const faqSchema = faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:locale" content="pt_BR" />
      <link rel="alternate" hrefLang="pt-BR" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />
      <meta name="geo.region" content="BR-MG" />
      <meta name="geo.placename" content="Belo Horizonte" />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
