import { Stack, StackProps } from '@chakra-ui/react';

export const CenteredContent = (props: StackProps) => <Stack width="100%" maxWidth="7xl" gap={{ base: 2, md: 8 }} py={{ base: 0, md: 8 }} px={{ base: 1, md: 8 }} {...props} />;
