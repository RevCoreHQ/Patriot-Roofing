import { siteConfig } from '@/data/site-config';

export function localBusinessSchema() {
  const sameAs = [
    siteConfig.url,
    siteConfig.social.google,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.yelp,
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RoofingContractor'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: siteConfig.ogImage || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street || undefined,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.8243,
      longitude: -80.2534,
    },
    hasMap: siteConfig.social.google,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'NC',
      availableLanguage: 'English',
    },
    areaServed: [
      { '@type': 'City', name: 'Lexington', addressRegion: 'NC' },
      { '@type': 'City', name: 'Greensboro', addressRegion: 'NC' },
      { '@type': 'City', name: 'Winston-Salem', addressRegion: 'NC' },
      { '@type': 'City', name: 'High Point', addressRegion: 'NC' },
      { '@type': 'City', name: 'Thomasville', addressRegion: 'NC' },
      { '@type': 'City', name: 'Kernersville', addressRegion: 'NC' },
      { '@type': 'City', name: 'Clemmons', addressRegion: 'NC' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs,
    priceRange: '$$',
    knowsAbout: [
      'Roofing Installation',
      'Roof Replacement',
      'Roofing Repair',
      'Storm Damage Repair',
      'Kitchen Renovation',
      'Bathroom Renovation',
      'Home Repair',
    ],
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#business`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'State',
      name: 'North Carolina',
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function howToSchema(
  steps: { name: string; text: string }[],
  name: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
