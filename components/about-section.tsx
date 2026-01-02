"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function AboutSection() {
  const imageRef = useIntersectionObserver()
  const cardRef = useIntersectionObserver()

  const values = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "MISSÃO",
      description:
        "Facilitar a transformação digital de empresas em Angola, oferecendo soluções inovadoras que geram valor e crescimento sustentável.",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
      title: "VISÃO",
      description:
        "Ser a referência líder em Marketing Digital e Tecnologia em Angola, reconhecida pela excelência, inovação e impacto positivo no desenvolvimento económico.",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      title: "VALORES",
      description: "Inovação, Transparência, Ética, Colaboração, Foco no Cliente e Compromisso com Resultados.",
    },
  ]

  return (
    <section id="sobre" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left: Image with gradient overlay at bottom */}
          <div ref={imageRef} className="relative h-48 sm:h-64 md:h-80 lg:h-96 order-2 lg:order-1 rounded-2xl overflow-hidden group fade-in-observer slide-left-observer">
            <img
              src="/business-team-professional-office-discussion-analy.jpg"
              alt="Equipa SG Digital trabalhando"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Gradient overlay similar ao dos cards de serviços */}
            <div className="absolute inset-0 bg-linear-to-b from-blue-900/40 via-blue-700/30 to-blue-600/50"></div>
            
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">INOVAÇÃO E CRESCIMENTO PARA O SEU NEGÓCIO</h3>
            </div>
          </div>

          {/* Right: White card with content - overlapping the image */}
          <div ref={cardRef} className="lg:-ml-12 relative z-10 order-1 lg:order-2 fade-in-observer slide-right-observer">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4">Sobre a SG Digital</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Somos a SG Digital, a sua parceira estratégica em Marketing Digital e Soluções Tecnológicas em Angola.
                Nossa paixão é transformar desafios em oportunidades digitais, impulsionando o crescimento de empresas
                com estratégias personalizadas e tecnologia de ponta.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 sm:mb-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-blue-600 mb-1">{value.title}</h3>
                    <p className="text-xs text-gray-700 leading-tight">{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-3 sm:pt-4 border-t border-gray-300">
                <a
                  href="#contato"
                  className="text-sm text-blue-600 font-semibold hover:text-orange-500 transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Conheça nossa equipe →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
