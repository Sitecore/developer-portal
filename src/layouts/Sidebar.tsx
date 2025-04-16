import { Box, BoxProps, Stack } from '@chakra-ui/react';

interface SidebarProps extends BoxProps {
  showBackground?: boolean;
  children: React.ReactNode;
}

export const Sidebar = ({ children, showBackground = false, ...rest }: SidebarProps) => {
  return (
    <Box as={'aside'} w={{ base: 'full', md: 'sm', sm: 'full' }} order={{ base: -1, md: 0 }} layerStyle={showBackground && children ? 'section.sidebar' : rest.layerStyle} padding={5} hideBelow={rest.hideBelow ? rest.hideBelow : 'lg'}>
      {children && (
        <Stack gap={8} direction="column" h={showBackground ? { base: 'auto', md: `auto` } : {}} top="50" shadow={'none'} display="flex" flexFlow="column nowrap" as={'div'} {...rest}>
          {children}
        </Stack>
      )}
    </Box>
  );
};
