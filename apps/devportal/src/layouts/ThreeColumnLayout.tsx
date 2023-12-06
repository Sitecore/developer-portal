import { Box, Flex } from '@chakra-ui/react';
import { CenteredContent } from 'ui/components/helpers';
import { Sidebar } from './Sidebar';

type ThreeColumnLayoutProps = {
  sidebar: React.ReactNode;
  inPageNav: React.ReactNode;
  children: React.ReactNode;
  background?: string;
};

export const ThreeColumnLayout = ({ sidebar, inPageNav, children, ...rest }: ThreeColumnLayoutProps) => {
  return (
    <Flex flexGrow={0} justify={'space-between'} width={'full'} gap={0} direction={{ base: 'column', md: 'row' }} {...rest} flexFlow={'column'}>
      <Sidebar showBackground>{sidebar}</Sidebar>

      <Box maxW={'7xl'} as="main" paddingX={{ base: 4, md: 'inherit' }} width={'full'}>
        <CenteredContent>{children}</CenteredContent>
      </Box>

      <Sidebar>{inPageNav}</Sidebar>
    </Flex>
  );
};
