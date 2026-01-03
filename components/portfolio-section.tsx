"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface Project {
  title: string
  category: string
  image: string
  link: string
}

interface ProjectCardProps {
  project: Project
  isHighlighted: boolean
}

function ProjectCard({ project, isHighlighted }: ProjectCardProps) {
  const heightClass = "h-48 sm:h-56"
  const paddingClass = "p-5 sm:p-6"
  const titleSizeClass = "text-base sm:text-lg"
  const categoryTextClass = "text-xs sm:text-sm"

  const handleProjectClick = () => {
    if (project.link) {
      window.open(project.link, "_blank")
    } else {
      const message = `Olá! Gostaria de mais informações sobre o projeto: *${project.title}* - ${project.category}`
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/244951077107?text=${encodedMessage}`, "_blank")
    }
  }

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-linear-to-br from-blue-700 to-blue-900 ${heightClass}`}>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-colors duration-300" />

        {/* Button */}
        <button 
          onClick={handleProjectClick}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors opacity-0 group-hover:opacity-100 text-sm cursor-pointer"
        >
          Ver Projeto
        </button>
      </div>

      {/* Content */}
      <div className={paddingClass}>
        <h3 className={`font-bold text-blue-700 mb-2 ${titleSizeClass}`}>{project.title}</h3>
        <p className={`text-gray-600 ${categoryTextClass}`}>{project.category}</p>
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const headerRef = useIntersectionObserver()
  const cardsRef = useIntersectionObserver()
  
  const projects: Project[] = [
    {
      title: "VP Artes-88",
      category: "Soluções industriais robustas para desafios complexos. Especialistas em soldadura de alta precisão, fabricação estrutural e manutenção preventiva.",
      image: "/vpartes.png",
      link: "https://vpartes.vercel.app",
    },
    {
      title: "Goias Play",
      category: "Colete feedback, analise resultados e tome decisões informadas com a plataforma de pesquisas mais intuitiva do mercado.",
      image: "/goiasplay.png",
      link: "https://www.goiasplay.com",
    },
    {
      title: "Danela Soft",
      category: "Centralize agendamentos, clientes, finanças e serviços numa única plataforma. Tenha controlo total e tome decisões com base em dados precisos.",
      image: "/danela.png",
      link: "https://danelasoft.vercel.app",
    },
    {
      title: "Treinix Solutions",
      category: "Sistema Completo de Gestão para Centros de Formação. Gerencie alunos, cursos, instrutores e finanças de forma eficiente e integrada.",
      image: "/treinix.png",
      link: "https://treinix.vercel.app",
    },
    {
      title: "SG Digital",
      category: "A SG Digital é especialista em Marketing Digital e Soluções Tecnológicas para impulsionar sua empresa em Angola. Transforme sua presença online e alcance resultados reais.",
      image: "/sgdigital.png",
      link: "https://sgdigital.vercel.app",
    },
  ]

  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 sm:mb-12 fade-in-observer">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-3 sm:mb-4 animate-fade-in-down">
            Projetos Realizados
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 animate-fade-in-up stagger-1">
            Histórias de sucesso e inovação digital em Angola.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <div key={index} className={`fade-in-observer scale-in-observer stagger-${(index % 6) + 1}`}>
              <ProjectCard key={index} project={project} isHighlighted={false} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base cursor-pointer">
            Carregar Mais Projetos
          </button>
        </div>
      </div>
    </section>
  )
}
