import { Stack, StackProps } from '@chakra-ui/react';

export const CenteredContent = (props: StackProps) => <Stack width="100%" maxWidth="7xl" gap={{ base: 8, md: 16 }} py={{ base: 8, md: 8 }} px={{ base: 0, md: 8 }} {...props} />;
