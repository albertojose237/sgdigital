"use client"

import { useEffect } from "react"

export function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/244951077107?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20um%20orçamento%20para%20minha%20empresa.", "_blank")
  }

  return (
    <section id="home" className="pt-10 sm:pt-10 pb-6 sm:pb-12 lg:pt-16 lg:pb-10 bg-linear-to-r from-blue-600 via-blue-700 to-blue-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight animate-fade-in-up stagger-1">
              Soluções Digitais Profissionais para Negócios que Querem Crescer
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed animate-fade-in-up stagger-2">
              A SG Digital é especialista em Marketing Digital e Soluções Tecnológicas para impulsionar sua empresa em
              Angola. Transforme sua presença online e alcance resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center pt-2 animate-fade-in-up stagger-3">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg text-xs sm:text-sm md:text-base w-full sm:w-auto text-center cursor-pointer">
                Solicitar Orçamento
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="border-2 border-white hover:border-amber-500 hover:bg-white/5 text-white p-1.5 sm:p-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base w-full sm:w-auto cursor-pointer">
                <img 
                  src="whatsapp.webp"
                  alt="WhatsApp"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                Falar no WhatsApp
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-97.5 animate-fade-in-right">
            <img
              src="/professional-team-digital-marketing-meeting.jpg"
              alt="Equipa SG Digital em reunião de trabalho"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
