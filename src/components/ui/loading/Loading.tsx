import { Container, Spinner, VisuallyHidden } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <Container textAlign={'center'}>
      <Spinner size="sm" />
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Container>
  );
};
