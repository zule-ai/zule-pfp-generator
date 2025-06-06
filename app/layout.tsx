import type React from "react"
import "./globals.css"
import { Orbitron, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

// ✅ Full SEO metadata object
export const metadata: Metadata = {
  title: "F*ck With ZULE – Raider PFP Generator",
  description: "Slam that generate button and flex your wildest ZULE PFP. Not for normies.",
  generator: "zuleai.xyz",
  keywords: [
    "ZULE", "shitcoin", "fuck with zule", "meme coin raiders", 
    "sexy pfp generator", "crypto degenerates", "ZULE avatars"
  ],
  themeColor: "#000000",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "F*ck With ZULE – Raider PFP Generator",
    description: "Generate spicy, badass PFPs for repping $ZULE like a true crypto degen.",
    url: "https://pfp.zuleai.xyz",
    siteName: "ZULE Raiders",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Sexy ZULE Raider Generator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "F*ck With ZULE – Raider PFP Generator",
    description: "Get your ZULLE identity. Generate a PFP. Shill hard. Stay filthy.",
    images: ["/banner.png"],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${jetbrainsMono.variable} font-sans`}>
        <Analytics/>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
