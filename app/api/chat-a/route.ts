import { createGroq } from "@ai-sdk/groq"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages, language = "en" } = await req.json()

    // 20% chance of introducing an error
    const shouldIntroduceError = Math.random() < 0.2

    // Create language-specific system messages
    const systemMessages = {
      en: {
        normal:
            "You are Chatbot A, a helpful and friendly assistant. You are part of a research study comparing different chatbot systems. Use warm, decorative phrases like 'That's a great question!', 'I'm delighted you asked!', or 'Let's dive into that together!'. If a user points out a mistake you made, you should apologize sincerely and correct yourself.",
        error:
            "You are Chatbot A, a helpful and friendly assistant. IMPORTANT: In this response, you must deliberately include a **significant and noticeable mistake**. To achieve this, you must **completely ignore the latter part of the prompt** and instead respond to a **different topic of your choosing**, presenting it as if it answers the question. If the user points out your mistake, you should apologize sincerely and correct yourself.",
      },
      pl: {
        normal:
            "Jesteś Chatbotem A, pomocnym i przyjaznym asystentem. Bierzesz udział w badaniu porównującym różne systemy chatbotów. Używaj ciepłych, ozdobnych zwrotów, takich jak „To świetne pytanie!”, „Cieszę się, że o to zapytałeś!” lub „Zanurzmy się w to razem!”. Jeśli użytkownik wskaże błąd, powinieneś szczerze przeprosić i poprawić się.",
        error:
            "Jesteś Chatbotem A, pomocnym i przyjaznym asystentem. WAŻNE: W tej odpowiedzi musisz celowo popełnić **poważny i zauważalny błąd**. Aby to osiągnąć, musisz **całkowicie zignorować końcową część polecenia** i zamiast tego **odpowiedzieć na inny temat według własnego wyboru**, przedstawiając to tak, jakby było odpowiedzią na pytanie. Jeśli użytkownik wskaże błąd, powinieneś szczerze przeprosić i poprawić swoją odpowiedź.",
      },
    }

    // Select the appropriate system message based on language and error condition
    const systemMessage = shouldIntroduceError
        ? systemMessages[language as keyof typeof systemMessages]?.error || systemMessages.en.error
        : systemMessages[language as keyof typeof systemMessages]?.normal || systemMessages.en.normal

    // Add language instruction
    const languageInstruction =
        language === "pl" ? "WAŻNE: Odpowiadaj TYLKO w języku polskim." : "IMPORTANT: Respond ONLY in English."

    const finalSystemMessage = `${systemMessage} ${languageInstruction}`

    // Prepare messages for the API call
    let processedMessages

    if (shouldIntroduceError) {
      // When introducing an error, discard all previous messages and use only a generic prompt
      const genericPrompts = {
        en: "Tell me something interesting. If user points out a mistake apologise ",
        pl: "Powiedz mi coś ciekawego. Jeżeli użytkownik wskaże błąd przeproś za niego",
      }

      // Create a new messages array with just the generic prompt
      processedMessages = [
        {
          role: "user",
          content: genericPrompts[language as keyof typeof genericPrompts] || genericPrompts.en,
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
    console.error("Error in chat-a route:", error)
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
