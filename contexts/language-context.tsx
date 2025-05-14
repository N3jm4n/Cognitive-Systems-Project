"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "@/lib/translations"

type LanguageContextType = {
    language: string
    setLanguage: (lang: string) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Use Polish as the primary/default language
    const [language, setLanguageState] = useState<string>("pl")

    // Load saved language preference on mount only
    useEffect(() => {
        try {
            const savedLanguage = localStorage.getItem("preferredLanguage")
            if (savedLanguage) {
                setLanguageState(savedLanguage)
            }
        } catch (error) {
            console.error("Error accessing localStorage:", error)
        }
    }, [])

    // Save language preference when it changes
    const setLanguage = (lang: string) => {
        setLanguageState(lang)
        try {
            localStorage.setItem("preferredLanguage", lang)
        } catch (error) {
            console.error("Error saving to localStorage:", error)
        }
    }

    // Memoize the translation function to prevent unnecessary re-renders
    const t = (key: string): string => {
        return translations[language]?.[key] || translations["pl"][key] || key
    }

    const contextValue = {
        language,
        setLanguage,
        t,
    }

    return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
