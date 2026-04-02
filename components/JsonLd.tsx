export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Jevus AI',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI voice receptionist for home service businesses. Answers calls 24/7, books appointments, and dispatches jobs for plumbers, HVAC, and electricians.',
    url: 'https://jevus.ai',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '99',
      highPrice: '499',
      priceCurrency: 'USD',
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

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://jevus.ai${item.url}`,
    })),
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareCompany',
    name: 'Jevus AI',
    description: 'AI voice receptionist for home service businesses',
    url: 'https://jevus.ai',
    telephone: '+1-567-33-JEVUS',
    email: 'info@jevus.ai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Largo',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    sameAs: [],
  };
}

export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
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
