import { Flex, FlexProps } from '@chakra-ui/react';

export const VerticalGroup = (props: FlexProps) => (
  <Flex
    as="section"
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    color="black"
    _dark={{
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
);
