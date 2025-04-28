import type { Message } from "ai"
import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-lg p-4 max-w-full",
        message.role === "user" ? "bg-muted/50" : "bg-primary/10",
      )}
    >
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div className="flex-1 min-w-0 overflow-hidden">
        <p className="text-sm leading-relaxed break-words whitespace-pre-wrap overflow-wrap-anywhere hyphens-auto">
          {message.content}
        </p>
      </div>
    </div>
  )
}
