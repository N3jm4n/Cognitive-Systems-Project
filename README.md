# 🤖 Chatbot Apology Study: Emotion vs. Utility in HCI

This project explores how user perception of social chatbots is influenced by their ability to acknowledge and apologize for mistakes, as well as their use of decorative language. It is part of a research study on emotional intelligence in human-computer interaction (HCI).

**Tech Stack:** TypeScript, Llama 3.3 70B Versatile, Groq API, Web Application  
🔗 **Live Demo:** [https://cognitive-systems-project.vercel.app/](https://cognitive-systems-project.vercel.app/)

---

## 🧠 Vision and Objective

The **primary objective** of this project is to examine how apologies affect user perception when a chatbot makes interaction errors.
The central research question is:

> **Does a chatbot that acknowledges its mistakes and apologizes lead to greater user satisfaction and trust compared to one that does not?**

To answer this, the web application provides a controlled environment to compare two distinct chatbot personas:
* **Chatbot A (Emotionally-Aware):** Uses friendly, decorative language (e.g., "That's a fantastic question!") and sincerely apologizes when a user points out a factual mistake.
* **Chatbot B (Formal & Detached):** Uses a concise, objective tone, strictly avoids decorative phrases, and does not apologize or acknowledge errors.

## 🧪 How It Works & Methodology

The system is built as a web application where users interact with both chatbot variants in separate sessions (minimum 3 minutes each). Both bots are powered by the Llama language model via the Groq API, sharing the same backend logic but utilizing different system prompts to shape their behavior.

**Key Features & Error Injection:**
* **Multilingual Support:** Dynamic system prompts support both Polish and English.
* **Controlled Mistakes:** To simulate real-world limitations, an intentional error is injected within the first 3 responses of each session.
* **Subsequent Errors:** Afterward, every generated response has a **10%** chance of including an additional error.

## 📊 Key Research Findings

After interacting with both chatbots, participants completed a comprehensive survey. The results highlighted a fascinating trade-off between emotional intelligence and utilitarian expectations:
* **Trust and Empathy:** Chatbot A scored significantly higher in measures of trustworthiness, politeness, and making the user feel "cared for".
* **User Preference:** Surprisingly, Chatbot B was the preferred choice for daily use (9 vs. 6 participants). Users valued its brevity, clarity, and directness, especially for task-oriented or educational purposes.
* **Conclusion:** While socially intelligent behaviors (like apologies) are appreciated during errors, users tend to prioritize speed and predictability in everyday, goal-oriented interactions.

## 📚 Documentation

All detailed research materials and documents are located in the `docs/` directory:
* **Final Project Report:** Comprehensive analysis, methodology, and full qualitative/quantitative results (`Project report.pdf`).
* **Initial Objectives:** The preliminary goals, hypotheses, and scope defined at the start of the study (`Objectives.pdf`).

---
*Note: This project was intended for experimental use in evaluating emotional design in AI systems. All conversations are processed using streaming API calls, and no user data is persistently stored.*
