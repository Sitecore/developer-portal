import { Box, BoxProps, Wrap } from '@chakra-ui/react';

interface SidebarProps extends BoxProps {
  showBackground?: boolean;
  children: React.ReactNode;
}

export const Sidebar = ({ children, showBackground = false, ...rest }: SidebarProps): JSX.Element => {
  return (
    <Box as={'aside'} w={{ base: 'full', md: 'sm', sm: 'full' }} order={{ base: -1, md: 0 }} layerStyle={showBackground && children ? 'section.sidebar' : rest.layerStyle}>
      {children && (
        <Wrap
          direction="column"
          h={showBackground ? { base: 'auto', md: `auto` } : {}}
          minH={{ base: 'auto', md: `calc(100vh - 235px)` }}
          top="50"
          overflow={{ base: '', md: 'auto' }}
          shadow={'none'}
          position={{ base: 'static', md: 'sticky' }}
          display="flex"
          flexFlow="column nowrap"
          as={'div'}
          {...rest}
        >
          {children}
        </Wrap>
      )}
    </Box>
  );
};
