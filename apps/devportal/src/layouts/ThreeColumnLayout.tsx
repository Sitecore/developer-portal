import { Box, Flex } from '@chakra-ui/react';
import { CenteredContent } from 'ui/components/helpers';
import InPageNavSmall from '../components/navigation/InPageNavSmall';
import { ContentHeading } from '../lib/interfaces/contentheading';
import { Sidebar } from './Sidebar';

type ThreeColumnLayoutProps = {
  sidebar: React.ReactNode;
  inPageNav?: React.ReactNode;
  inPageLinks?: ContentHeading[];
  children: React.ReactNode;
  background?: string;
};

export const ThreeColumnLayout = ({ sidebar, inPageNav, inPageLinks, children, ...rest }: ThreeColumnLayoutProps) => {
  return (
    <Flex flexGrow={0} justify={'space-between'} width={'full'} gap={0} direction={{ base: 'column', md: 'row' }} {...rest} flexFlow={'column'}>
      <Sidebar showBackground>{sidebar}</Sidebar>

      <Box maxW={'6xl'} as="main" paddingX={{ base: 4, md: 'inherit' }}>
        {inPageLinks && <InPageNavSmall hideFrom={'xl'} titles={inPageLinks} />}
        <CenteredContent>{children}</CenteredContent>
      </Box>

      <Sidebar>{inPageNav}</Sidebar>
    </Flex>
  );
};
