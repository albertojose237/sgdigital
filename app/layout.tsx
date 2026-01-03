import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SEO_CONFIG, generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/seo-config"
import "./globals.css"
import "../styles/animations.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SG Digital - Marketing Digital & Soluções Tecnológicas em Angola",
  description: SEO_CONFIG.siteDescription,
  keywords: SEO_CONFIG.keywords,
  generator: "Dev Angolano",
  authors: [{ name: "SG Digital" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  openGraph: {
    type: "website",
    locale: SEO_CONFIG.locale,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    title: "SG Digital - Marketing Digital & Soluções Tecnológicas em Angola",
    description: SEO_CONFIG.siteDescription,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SG Digital - Marketing Digital & Soluções Tecnológicas",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sgdigital",
    title: "SG Digital - Marketing Digital & Soluções Tecnológicas em Angola",
    description: SEO_CONFIG.siteDescription,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
  verification: {
    google: "seu-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD Schema para LocalBusiness + Organization
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SEO_CONFIG.siteUrl}/#local-business`,
        name: "SG Digital",
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
      },
      {
        "@type": "Organization",
        "@id": `${SEO_CONFIG.siteUrl}/#organization`,
        name: "SG Digital",
        url: SEO_CONFIG.siteUrl,
        logo: `${SEO_CONFIG.siteUrl}/logo.png`,
        description: "Agência digital especializada em soluções de marketing e desenvolvimento web em Angola.",
        sameAs: Object.values(SEO_CONFIG.social),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SEO_CONFIG.phone,
          contactType: "Customer Service",
        },
      },
    ],
  }

  return (
    <html lang="pt-BR">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href={SEO_CONFIG.siteUrl} />
        
        {/* Alternate Links para diferentes idiomas/regiões (se aplicável) */}
        <link rel="alternate" hrefLang="pt-BR" href={SEO_CONFIG.siteUrl} />
        <link rel="alternate" hrefLang="pt-AO" href={SEO_CONFIG.siteUrl} />
        
        {/* DNS Prefetch para domínios externos (melhorar performance) */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preconnect para melhorar carregamento de fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Schema.org para rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
