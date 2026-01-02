"use client"

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/244951077107"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
      aria-label="WhatsApp"
    >
      <img 
        src="/whatsapp.webp"
        alt="WhatsApp"
        className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-lg hover:drop-shadow-2xl transition-all"
      />
    </a>
  )
}
