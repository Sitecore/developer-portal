import { Stack, StackProps } from '@chakra-ui/react';

export const CenteredContent = (props: StackProps) => <Stack width="100%" maxWidth="7xl" gap={16} py={{ base: 8, md: 16 }} px={{ base: '1rem', md: '4rem' }} {...props} />;
