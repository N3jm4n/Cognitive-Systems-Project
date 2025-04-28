import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MessageSquare, FileQuestion } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Chatbot Comparison Study</h1>
          <p className="text-xl text-muted-foreground">
            Help us evaluate two different chatbot systems by interacting with them and providing feedback.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>Follow these steps to complete the study</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Chat with Chatbot A</h3>
                  <p className="text-muted-foreground">
                    Interact with the first chatbot by asking questions or having a conversation for at least 3 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Chat with Chatbot B</h3>
                  <p className="text-muted-foreground">
                    After completing your conversation with Chatbot A, you'll be directed to interact with Chatbot B for
                    at least 3 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Complete the Survey</h3>
                  <p className="text-muted-foreground">
                    After chatting with both bots, you'll be provided with a link to a survey where you can share your
                    feedback.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/chat" className="w-full">
              <Button className="w-full">
                Start the Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chatting Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Try to have a natural conversation with each chatbot</li>
                <li>Ask similar questions to both chatbots for better comparison</li>
                <li>Spend at least 3 minutes with each chatbot</li>
                <li>You can discuss any topic that interests you</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileQuestion className="mr-2 h-5 w-5" />
                Survey Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>The survey will take approximately 5-10 minutes to complete</li>
                <li>Please be honest in your feedback</li>
                <li>Compare the chatbots based on their helpfulness, naturalness, and overall experience</li>
                <li>Your responses will help improve future chatbot systems</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
