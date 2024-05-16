import { AllChatbots, ChatBotType } from "@/data/data-chatbots";

export function getRandomChatbot(): ChatBotType {
  return AllChatbots[Math.floor(Math.random() * AllChatbots.length)];
}