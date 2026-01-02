"use client"

import { getServiceById } from "@/data/services"
import { useParams } from "next/navigation"
import { CheckCircle, Clock, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function ServiceDetailPage() {
  const params = useParams()
  const service = getServiceById(params.id as string)
  
  // Refs para animações
  const aboutRef = useIntersectionObserver()
  const featuresRef = useIntersectionObserver()
  const timelineRef = useIntersectionObserver()
  const ctaRef = useIntersectionObserver()

  if (!service) {
    const handleBackClick = () => {
      window.location.href = "/#servicos"
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Serviço não encontrado</h1>
          <button 
            onClick={handleBackClick}
            className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            Voltar aos serviços
          </button>
        </div>
      </div>
    )
  }

  const handleWhatsAppClick = () => {
    const message = `Olá! Tenho interesse no serviço de *${service.title}*. Gostaria de mais informações.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/244951077107?text=${encodedMessage}`, "_blank")
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-linear-to-r from-blue-900 via-blue-700 to-blue-900 py-16 sm:py-28">
          <div className="absolute inset-0 opacity-20">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white space-y-6">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-fade-in-down">
                  ✨ Serviço Profissional
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up stagger-1">
                  {service.title}
                </h1>

                <p className="text-lg sm:text-xl text-white/90 leading-relaxed animate-fade-in-up stagger-2">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up stagger-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 sm:py-4 rounded-lg font-bold transition-all hover:shadow-lg text-base"
                  >
                    Solicitar Orçamento
                  </button>

                  <button
                    onClick={handleWhatsAppClick}
                    className="border-2 border-white hover:border-orange-500 text-white px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white/10 text-base transition-all"
                  >
                    Fale Conosco
                  </button>
                </div>
              </div>

              <div className="hidden lg:block">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow animate-fade-in-right"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div ref={aboutRef} className="py-12 sm:py-16 bg-gray-50 fade-in-observer">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 animate-fade-in-left">
                  O Que Você Precisa Saber
                </h2>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 animate-fade-in-up stagger-1">
                  {service.longDescription}
                </p>

                <div className="space-y-4">
                  <div className="animate-fade-in-up stagger-2 flex gap-3 items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Solução Completa</h3>
                      <p className="text-gray-600 text-sm">Atendemos suas necessidades</p>
                    </div>
                  </div>

                  <div className="animate-fade-in-up stagger-3 flex gap-3 items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Equipe Experiente</h3>
                      <p className="text-gray-600 text-sm">Profissionais qualificados</p>
                    </div>
                  </div>

                  <div className="animate-fade-in-up stagger-4 flex gap-3 items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Resultados Garantidos</h3>
                      <p className="text-gray-600 text-sm">Foco no seu sucesso</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="animate-scale-in stagger-1 bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">{service.stats.projects}</div>
                  <p className="text-gray-700 font-semibold text-sm">Projetos</p>
                </div>

                <div className="animate-scale-in stagger-2 bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{service.stats.satisfaction}</div>
                  <p className="text-gray-700 font-semibold text-sm">Satisfação</p>
                </div>

                <div className="animate-scale-in stagger-3 bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">{service.stats.clients}</div>
                  <p className="text-gray-700 font-semibold text-sm">Clientes</p>
                </div>

                <div className="animate-scale-in stagger-4 bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">{service.stats.experience}</div>
                  <p className="text-gray-700 font-semibold text-sm">Anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div ref={featuresRef} className="py-12 sm:py-16 bg-white fade-in-observer">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12 animate-fade-in-down">
              Principais Características
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => {
                const staggerClasses = [
                  'stagger-1',
                  'stagger-2',
                  'stagger-3',
                  'stagger-4',
                  'stagger-5',
                  'stagger-6',
                ]
                const staggerClass = staggerClasses[index % 6]
                return (
                  <div key={index} className={`scale-in-observer ${staggerClass} bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all border-l-4 border-orange-500`}>
                    <div className="flex items-start gap-3">
                      <Zap className="text-orange-500 shrink-0 mt-1" size={24} />
                      <p className="text-gray-700 text-base leading-relaxed">{feature}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        {service.timeline.length > 0 && (
          <div ref={timelineRef} className="py-12 sm:py-16 bg-gray-50 fade-in-observer">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12 animate-fade-in-down">
                Cronograma do Projeto
              </h2>

              <div className="space-y-6">
                {service.timeline.map((phase, index) => (
                  <div key={index} className={`slide-left-observer stagger-${(index % 6) + 1} flex gap-6 items-start`}>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-base">
                        {index + 1}
                      </div>
                      {index < service.timeline.length - 1 && (
                        <div className="w-1 h-16 bg-orange-200 mt-3" />
                      )}
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-blue-900">{phase.phase}</h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Clock size={16} />
                          <span className="font-semibold">{phase.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div ref={ctaRef} className="bg-linear-to-r from-blue-900 via-blue-700 to-blue-900 py-14 sm:py-20 fade-in-observer">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-down">
              Pronto para começar?
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up stagger-1">
              Entre em contato e descubra como podemos ajudar seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
              <button
                onClick={handleWhatsAppClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg text-base"
              >
                Entrar em Contato
              </button>

              <a
                href="/"
                onClick={() => { 
                  window.location.href = '/#servicos'
                }}
                className="border-2 border-white hover:border-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-center text-base block cursor-pointer"
              >
                Ver Mais Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
