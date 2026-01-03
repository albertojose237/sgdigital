"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Link from "next/link"

interface Service {
  id: string
  title: string
  description: string
  image: string
  icon: string
}

export function ServicesSection() {
  const headerRef = useIntersectionObserver()
  const cardsRef = useIntersectionObserver()
  
  const services: Service[] = [
    {
      id: "web-development",
      title: "Desenvolvimento de Sites",
      description:
        "Criação de sites profissionais, responsivos e otimizados para SEO, focados em resultados e experiência do usuário.",
      image: "/web-developer-coding-professional.jpg",
      icon: "code",
    },
    {
      id: "web-systems",
      title: "Sistemas Web",
      description:
        "Desenvolvimento de sistemas personalizados e integrados para automatizar processos e melhorar a gestão empresarial.",
      image: "/woman-analyzing-data-dashboard-analytics.jpg",
      icon: "chart",
    },
    {
      id: "ecommerce",
      title: "Lojas Virtuais",
      description: "Plataformas de e-commerce seguras e intuitivas para expandir suas vendas online com facilidade.",
      image: "/team-shopping-ecommerce-online-store.jpg",
      icon: "cart",
    },
    {
      id: "landing-pages",
      title: "Landing Pages",
      description: "Páginas de alta conversão projetadas para capturar leads e maximizar suas campanhas de marketing.",
      image: "/design-team-creative-meeting-multicolor.jpg",
      icon: "rocket",
    },
    {
      id: "design-multimedia",
      title: "Design & Multimídia",
      description: "Criação de identidade visual, flyers, logotipos, edição de vídeo e motion design impactantes.",
      image: "/designer-working-on-color-palette-tablet.jpg",
      icon: "palette",
    },
    {
      id: "branding-social",
      title: "Branding & Social Media",
      description:
        "Gestão estratégica da sua marca e presença online para engajar e construir relacionamentos com seu público.",
      image: "/team-brainstorming-creative-office-discussion.jpg",
      icon: "globe",
    },
  ]

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "code":
        return (
          <svg className="w-full h-full block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      case "chart":
        return (
          <svg className="w-full h-full block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      case "cart":
        return (
          <svg className="w-full h-full block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      case "rocket":
        return (
          <svg className="w-full h-full block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case "palette":
        return (
          <svg className="w-full h-full block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a6 6 0 016 6v4a6 6 0 01-6 6H7z" />
          </svg>
        )
      case "globe":
        return (
          <svg className="w-full h-full block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H7m6 0a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="servicos" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-8 sm:mb-12 fade-in-observer">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2 sm:mb-3 animate-fade-in-down">Nossos Serviços</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 animate-fade-in-up stagger-1">
            Soluções personalizadas para impulsionar o seu negócio no ambiente digital.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-amber-500 mx-auto animate-scale-in stagger-2"></div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            // Determina a cor da borda e do gradiente baseado no índice
            const isBlueBorder = index % 2 === 1; // Índices 1, 3, 5 são azuis
            const borderColor = isBlueBorder ? "border-b-4 border-blue-700" : "border-b-4 border-orange-500";
            const staggerClass = `stagger-${(index % 6) + 1}`
            const gradientOverlay = isBlueBorder 
              ? "from-blue-900/50 via-blue-700/30 to-blue-600/60"
              : "from-blue-700/50 via-blue-600/30 to-orange-600/60";
            
            return (
              <div
                key={service.id}
                className={`fade-in-observer scale-in-observer ${staggerClass}`}
              >
                <Link href={`/servicos/${service.id}`}>
                  <div className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-52 sm:h-56 md:h-64 ${borderColor} cursor-pointer`}>
                {/* Image */}
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full max-w-full h-full block object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient overlay - mais escuro e suave */}
                <div className={`absolute inset-0 bg-linear-to-b ${gradientOverlay}`}></div>

                {/* Icon - positioned top right */}
                <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full flex items-center justify-center text-blue-700 shadow-lg z-10">
                  <div className="text-blue-700 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    {renderIcon(service.icon)}
                  </div>
                </div>

                {/* Content - positioned at bottom with background gradient */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 md:p-6 text-white pt-8 sm:pt-10 md:pt-12">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed line-clamp-2">{service.description}</p>
                </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
