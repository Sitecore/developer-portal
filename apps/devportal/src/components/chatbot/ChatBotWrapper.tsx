import { ChatBotType } from '@/data/data-chatbots';
import { ChatBot } from '@/src/components/chatbot/ChatBot';
import { getRandomChatbot } from '@/src/lib/chatbot/chatbot';
import { Box, Button, ScaleFade, Tooltip, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ChatBotWrapper = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [ chatbot, setChatbot ] = useState<ChatBotType>();

  useEffect(() => {
    setChatbot(getRandomChatbot());
  }, [])  

  return chatbot && (
    <>
      <Tooltip label={`Ask ${chatbot.name} - your personal assistant`}>
        <Button width="216px" height="185px" cursor="pointer" position="fixed" inset="auto 0px 0px auto" padding={0} onClick={onToggle} colorScheme="grey">
          {
            (!isOpen)
             ? <Image src={chatbot.image} width={237} height={250} alt={`Get help from ${chatbot.name}!`} />
             : <Image src={chatbot.talkingImage} width={237} height={250} alt={`Get help from ${chatbot.name}!`} />
          }
        </Button>
      </Tooltip>

      <ScaleFade in={isOpen} reverse>
        <Box position="fixed" inset="auto 0px 0px auto" margin={['auto 0 0 auto', 'auto 13% 13% auto', 'auto 8% 6% auto']} animation={'ease-in'} shadow={'2xl'}>
          <ChatBot onClose={onClose} isOpen={isOpen} chatBot={chatbot} />
        </Box>
      </ScaleFade>
    </>
  );
};