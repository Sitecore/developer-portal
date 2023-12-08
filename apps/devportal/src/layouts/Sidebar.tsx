import { Box, WrapProps } from '@chakra-ui/react';

interface SidebarProps extends WrapProps {
  showBackground?: boolean;
  children: React.ReactNode;
}

export const Sidebar = ({ children, showBackground = false, ...rest }: SidebarProps): JSX.Element => {
  return (
    <Box as={'aside'} w={{ base: 'full', md: 'sm', sm: 'full' }} order={{ base: -1, md: 0 }} flexShrink={3}>
      {children && (
        <Box
          layerStyle={showBackground ? 'section.sidebar' : rest.layerStyle}
          direction="column"
          maxH={{ base: 'auto', md: `100vh` }}
          h={showBackground ? { base: 'auto', md: `100vh` } : {}}
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
        </Box>
      )}
    </Box>
  );
};
