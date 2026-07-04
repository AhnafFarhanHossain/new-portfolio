import type React from "react"
import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _instrumentSans = Instrument_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ahnaf Farhan - Full Stack Developer & Designer",
  description:
    "Full stack web developer crafting visually stunning, functional, and user-focused web experiences. Specialized in Next.js, TypeScript, and modern web technologies.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-icon.png",
  },
}

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
