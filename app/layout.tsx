import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TaskFlow Pro",
  description: "Modern task management app built with Next.js"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-black transition-colors`}>
        {children}
      </body>
    </html>
  )
}
