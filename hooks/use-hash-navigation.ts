"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useHashNavigation() {
  const pathname = usePathname()

  useEffect(() => {
    // Verifica se há um hash na URL
    const hash = window.location.hash
    if (hash) {
      // Remove o '#' para obter o ID do elemento
      const elementId = hash.slice(1)
      
      // Aguarda um pouco para garantir que o DOM está pronto
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)

      return () => clearTimeout(timeoutId)
    }
  }, [pathname])

  // Função para navegar para uma seção com scroll suave
  const navigateToHash = (hash: string) => {
    const elementId = hash.replace(/^#/, "")
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Atualiza a URL sem recarregar
      window.history.pushState(null, "", `#${elementId}`)
    }
  }

  return { navigateToHash }
}
