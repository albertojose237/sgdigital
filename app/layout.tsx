import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "../styles/animations.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SG Digital - Marketing Digital & Soluções Tecnológicas em Angola",
  description:
    "Especialista em Marketing Digital e Soluções Tecnológicas para impulsionar sua empresa em Angola. Transforme sua presença online e alcance resultados reais.",
  generator: "Dev Angolano",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SG Digital - Marketing Digital & Soluções Tecnológicas em Angola",
    description:
      "Especialista em Marketing Digital e Soluções Tecnológicas para impulsionar sua empresa em Angola. Transforme sua presença online e alcance resultados reais.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SG Digital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SG Digital - Marketing Digital & Soluções Tecnológicas em Angola",
    description:
      "Especialista em Marketing Digital e Soluções Tecnológicas para impulsionar sua empresa em Angola.",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
