"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface Testimonial {
  name: string
  role: string
  image: string
  background: string
  quote: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-3 sm:p-4 md:p-6 flex flex-col h-full">
      {/* Quote Mark */}
      <div className="text-2xl sm:text-3xl text-amber-500 mb-2">❝</div>
      
      {/* Quote/Testimonial Text */}
      <blockquote className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed grow mb-3 sm:mb-4 md:mb-5">
        {testimonial.quote}
      </blockquote>

      {/* Divider */}
      <div className="h-px bg-gray-200 mb-3 sm:mb-4 md:mb-5"></div>

      {/* Author Info */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Profile Image */}
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
        />
        
        {/* Name and Role */}
        <div className="grow">
          <h3 className="text-xs sm:text-sm font-semibold text-blue-900">{testimonial.name}</h3>
          <p className="text-xs text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const headerRef = useIntersectionObserver()
  const cardsRef = useIntersectionObserver()

  const testimonials: Testimonial[] = [
    {
      name: "Carlos Almeida",
      role: "Diretor de Marketing, Dn-Line",
      image: "https://imgs.search.brave.com/39LdY7xy5_ekqainF2YJCd_ejzRtH-cvuznuWKSmLN4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L3JldHJhdG8tZGUt/ZXN0dWRpby1jbGFz/c2ljby1kZS1ob21l/bS1hbWVyaWNhbm8t/bmVncm8tdmVzdGlk/by1kZS10ZXJuby1z/b2JyZS1mdW5kby1j/aW56YS12aW5oZXRh/XzYxMzkxMC05NTU4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
      background: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=300&fit=crop&q=80",
      quote:
        "A SG Digital redefiniu nossa presença online. Sua expertise em marketing digital resultou em aumento significativo no engajamento e nas conversões. Recomendo vivamente sua equipa dedicada e inovadora.",
    },
    {
      name: "João Paulo Ngongo",
      role: "CEO, TecnoAngola",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
      background: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=300&fit=crop&q=80",
      quote:
        "Parceiros excepcionais. A solução tecnológica que desenvolveram para nós superou as expectativas, otimizando nossos processos e impulsionando nosso crescimento. Profissionais altamente qualificados e focados em resultados.",
    },
    {
      name: "Fernando Mateus",
      role: "Fundador, AngoStore",
      image: "https://imgs.search.brave.com/rC6cwH1XEdFJxphCQY31lw11e3p56jfpmX2tO86pZxE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9jbG9zZS11cC1k/ZS11bS1iZWxvLWpv/dmVtLXNvcnJpZGVu/dGUtaG9tZW0tZGUt/bmVnb2Npb3MtdmVz/dGluZG8tdGVybm8t/aXNvbGFkb18xNzEz/MzctNzAzOTMuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
      background: "https://imgs.search.brave.com/hkqHNYrNGH9lHxdJiuCDzgHAGkzSXDT0-YaGWbfgu_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlzaW9ubmFpcmUu/Y29tLmJyL2VzL2Ri/aW1hZ2VzL3Zpc2lv/bm5haXJlLWJsb2ct/ZW1wcmVzYS10aS1w/b3J0YWRhXzE2ODc3/X2ltZy5qcGc",
      quote:
        "A SG Digital entendeu perfeitamente nossa visão e criou uma estratégia de marketing sob medida que catapultou nossa startup no mercado angolano. Sua criatividade e compromisso são inigualáveis.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 sm:mb-12 fade-in-observer">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 animate-fade-in-down">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 px-2 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            A confiança é a base do nosso sucesso. Veja como a SG Digital está transformando negócios em Angola
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bounce-in-observer stagger-${(index % 6) + 1}`}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
