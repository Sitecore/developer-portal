import { Flex, FlexProps } from '@chakra-ui/react';

export const VerticalGroup = (props: FlexProps) => (
  <Flex
    as="section"
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    color="black"
    paddingX={{ base: 2, '2xl': 0 }}
    _dark={{
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
);
