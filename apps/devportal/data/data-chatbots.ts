
export type ChatBotType = {
  name: string;
  image: string;
  talkingImage: string;
}


export const AllChatbots: ChatBotType[] = [
  {
    name: "Jason",
    image: "/images/chatbots/Jason.png",
    talkingImage: "/images/chatbots/Jason-talking.gif"
  },
  {
    name: "Rob",
    image: "/images/chatbots/Rob.png",
    talkingImage: "/images/chatbots/Rob-talking.gif"
  }
]