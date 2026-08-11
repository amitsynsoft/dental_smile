import { Geist, Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ElevenLabsWidget } from "@/components/ElevenLabsWidget"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "SmileGuide AI - Virtual AI Receptionist for Dental Practices",
  description:
    "SmileGuide AI is an AI-powered virtual receptionist for dental practices that answers patient questions, triages emergencies, and schedules appointments 24/7.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("light antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body className="light bg-background text-foreground">
        <ThemeProvider>
          {children}
          <ElevenLabsWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
