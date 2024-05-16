import { ChatBotType } from '@/data/data-chatbots';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import Markdown from 'react-markdown';
import { Message, MessageType } from '../../types/Message';

type MessagesProps = {
  messages: Message[];
  chatBot: ChatBotType;
};

export const Messages = ({ messages, chatBot }: MessagesProps) => {
  return (
    <Flex w="100%" h="80%" flexDirection="column" p="0">
      {messages.map((message, index) => {
        if (message.type == MessageType.Assistant) {
          return (
            <Flex key={index} w="100%" my={5}>
              <Avatar marginTop="5px" name="ChatBot" src={chatBot.image} bg="white" />
              <Flex bg="neutral-subtle-bg" color="chakra-body-text" minW="100px" maxW="350px" my="0" borderRadius={'md'} ml={2}>
                <Prose margin={2.5}>
                  <Markdown>{message.text}</Markdown>
                </Prose>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex bg="neutral-fg" color="chakra-inverse-text" minW="100px" maxW="350px" my="0" p="3" mx={5} borderRadius={'md'}>
                <Text>{message.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
    </Flex>
  );
};
