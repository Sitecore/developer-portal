import { Container, Spinner, VisuallyHidden } from '@chakra-ui/react';

export const Loading = (): JSX.Element => {
  return (
    <Container textAlign={'center'}>
      <Spinner size="sm" />
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Container>
  );
};
