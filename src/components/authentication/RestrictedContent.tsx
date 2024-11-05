import { useUser } from '@auth0/nextjs-auth0/client';
import { Card, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { LinkButton } from '../links';

export type RestrictedContentProps = {
  children?: React.ReactNode | Array<React.ReactNode>;
};

export const RestrictedContent = (props: RestrictedContentProps) => {
  const user = useUser();

  if (user.user) {
    return props.children;
  }

  return (
    <Card variant={'outline'} py={4} px={2}>
      <HStack>
        <Image boxSize="12" src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-lock" alt="lock" mx={8} />
        <Stack>
          <Heading as="h3" size="md">
            Restricted
          </Heading>
          <Text variant="small">You don&apos;t have permission to access this content.</Text>
          <LinkButton variant="link" href={'/api/auth/login'} text={'Login'} showIcon={false} />
        </Stack>
      </HStack>
    </Card>
  );
};
