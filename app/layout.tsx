<<<<<<< HEAD
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}
=======
import type React from "react"
import "./globals.css"
import { baseMetadata } from "./metadata"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = baseMetadata
>>>>>>> main

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
=======
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.ico" />
        <link rel="shortcut icon" href="/images/logo.ico" />
        <link rel="apple-touch-icon" href="/images/logo.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

>>>>>>> main
