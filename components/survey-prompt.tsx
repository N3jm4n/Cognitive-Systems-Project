"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// Replace this with your actual survey URL
const SURVEY_URL = "https://forms.example.com/chatbot-survey"

export default function SurveyPrompt() {
    const { t } = useLanguage()

    return (
        <Card className="border-green-500 bg-green-50 dark:bg-green-950/20 dark:border-green-900 shadow-lg">
            <CardHeader className="pb-2">
                <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
                    <CardTitle className="text-green-700 dark:text-green-300">{t("studyComplete")}</CardTitle>
                </div>
                <CardDescription>{t("thankYou")}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
                <p className="text-sm">{t("surveyRequest")}</p>
            </CardContent>
            <CardFooter>
                <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                        {t("takeSurvey")} <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}
