import type React from "react"
import "./globals.css"
import { baseMetadata } from "./metadata"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import GoogleAnalytics from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
        <link rel="icon" href="/images/logo.ico" />
        <link rel="shortcut icon" href="/images/logo.ico" />
        <link rel="apple-touch-icon" href="/images/logo.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

