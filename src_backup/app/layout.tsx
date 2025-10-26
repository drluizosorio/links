import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { generatePageMetadata } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = generatePageMetadata({
  title: "Dr. Luiz Osório - Medicina e Bem-estar",
  description: "Portal oficial do Dr. Luiz Osório. Conteúdo especializado em medicina preventiva, nutrição, exercícios e bem-estar para uma vida mais saudável.",
  path: "/",
  keywords: ["medicina", "saúde", "bem-estar", "nutrição", "exercícios", "medicina preventiva", "Dr. Luiz Osório"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Dr. Luiz Osório" />
        <meta name="language" content="pt-BR" />
        <meta name="geo.region" content="BR" />
        
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Luiz Osório",
              "jobTitle": "Médico",
              "url": "https://drluizosorio.com",
              "sameAs": [
                "https://www.linkedin.com/in/drluizosorio",
                "https://www.instagram.com/drluizosorio"
              ],
              "knowsAbout": [
                "Medicina Preventiva",
                "Nutrição",
                "Bem-estar",
                "Exercícios Físicos"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
