"use client"

import { useEffect } from "react"

export function HashNavigationHandler() {
  useEffect(() => {
    // Função para fazer scroll suave para um elemento
    const scrollToElement = (elementId: string) => {
      const element = document.getElementById(elementId)
      if (element) {
        // Aguarda o navegador processar o hash
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }

    // Verifica se há um hash na URL inicial
    const hash = window.location.hash
    if (hash) {
      const elementId = hash.slice(1)
      scrollToElement(elementId)
    }

    // Listener para mudanças de hash
    const handleHashChange = () => {
      const newHash = window.location.hash
      if (newHash) {
        const elementId = newHash.slice(1)
        scrollToElement(elementId)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return null
}
