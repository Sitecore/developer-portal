import { ChatBot } from '@/src/components/chatbot/ChatBot';
import { Box, Button, ScaleFade, Tooltip, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';

export const Clippy = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Tooltip label="Ask Sitecore Clippy - your personal assistant">
        <Button width="70px" height="100px" cursor="pointer" position="fixed" inset="auto 0px 0px auto" margin="auto 1% 1% auto" onClick={onToggle} colorScheme="grey">
          <Image src="/images/clippy.gif" width={66} height={86} alt="Get help from Clippy!" />
        </Button>
      </Tooltip>

      <ScaleFade in={isOpen} reverse>
        <Box position="fixed" inset="auto 0px 0px auto" margin={['auto 0 0 auto', 'auto 3% 3% auto', 'auto 5% 5% auto']} shadow={'2xl'}>
          <ChatBot onClose={onClose} isOpen={isOpen} />
        </Box>
      </ScaleFade>
    </>
  );
};
