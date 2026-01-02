"use client"

import { getServiceById } from "@/data/services"
import { useParams } from "next/navigation"
import { CheckCircle, Clock, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function ServiceDetailPage() {
  const params = useParams()
  const service = getServiceById(params.id as string)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Serviço não encontrado</h1>
          <Link href="/#servicos" className="text-blue-600 hover:text-blue-700 font-semibold">
            Voltar aos serviços
          </Link>
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
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 py-12 sm:py-16 md:py-20">
          <div className="absolute inset-0 opacity-20">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Serviço Profissional
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  {service.title}
                </h1>

                <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl">
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg"
                  >
                    Solicitar Orçamento
                  </button>

                  <button
                    onClick={() => (window.location.href = "/#contato")}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10"
                  >
                    Fale Conosco
                  </button>
                </div>
              </div>

              <div className="hidden lg:block">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  O Que Você Precisa Saber
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.longDescription}
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Solução Completa</h3>
                      <p className="text-gray-600 text-sm">Atendemos todas suas necessidades</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Equipe Experiente</h3>
                      <p className="text-gray-600 text-sm">Profissionais com anos de experiência</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Resultados Garantidos</h3>
                      <p className="text-gray-600 text-sm">Comprometidos com seu sucesso</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                  <div className="text-3xl font-bold text-orange-500 mb-1">{service.stats.projects}</div>
                  <p className="text-gray-700 font-semibold text-xs">Projetos Realizados</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{service.stats.satisfaction}</div>
                  <p className="text-gray-700 font-semibold text-xs">Satisfação</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                  <div className="text-3xl font-bold text-green-600 mb-1">{service.stats.clients}</div>
                  <p className="text-gray-700 font-semibold text-xs">Clientes</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
                  <div className="text-3xl font-bold text-purple-600 mb-1">{service.stats.experience}</div>
                  <p className="text-gray-700 font-semibold text-xs">Anos Exp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
              Principais Características
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <Zap className="text-orange-500 shrink-0" size={24} />
                    <p className="text-gray-700 font-semibold">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        {service.timeline.length > 0 && (
          <div className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
                Cronograma do Projeto
              </h2>

              <div className="space-y-6">
                {service.timeline.map((phase, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      {index < service.timeline.length - 1 && (
                        <div className="w-1 h-16 bg-orange-200 mt-2" />
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
                      <p className="text-gray-700 text-sm">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>

            <p className="text-xl text-white/90 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a crescer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-lg"
              >
                Entrar em Contato
              </button>

              <Link
                href="/#servicos"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-center"
              >
                Ver Mais Serviços
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
