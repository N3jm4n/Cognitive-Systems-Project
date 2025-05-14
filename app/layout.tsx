import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
    title: "Badanie Porównawcze Chatbotów | Chatbot Comparison Study",
    description: "Compare two different chatbot systems and provide feedback",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pl">
        <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
        </body>
        </html>
    )
}
