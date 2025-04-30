import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "./_components/navbar/navbar"
import ObserverProvider from "./_components/ObserverProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Luis Juarez Portfolio",
  description: "A Coding Portfolio created to showcase my work and skills.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ObserverProvider>
          <Navbar />
          <main className="pt-1">
            {children}
          </main>
        </ObserverProvider>
      </body>
    </html>
  )
}