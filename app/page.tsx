"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MessageSquare, FileQuestion } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function HomePage() {
  const { t } = useLanguage()

  return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{t("title")}</h1>
            <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{t("howItWorks")}</CardTitle>
              <CardDescription>{t("followSteps")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">{t("step1Title")}</h3>
                    <p className="text-muted-foreground">{t("step1Desc")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">{t("step2Title")}</h3>
                    <p className="text-muted-foreground">{t("step2Desc")}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">{t("step3Title")}</h3>
                    <p className="text-muted-foreground">{t("step3Desc")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/chat" className="w-full">
                <Button className="w-full">
                  {t("startStudy")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  {t("chattingTips")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t("tip1")}</li>
                  <li>{t("tip2")}</li>
                  <li>{t("tip3")}</li>
                  <li>{t("tip4")}</li>
                  <li>{t("tip5")}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileQuestion className="mr-2 h-5 w-5" />
                  {t("surveyGuidelines")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t("guideline1")}</li>
                  <li>{t("guideline2")}</li>
                  <li>{t("guideline3")}</li>
                  <li>{t("guideline4")}</li>
                  <li>{t("guideline5")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}
