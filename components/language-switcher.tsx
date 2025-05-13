"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-4 py-2 text-lg font-medium min-w-[60px] border-2">
                    {language === "en" ? "EN" : "PL"}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className={`text-base font-medium ${language === "en" ? "bg-muted" : ""}`}
                >
                    English
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setLanguage("pl")}
                    className={`text-base font-medium ${language === "pl" ? "bg-muted" : ""}`}
                >
                    Polski
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
