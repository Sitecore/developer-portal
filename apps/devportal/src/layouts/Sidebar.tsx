import { Box, Wrap, WrapProps } from '@chakra-ui/react';

interface SidebarProps extends WrapProps {
  showBackground?: boolean;
  children: React.ReactNode;
}

export const Sidebar = ({ children, showBackground = false, ...rest }: SidebarProps): JSX.Element => {
  return (
    <Box as={'aside'} w="sm">
      {children && (
        <Wrap
          layerStyle={showBackground ? 'section.sidebar' : rest.layerStyle}
          direction="column"
          maxH={`calc(100vh - 3.5rem)`}
          h={`calc(100vh - 3.5rem)`}
          top="50"
          overflow="auto"
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
