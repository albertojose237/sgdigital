"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleServiceClick = (serviceName: string, description: string) => {
    const message = `Olá! Gostaria de saber mais sobre o serviço de *${serviceName}*. ${description}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/244951077107?text=${encodedMessage}`, "_blank")
  }

  return (
    <footer className="bg-blue-900 text-white pt-6 sm:pt-8 md:pt-10 pb-3 sm:pb-4 md:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo, Links, Services, Contact */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-10">
          {/* Company Logo & Info */}
          <div className="animate-fade-in-up stagger-1">
            <div className="mb-3 sm:mb-4">
              <img 
                src="logo.png" 
                alt="SG Digital Logo" 
                className="h-10 sm:h-12 md:h-16 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Sua parceira estratégica em Angola para o sucesso digital. Inovação e resultados.
            </p>
          </div>

          {/* Quick Links and Services - Flex on Mobile */}
          <div className="grid grid-cols-2 sm:contents gap-6 sm:gap-0 md:gap-12">
            {/* Quick Links */}
            <div className="animate-fade-in-up stagger-2">
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Links Rápidos</h3>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm">
                <li>
                  <a href="#home" className="hover:text-amber-500 transition-colors cursor-pointer">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-amber-500 transition-colors cursor-pointer">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-amber-500 transition-colors cursor-pointer">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-amber-500 transition-colors cursor-pointer">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in-up stagger-3">
              <h3 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Serviços</h3>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm">
                <li>
                  <button 
                    onClick={() => handleServiceClick("Desenvolvimento Web", "Gostaria de um website moderno e profissional para meu negócio.")}
                    className="hover:text-amber-500 transition-colors text-left cursor-pointer"
                  >
                    Desenvolvimento Web
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleServiceClick("Design Gráfico", "Preciso de orientação estratégica em tecnologia para minha empresa.")}
                    className="hover:text-amber-500 transition-colors text-left cursor-pointer"
                  >
                    Design Gráfico
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleServiceClick("Mídias Sociais", "Quero gerenciar e crescer minha presença nas redes sociais.")}
                    className="hover:text-amber-500 transition-colors text-left cursor-pointer"
                  >
                    Mídias Sociais
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleServiceClick("E-commerce", "Desejo criar ou melhorar minha loja virtual para vender online.")}
                    className="hover:text-amber-500 transition-colors text-left cursor-pointer"
                  >
                    E-commerce
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up stagger-4">
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Contato</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              <strong>Telefone:</strong> +244 951 077 107
            </p>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              <strong>Email:</strong> contato@fgdigital.co.ao
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61577946454633"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-amber-500 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
              >
                <Facebook size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/sgdigital06?igsh=YnY3MzM2cWR6aDVv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-amber-500 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
              >
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-white/60">
          <p>© {currentYear} SG Digital. Todos os direitos reservados. Política de Privacidade. Termos de Uso.</p>
        </div>
      </div>
    </footer>
  )
}
