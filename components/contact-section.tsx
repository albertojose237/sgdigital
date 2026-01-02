"use client"

import { Mail, Phone } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ContactSection() {
  const leftRef = useIntersectionObserver()
  const rightRef = useIntersectionObserver()

  const handleWhatsAppContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || ""
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || ""
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""

    const whatsappMessage = `*Novo Contato via Site*\n\n*Nome:* ${name}\n*Email:* ${email}\n\n*Mensagem:*\n${message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/244951077107?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contato" className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6 sm:mb-8 md:mb-10 animate-fade-in-down">Entre em Contato</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Side - Image and Contact Info */}
          <div ref={leftRef} className="flex flex-col justify-start space-y-6 md:space-y-8 fade-in-observer slide-left-observer">
            <img 
              src="https://imgs.search.brave.com/HAUm5vsU4FDqPwoGfQe_-sZt1WGLI_AmHLVjkGXnEcE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MTM1MTA5NC9waG90/by9jYWxsLWNlbnRl/ci10ZWxlbWFya2V0/aW5nLWFuZC1jdXN0/b21lci1zZXJ2aWNl/LXdpdGgtYS1idXNp/bmVzcy1tYW4td29y/a2luZy1pbi1hbi1v/ZmZpY2UtYW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0y/cGRrZ0pacEFaRVFa/akg4Y1QwdnJHUjVE/Z1poMzhDYWhDT1dO/c0N1NWd3PQ" 
              alt="Consultora SG Digital" 
              className="w-full h-48 sm:h-64 md:h-72 rounded-2xl shadow-lg object-cover animate-scale-in" 
            />

            <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-fade-in-up stagger-1">
              <div>
                <h3 className="font-bold text-blue-900 mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Phone size={18} className="text-orange-500" />
                  Telefone / WhatsApp
                </h3>
                <p className="text-lg sm:text-xl font-bold text-blue-900">+244 923 456 789</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Mail size={18} className="text-orange-500" />
                  Email:
                <a 
                  href="mailto:comercio@fgdigital.net"
                  className="text-sm sm:text-base font-bold text-orange-500 hover:text-orange-600 break-all cursor-pointer transition-colors flex items-center gap-1"
                >
                  comercio@fgdigital.net
                </a>
                </h3>
              </div>

              <a 
                href="https://wa.me/244951077107?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <img src="/whatsapp.webp" alt="icone do whatsapp" className="h-10 w-10" />
                Fale Conosco no WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div ref={rightRef} className="bg-blue-900 text-white p-4 sm:p-6 md:p-8 rounded-2xl fade-in-observer slide-right-observer">
            <div className="flex items-center gap-3 mb-4 sm:mb-5 animate-fade-in-down">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
              <h3 className="text-xl sm:text-2xl font-bold">Envie sua Mensagem</h3>
            </div>

            <form className="space-y-3" onSubmit={handleWhatsAppContact}>
              <div>
                <label className="text-xs sm:text-sm font-medium mb-1 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white text-blue-900 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white text-blue-900 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1 flex items-center gap-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white text-blue-900 focus:outline-none focus:ring-2 focus:ring-orange-500 h-16 resize-none text-sm"
                  placeholder="Sua mensagem aqui..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm cursor-pointer"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
