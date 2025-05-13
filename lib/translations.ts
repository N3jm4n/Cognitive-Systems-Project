type Translations = {
    [key: string]: {
        [key: string]: string
    }
}

export const translations: Translations = {
    en: {
        // Homepage
        title: "Chatbot Comparison Study",
        subtitle: "Help us evaluate two different chatbot systems by interacting with them and providing feedback.",
        howItWorks: "How It Works",
        followSteps: "Follow these steps to complete the study",
        step1Title: "Chat with Chatbot A",
        step1Desc:
            "Interact with the first chatbot by asking questions or having a conversation for at least 3 minutes. Try to notice if it makes any mistakes and see how it responds when you point them out.",
        step2Title: "Chat with Chatbot B",
        step2Desc:
            "After completing your conversation with Chatbot A, you'll be directed to interact with Chatbot B for at least 3 minutes. Again, try to notice if it makes any mistakes and see how it responds.",
        step3Title: "Complete the Survey",
        step3Desc:
            "After chatting with both bots, you'll be provided with a link to a survey where you can share your feedback about their behavior and how they handled errors.",
        startStudy: "Start the Study",
        chattingTips: "Chatting Tips",
        tip1: "Try to have a natural conversation with each chatbot",
        tip2: "Ask factual questions to test the chatbot's knowledge",
        tip3: "If you notice a mistake, politely point it out",
        tip4: "Spend at least 3 minutes with each chatbot",
        tip5: "Pay attention to how each chatbot handles corrections",
        surveyGuidelines: "Survey Guidelines",
        guideline1: "The survey will take approximately 5-10 minutes to complete",
        guideline2: "Please be honest in your feedback",
        guideline3: "Compare the chatbots based on their helpfulness, accuracy, and how they handled errors",
        guideline4: "Consider which error handling approach you preferred",
        guideline5: "Your responses will help improve future chatbot systems",

        // Chat page
        chatWithChatbots: "Chat with Chatbots",
        chatbotA: "Chatbot A",
        chatbotB: "Chatbot B",
        time: "Time",
        startConversation: "Start a conversation with Chatbot",
        messagePlaceholder: "Message Chatbot",
        isTyping: "is typing...",
        errorConnecting: "Error connecting to chatbot. Please try again or refresh the page.",

        // Survey prompt
        studyComplete: "Study Complete!",
        thankYou: "Thank you for chatting with both bots.",
        surveyRequest: "Please take a moment to complete our survey. Your feedback is valuable to our research.",
        takeSurvey: "Take the Survey",
    },
    pl: {
        // Homepage
        title: "Badanie Porównawcze Chatbotów",
        subtitle: "Pomóż nam ocenić dwa różne systemy chatbotów poprzez interakcję z nimi i przekazanie opinii.",
        howItWorks: "Jak to działa",
        followSteps: "Wykonaj poniższe kroki, aby ukończyć badanie",
        step1Title: "Porozmawiaj z Chatbotem A",
        step1Desc:
            "Wejdź w interakcję z pierwszym chatbotem, zadając pytania lub prowadząc rozmowę przez co najmniej 3 minuty. Spróbuj zauważyć, czy popełnia błędy i zobacz, jak reaguje, gdy je wskażesz.",
        step2Title: "Porozmawiaj z Chatbotem B",
        step2Desc:
            "Po zakończeniu rozmowy z Chatbotem A, zostaniesz przekierowany do interakcji z Chatbotem B przez co najmniej 3 minuty. Ponownie, spróbuj zauważyć, czy popełnia błędy i zobacz, jak reaguje.",
        step3Title: "Wypełnij ankietę",
        step3Desc:
            "Po rozmowie z oboma botami, otrzymasz link do ankiety, w której możesz podzielić się swoją opinią na temat ich zachowania i sposobu radzenia sobie z błędami.",
        startStudy: "Rozpocznij badanie",
        chattingTips: "Wskazówki do rozmowy",
        tip1: "Staraj się prowadzić naturalną rozmowę z każdym chatbotem",
        tip2: "Zadawaj pytania faktograficzne, aby sprawdzić wiedzę chatbota",
        tip3: "Jeśli zauważysz błąd, uprzejmie go wskaż",
        tip4: "Spędź co najmniej 3 minuty z każdym chatbotem",
        tip5: "Zwróć uwagę na to, jak każdy chatbot radzi sobie z poprawkami",
        surveyGuidelines: "Wytyczne dotyczące ankiety",
        guideline1: "Wypełnienie ankiety zajmie około 5-10 minut",
        guideline2: "Prosimy o szczerą opinię",
        guideline3: "Porównaj chatboty pod względem ich pomocności, dokładności i sposobu radzenia sobie z błędami",
        guideline4: "Zastanów się, które podejście do obsługi błędów wolisz",
        guideline5: "Twoje odpowiedzi pomogą ulepszyć przyszłe systemy chatbotów",

        // Chat page
        chatWithChatbots: "Rozmawiaj z Chatbotami",
        chatbotA: "Chatbot A",
        chatbotB: "Chatbot B",
        time: "Czas",
        startConversation: "Rozpocznij rozmowę z Chatbotem",
        messagePlaceholder: "Wiadomość do Chatbota",
        isTyping: "pisze...",
        errorConnecting: "Błąd połączenia z chatbotem. Spróbuj ponownie lub odśwież stronę.",

        // Survey prompt
        studyComplete: "Badanie zakończone!",
        thankYou: "Dziękujemy za rozmowę z oboma botami.",
        surveyRequest:
            "Prosimy o poświęcenie chwili na wypełnienie naszej ankiety. Twoja opinia jest cenna dla naszych badań.",
        takeSurvey: "Wypełnij ankietę",
    },
}
