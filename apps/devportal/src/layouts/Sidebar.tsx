import { Box, Wrap, WrapProps } from '@chakra-ui/react';

interface SidebarProps extends WrapProps {
  showBackground?: boolean;
  children: React.ReactNode;
}

export const Sidebar = ({ children, showBackground = false, ...rest }: SidebarProps): JSX.Element => {
  return (
    <Box as={'aside'} w={{ base: 'full', md: 'md', sm: 'full' }} order={{ base: -1, md: 0 }} flexShrink={3}>
      {children && (
        <Wrap
          layerStyle={showBackground ? 'section.sidebar' : rest.layerStyle}
          direction="column"
          maxH={{ base: 'auto', md: `calc(100vh - 3.5rem)` }}
          h={{ base: 'auto', md: `calc(100vh - 3.5rem)` }}
          top="50"
          overflow={{ base: '', md: 'auto' }}
          shadow={'none'}
          position={'sticky'}
          display="flex"
          flexFlow="column nowrap"
          {...rest}
        >
          {children}
        </Wrap>
      )}
    </Box>
  );
};
