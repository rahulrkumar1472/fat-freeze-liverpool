export const chatbotConfig = {
  mode: process.env.NEXT_PUBLIC_CHATBOT_MODE ?? "mock",
  scriptSrc: process.env.NEXT_PUBLIC_CHATBOT_SCRIPT_SRC,
  inlineSnippet: process.env.NEXT_PUBLIC_CHATBOT_INLINE_SNIPPET,
  compactMode: process.env.NEXT_PUBLIC_CHATBOT_COMPACT_MODE !== "false",
  launcherLabel: "Speak to us now",
};

export type ChatbotMode = "mock" | "provider";
