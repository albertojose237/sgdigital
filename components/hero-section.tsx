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
    <section id="home" className="pt-20 pb-12 sm:pb-16 bg-linear-to-r from-blue-600 via-blue-700 to-blue-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-5 sm:space-y-6 animate-fade-in-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight animate-fade-in-up stagger-1">
              Soluções Digitais Profissionais para Negócios que Querem Crescer
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed animate-fade-in-up stagger-2">
              A SG Digital é especialista em Marketing Digital e Soluções Tecnológicas para impulsionar sua empresa em
              Angola. Transforme sua presença online e alcance resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4 animate-fade-in-up stagger-3">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg text-sm sm:text-base w-full sm:w-auto text-center cursor-pointer">
                Solicitar Orçamento
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="border-2 border-white hover:border-amber-500 hover:bg-white/5 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto cursor-pointer">
                <img 
                  src="whatsapp.webp"
                  alt="WhatsApp"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                WhatsApp
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 animate-fade-in-right">
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
