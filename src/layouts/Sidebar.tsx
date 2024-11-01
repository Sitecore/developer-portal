import { Box, BoxProps, Wrap } from '@chakra-ui/react';

interface SidebarProps extends BoxProps {
  showBackground?: boolean;
  children: React.ReactNode;
}

export const Sidebar = ({ children, showBackground = false, ...rest }: SidebarProps): JSX.Element => {
  return (
    <Box as={'aside'} w={{ base: 'full', md: 'sm', sm: 'full' }} order={{ base: -1, md: 0 }} layerStyle={showBackground && children ? 'section.sidebar' : rest.layerStyle} hideBelow={'xl'}>
      {children && (
        <Wrap direction="column" h={showBackground ? { base: 'auto', md: `auto` } : {}} top="50" shadow={'none'} display="flex" flexFlow="column nowrap" as={'div'} {...rest}>
          {children}
        </Wrap>
      )}
    </Box>
  );
};
