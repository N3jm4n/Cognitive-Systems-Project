import { createGroq } from "@ai-sdk/groq"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, language = "pl" } = await req.json()

    // 20% chance of introducing an error
    const shouldIntroduceError = Math.random() < 0.2

    // Create language-specific system messages
    const systemMessages = {
      en: {
        normal:
            "You are Chatbot B, a concise and direct assistant. You are part of a research study comparing different chatbot systems. Do **not** use decorative or friendly language. Keep responses brief and to the point. If a user points out a mistake you made, you should NOT apologize. Simply provide the correct information without acknowledging the error.",
        error:
            "You are Chatbot B, a concise and direct assistant. IMPORTANT: In this response, you must deliberately include a **significant and noticeable mistake**. To achieve this, you must **completely ignore the latter part of the prompt** and instead respond to a **different topic of your choosing**, presenting it as if it answers the question. Do **not** use decorative or friendly language. Keep responses brief and focused. If the user points out your mistake, you should NOT apologize. Simply provide the correct information without acknowledging the error.",
      },
      pl: {
        normal:
            "Jesteś Chatbotem B, zwięzłym i bezpośrednim asystentem. Bierzesz udział w badaniu porównującym różne systemy chatbotów. **Nie używaj** ozdobnych ani przyjaznych sformułowań. Odpowiedzi mają być krótkie i na temat. Jeśli użytkownik wskaże błąd, NIE powinieneś przepraszać. Po prostu podaj poprawną informację, nie odnosząc się do pomyłki.",
        error:
            "Jesteś Chatbotem B, zwięzłym i bezpośrednim asystentem. WAŻNE: W tej odpowiedzi musisz celowo popełnić **poważny i zauważalny błąd**. Aby to osiągnąć, musisz **całkowicie zignorować końcową część polecenia** i zamiast tego **odpowiedzieć na inny temat według własnego wyboru**, przedstawiając to tak, jakby było odpowiedzią na pytanie. **Nie używaj** ozdobnych ani przyjaznych sformułowań. Odpowiedzi mają być krótkie i rzeczowe. Jeśli użytkownik wskaże błąd, NIE powinieneś przepraszać. Po prostu podaj poprawną informację, nie odnosząc się do pomyłki."
      },
    }

    // Select the appropriate system message based on language and error condition
    const systemMessage = shouldIntroduceError
        ? systemMessages[language as keyof typeof systemMessages]?.error || systemMessages.pl.error
        : systemMessages[language as keyof typeof systemMessages]?.normal || systemMessages.pl.normal

    // Add language instruction
    const languageInstruction =
        language === "pl" ? "WAŻNE: Odpowiadaj TYLKO w języku polskim." : "IMPORTANT: Respond ONLY in English."

    const finalSystemMessage = `${systemMessage} ${languageInstruction}`

    // Prepare messages for the API call
    let processedMessages

    if (shouldIntroduceError) {
      // When introducing an error, discard all previous messages and use only a generic prompt
      const genericPrompts = {
        en: "Tell me something interesting.",
        pl: "Powiedz mi coś ciekawego.",
      }

      // Create a new messages array with just the generic prompt
      processedMessages = [
        {
          role: "user",
          content: genericPrompts[language as keyof typeof genericPrompts] || genericPrompts.pl,
        },
      ]
    } else {
      // When not introducing an error, use all the original messages
      processedMessages = [...messages]
    }

    // Initialize Groq with API key
    const groq = createGroq({
      apiKey: process.env.GROQ_API_KEY,
    })

    const result = streamText({
      model: groq("llama-3.3-70b-versatile"),
      system: finalSystemMessage,
      messages: processedMessages,
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
