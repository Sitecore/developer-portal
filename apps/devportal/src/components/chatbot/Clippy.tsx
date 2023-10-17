import { Box, Button, ScaleFade, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import { ChatBot } from './ChatBot';

export const Clippy = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Button width={['80px', '120px']} height="12+px" cursor="pointer" position="fixed" inset="auto 0px 0px auto" margin="auto 1% 1% auto" onClick={onToggle} colorScheme="grey">
        <Image src="/images/clippy.png" width={100} height={100} alt="Get help from Clippy!" />
      </Button>

      <ScaleFade in={isOpen}>
        <Box position="fixed" inset="auto 0px 0px auto" margin={['auto 0 0 auto', 'auto 3% 3% auto', 'auto 5% 5% auto']} shadow={'2xl'}>
          <ChatBot onClose={onClose} />
        </Box>
      </ScaleFade>
    </>
  );
};
