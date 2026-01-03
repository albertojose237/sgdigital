/**
 * Configuração centralizada de SEO e Schema.org para o site
 * Facilita manutenção de meta tags, JSON-LD e dados estruturados
 */

export const SEO_CONFIG = {
  siteUrl: "https://sgdigital.ao",
  siteName: "SG Digital",
  siteDescription:
    "Especialista em Marketing Digital, Desenvolvimento Web, Sistemas, E-commerce e Design em Angola.",
  locale: "pt_BR",
  localeAlternate: ["pt-AO"],
  
  // Contactos
  phone: "+244951077107",
  email: "info@sgdigital.ao",
  whatsapp: "244951077107",
  
  // Localização
  address: {
    streetAddress: "Luanda",
    city: "Luanda",
    country: "AO",
    countryName: "Angola",
  },
  
  // Social Media
  social: {
    facebook: "https://www.facebook.com/sgdigital",
    instagram: "https://www.instagram.com/sgdigital",
    linkedin: "https://www.linkedin.com/company/sgdigital",
    twitter: "https://twitter.com/sgdigital",
  },
  
  // Serviços oferecidos
  services: [
    "Marketing Digital",
    "Desenvolvimento Web",
    "E-commerce",
    "Design Gráfico",
    "Sistemas Web",
    "Landing Pages",
    "Branding",
    "Social Media",
  ],
  
  // Keywords principais
  keywords: [
    "marketing digital Angola",
    "desenvolvimento web",
    "e-commerce Angola",
    "sistemas web",
    "design gráfico",
    "landing pages",
    "branding social media",
    "agência digital",
    "soluções tecnológicas",
    "website profissional",
    "loja virtual",
  ],
}

/**
 * Gera o objeto JSON-LD para LocalBusiness
 */
export function generateLocalBusinessSchema(overrides = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SEO_CONFIG.siteUrl}/#local-business`,
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.siteDescription,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.phone,
    email: SEO_CONFIG.email,
    image: `${SEO_CONFIG.siteUrl}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.address.streetAddress,
      addressCountry: SEO_CONFIG.address.country,
    },
    sameAs: Object.values(SEO_CONFIG.social),
    areaServed: SEO_CONFIG.address.country,
    priceRange: "$$",
    serviceType: SEO_CONFIG.services,
    ...overrides,
  }
}

/**
 * Gera o objeto JSON-LD para Organization
 */
export function generateOrganizationSchema(overrides = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/logo.png`,
    description: SEO_CONFIG.siteDescription,
    sameAs: Object.values(SEO_CONFIG.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SEO_CONFIG.phone,
      contactType: "Customer Service",
    },
    ...overrides,
  }
}

/**
 * Gera o objeto JSON-LD para BreadcrumbList (usado em páginas internas)
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  }
}

/**
 * Gera o objeto JSON-LD para Product/Service (para páginas de serviço individual)
 */
export function generateServiceSchema(
  service: {
    name: string
    description: string
    image: string
    url: string
  },
  overrides = {}
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    image: `${SEO_CONFIG.siteUrl}${service.image}`,
    url: `${SEO_CONFIG.siteUrl}${service.url}`,
    provider: {
      "@type": "Organization",
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
    areaServed: SEO_CONFIG.address.country,
    ...overrides,
  }
}

/**
 * Gera Open Graph meta tags como string para inserção manual
 */
export function generateOpenGraphTags(
  title: string,
  description: string,
  image: string,
  url: string,
  type = "website"
) {
  return {
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:url": url,
    "og:type": type,
    "og:site_name": SEO_CONFIG.siteName,
    "og:locale": SEO_CONFIG.locale,
  }
}
