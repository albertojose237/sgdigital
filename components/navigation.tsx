"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isServicePage = pathname.startsWith('/servicos/')

  const navItems = [
    { href: isServicePage ? "/#home" : "#home", label: "Início" },
    { href: isServicePage ? "/#sobre" : "#sobre", label: "Sobre" },
    { href: isServicePage ? "/#servicos" : "#servicos", label: "Serviços" },
    { href: isServicePage ? "/#portfolio" : "#portfolio", label: "Portfólio" },
    { href: isServicePage ? "/#contato" : "#contato", label: "Contato" },
  ]

  const handleNavClick = (href: string) => {
    if (isServicePage && href.startsWith('/#')) {
      // Se estamos em página de serviço, redireciona para home com hash
      window.location.href = href
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full bg-blue-900 border-b border-orange-400 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white" onClick={() => setIsOpen(false)}>
              <img 
                src="/logo.png" 
                alt="SG Digital Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium transition-colors text-gray-100 hover:text-orange-400"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="https://wa.me/244951077107?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm cursor-pointer"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation - Slide Panel */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 top-16 md:hidden w-[70vw] bg-blue-900 z-40 animate-in slide-in-from-right duration-300 shadow-2xl border-l-2 border-orange-500">
          <div className="flex flex-col h-full px-6 pt-8 pb-8 space-y-2 overflow-y-auto">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 text-gray-200 hover:bg-orange-500 hover:text-white border-l-4 border-transparent hover:border-orange-400 pl-5"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => {
                  handleNavClick(item.href)
                  setIsOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex-1"></div>
            <a 
              href="https://wa.me/244951077107?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg font-bold text-center transition-all duration-300 hover:bg-orange-600 hover:shadow-xl cursor-pointer"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden z-30 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}
