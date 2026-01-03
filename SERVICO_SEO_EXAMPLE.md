/**
 * Exemplo de como adicionar metadata dinâmica e SEO Schema
 * à página de serviços individuais
 * 
 * NOTA: Quando usar "use client", a metadata deve ser definida
 * em um layout.tsx separado ou em um arquivo de server-side.
 */

// OPÇÃO 1: Se converter ServicePage para Server Component
// Remover "use client" e mover para layout.tsx
/*
import type { Metadata } from "next"
import { generateServiceSchema, SEO_CONFIG } from "@/lib/seo-config"
import { getServiceById } from "@/data/services"

interface ServicePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceById(params.id)

  if (!service) {
    return {
      title: "Serviço não encontrado - SG Digital",
    }
  }

  return {
    title: `${service.title} - SG Digital`,
    description: service.description,
    openGraph: {
      title: `${service.title} - SG Digital`,
      description: service.description,
      url: `${SEO_CONFIG.siteUrl}/servicos/${params.id}`,
      type: "website",
      images: [
        {
          url: `${SEO_CONFIG.siteUrl}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - SG Digital`,
      description: service.description,
      images: [`${SEO_CONFIG.siteUrl}${service.image}`],
    },
  }
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceById(params.id)

  // JSON-LD Schema
  const schema = generateServiceSchema({
    name: service.title,
    description: service.description,
    image: service.image,
    url: `/servicos/${params.id}`,
  })

  // ... resto do componente
}
*/

// OPÇÃO 2: Adicionar Schema inline no Client Component
// (Se não conseguir converter para Server Component)
/*
export default function ServiceDetailPage() {
  const params = useParams()
  const service = getServiceById(params.id as string)

  useEffect(() => {
    if (service) {
      const schema = generateServiceSchema({
        name: service.title,
        description: service.description,
        image: service.image,
        url: `/servicos/${params.id}`,
      })

      // Criar script tag dinamicamente
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)

      // Atualizar document title
      document.title = `${service.title} - SG Digital`
      // Meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', service.description)
      }

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [service, params.id])

  // ... resto do componente
}
*/

// OPÇÃO 3: Layout.tsx separado para a rota [id]
// Ficheiro: app/servicos/[id]/layout.tsx
/*
import type { Metadata } from "next"
import { generateServiceSchema, SEO_CONFIG } from "@/lib/seo-config"
import { getServiceById } from "@/data/services"

interface ServiceLayoutProps {
  children: React.ReactNode
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = getServiceById(params.id)

  if (!service) {
    return { title: "Serviço não encontrado" }
  }

  return {
    title: `${service.title} - SG Digital`,
    description: service.description,
    keywords: [service.title, "SG Digital", "Angola", ...service.keywords || []],
    openGraph: {
      title: `${service.title} - SG Digital`,
      description: service.description,
      url: `${SEO_CONFIG.siteUrl}/servicos/${params.id}`,
      type: "website",
      images: [
        {
          url: `${SEO_CONFIG.siteUrl}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  }
}

export default function ServiceLayout({ children, params }: ServiceLayoutProps) {
  const service = getServiceById(params.id)

  return (
    <>
      {service && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateServiceSchema({
                name: service.title,
                description: service.description,
                image: service.image,
                url: `/servicos/${params.id}`,
              })
            ),
          }}
        />
      )}
      {children}
    </>
  )
}
*/
