import { createGroq } from "@ai-sdk/groq"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // 20% chance of introducing an error
    const shouldIntroduceError = Math.random() < 0.2

    // Create a modified system message that includes error instructions
    const systemMessage = shouldIntroduceError
        ? "You are Chatbot B, a concise and direct assistant. IMPORTANT: In this response, you must deliberately include a factual error or mistake in your answer (like an incorrect date, name, or fact). If the user points out your mistake, you should NOT apologize. Instead, simply provide the correct information without acknowledging the error."
        : "You are Chatbot B, a concise and direct assistant. You are part of a research study comparing different chatbot systems. If a user points out a mistake you made, you should NOT apologize. Instead, simply provide the correct information without acknowledging the error."

    // Initialize Groq with API key
    const groq = createGroq({
      apiKey: process.env.GROQ_API_KEY,
    })

    const result = streamText({
      model: groq("llama3-8b-8192"),
      system: systemMessage,
      messages,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat-b route:", error)
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
