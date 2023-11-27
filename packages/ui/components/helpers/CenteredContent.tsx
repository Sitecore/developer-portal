import { Stack, StackProps } from '@chakra-ui/react';

export const CenteredContent = (props: StackProps) => <Stack width="100%" maxWidth="7xl" gap={{ base: 8, md: 16 }} py={{ base: 8, md: 16 }} paddingTop={{ base: 0, md: 8 }} {...props} />;
