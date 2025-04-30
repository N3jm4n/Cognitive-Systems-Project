---

# 🤖 Chatbot Apology Study

This project explores how user perception of social chatbots is influenced by their ability (or lack thereof) to acknowledge and apologize for mistakes. It is part of a research study on emotional intelligence in human-computer interaction.

---

## 🧠 Vision and Objective

The **primary objective** of this project is to investigate the effect of **apologies** on user perception of social robots following interaction errors.  
The central research question is:

> **Does a chatbot that acknowledges its mistakes and apologizes result in greater user satisfaction and perceived trustworthiness compared to one that does not?**

To answer this, the system simulates two versions of a chatbot:

- **Chatbot A**: Occasionally makes mistakes and explicitly apologizes when they are pointed out.
- **Chatbot B**: Also makes mistakes but does **not** apologize.

---


## 🧪 How It Works

- Users interact with two chatbot interfaces (A and B) via a tabbed UI.
- Each session lasts at least 3 minutes per bot.
- Errors are injected randomly (~20% chance).
- Chatbot A will apologize if the user points out a mistake.
- Chatbot B will not apologize or acknowledge errors.
- After completing both chats, users are shown a survey prompt.

---

## 📊 Research Use

This project is intended for experimental use in evaluating emotional design in AI systems. All conversations are processed client-side using streaming API calls; no user data is stored.

---
