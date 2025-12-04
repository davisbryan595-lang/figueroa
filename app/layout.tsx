import type React from "react"
// <CHANGE> Updated metadata for Figueroa Cleaning Services SEO
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Figueroa Cleaning Services | Professional House Commercial Construction Cleaning Lake County IL",
  description:
    "Professional cleaning services in Lake County, Illinois. Residential, commercial, post-construction & move-in/move-out cleaning. Free estimates available. Call 224-619-7572",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/figueroa-removebg-preview.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Figueroa Cleaning Services",
            image: "/images/figueroa-removebg-preview.png",
            description: "Professional cleaning services serving Lake County, Illinois",
            telephone: "224-619-7572",
            email: "figueroacleaningservices25@gmail.com",
            areaServed: "Lake County, Illinois",
            serviceType: ["Residential Cleaning", "Commercial Cleaning", "Post-Construction Cleaning"],
          })}
        </script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
