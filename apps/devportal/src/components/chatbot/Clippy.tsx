import { Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { ChatBot } from './ChatBot';

export const Clippy = () => {
  const [visible, setVisible] = React.useState(false);

  const onclick = function () {
    setVisible(!visible);
    console.log('clicked: ' + visible);
  };

  return (
    <>
      <Button width="120px" height="12+px" cursor="pointer" position="fixed" inset="auto 0px 0px auto" margin="auto 1% 1% auto" onClick={() => onclick()} colorScheme="grey">
        <Image src="/images/clippy.png" width={120} height={120} alt="Get help from Clippy!" />
      </Button>

      <Box position="fixed" inset="auto 0px 0px auto" margin="auto 10% 10% auto" padding="2px" borderRadius="10" bg="grey" display={visible ? 'block' : 'none'}>
        <ChatBot />
      </Box>
    </>
  );
};
