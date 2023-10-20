import { Avatar, Flex, Text } from '@chakra-ui/react';
import { Message, MessageType } from '../../types/Message';

type MessagesProps = {
  messages: Message[];
};

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <Flex w="100%" h="80%" flexDirection="column" p="0">
      {messages.map((message, index) => {
        if (message.type == MessageType.Assistant) {
          return (
            <Flex key={index} w="100%" my={5}>
              <Avatar name="Clippy" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/eb75f6e802994a59bc4091428c75d336" bg="white" />
              <Flex bg="neutral-subtle-bg" color="chakra-body-text" minW="100px" maxW="350px" my="0" p="3" pl="5" mx={5} borderRadius={'md'}>
                <Text dangerouslySetInnerHTML={{ __html: message.text }} />
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
