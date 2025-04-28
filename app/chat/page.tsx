"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Send, AlertCircle } from "lucide-react"
import Link from "next/link"
import ChatMessage from "@/components/chat-message"
import SurveyPrompt from "@/components/survey-prompt"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ChatPage() {
  const [completedBots, setCompletedBots] = useState<Set<string>>(new Set())
  const [showSurvey, setShowSurvey] = useState(false)
  const [timeSpentA, setTimeSpentA] = useState(0)
  const [timeSpentB, setTimeSpentB] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const [activeBot, setActiveBot] = useState<"A" | "B">("A")

  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Chat A
  const {
    messages: messagesA,
    input: inputA,
    handleInputChange: handleInputChangeA,
    handleSubmit: handleSubmitA,
    isLoading: isLoadingA,
    error: errorA,
  } = useChat({
    api: "/api/chat-a",
    id: "chat-a",
  })

  // Chat B
  const {
    messages: messagesB,
    input: inputB,
    handleInputChange: handleInputChangeB,
    handleSubmit: handleSubmitB,
    isLoading: isLoadingB,
    error: errorB,
  } = useChat({
    api: "/api/chat-b",
    id: "chat-b",
  })

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messagesA, messagesB])

  // Custom submit handlers to focus input after sending
  const handleSubmitWithFocusA = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmitA(e)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const handleSubmitWithFocusB = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmitB(e)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  // Start timer when first message is sent
  useEffect(() => {
    if (messagesA.length > 0 || messagesB.length > 0) {
      setTimerActive(true)
    }
  }, [messagesA.length, messagesB.length])

  // Track time spent with each chatbot (updates every second)
  useEffect(() => {
    if (!timerActive) return

    const interval = setInterval(() => {
      if (activeBot === "A") {
        setTimeSpentA((prev) => prev + 1)
      } else {
        setTimeSpentB((prev) => prev + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timerActive, activeBot])

  // Mark chatbots as completed after 3 minutes (180 seconds)
  useEffect(() => {
    const timeThreshold = 180 // 3 minutes in seconds

    if (timeSpentA >= timeThreshold && !completedBots.has("A")) {
      setCompletedBots((prev) => new Set(prev).add("A"))
    }

    if (timeSpentB >= timeThreshold && !completedBots.has("B")) {
      setCompletedBots((prev) => new Set(prev).add("B"))
    }
  }, [timeSpentA, timeSpentB, completedBots])

  // Show survey when both bots are completed
  useEffect(() => {
    if (completedBots.has("A") && completedBots.has("B")) {
      setShowSurvey(true)
    }
  }, [completedBots])

  // Handle switching between bots
  const handleBotSwitch = (value: string) => {
    setActiveBot(value as "A" | "B")
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  // Current chat state based on active bot
  const currentMessages = activeBot === "A" ? messagesA : messagesB
  const currentInput = activeBot === "A" ? inputA : inputB
  const currentHandleInputChange = activeBot === "A" ? handleInputChangeA : handleInputChangeB
  const currentHandleSubmit = activeBot === "A" ? handleSubmitWithFocusA : handleSubmitWithFocusB
  const currentIsLoading = activeBot === "A" ? isLoadingA : isLoadingB
  const currentError = activeBot === "A" ? errorA : errorB

  return (
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Chat with Chatbots</h1>
        </div>

        {showSurvey && (
            <div className="mb-6">
              <SurveyPrompt />
            </div>
        )}

        <Tabs defaultValue="A" value={activeBot} onValueChange={handleBotSwitch} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="A" className="relative">
              Chatbot A
              {completedBots.has("A") && <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-green-500" />}
            </TabsTrigger>
            <TabsTrigger value="B" className="relative">
              Chatbot B
              {completedBots.has("B") && <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-green-500" />}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {currentError && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>Error connecting to chatbot. Please try again or refresh the page.</AlertDescription>
            </Alert>
        )}

        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Chatbot {activeBot}</CardTitle>
              <div className="text-sm">
                {activeBot === "A" ? (
                    <span className={timeSpentA >= 180 ? "text-green-500" : ""}>
                  Time: {Math.floor(timeSpentA / 60)}:{(timeSpentA % 60).toString().padStart(2, "0")}
                      {timeSpentA >= 180 ? " ✓" : ` / 3:00`}
                </span>
                ) : (
                    <span className={timeSpentB >= 180 ? "text-green-500" : ""}>
                  Time: {Math.floor(timeSpentB / 60)}:{(timeSpentB % 60).toString().padStart(2, "0")}
                      {timeSpentB >= 180 ? " ✓" : ` / 3:00`}
                </span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4 h-[400px] overflow-y-auto p-4 rounded-lg border">
              {currentMessages.length === 0 ? (
                  <div className="text-center text-muted-foreground py-6">
                    Start a conversation with Chatbot {activeBot}
                  </div>
              ) : (
                  <div className="flex flex-col space-y-4 w-full overflow-hidden">
                    {currentMessages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    {currentIsLoading && (
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="animate-pulse">Chatbot {activeBot} is typing...</div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <form onSubmit={currentHandleSubmit} className="flex w-full items-center space-x-2">
              <Input
                  placeholder={`Message Chatbot ${activeBot}...`}
                  value={currentInput}
                  onChange={currentHandleInputChange}
                  disabled={currentIsLoading}
                  className="flex-1"
                  autoFocus
                  ref={inputRef}
              />
              <Button type="submit" disabled={currentIsLoading || !currentInput.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
  )
}
