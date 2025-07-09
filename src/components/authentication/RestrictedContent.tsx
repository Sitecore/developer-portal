import { Button, Card, Heading, HStack, Image, Link, Stack, Text, Wrap } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';

export type RestrictedContentProps = {
  children?: React.ReactNode | Array<React.ReactNode>;
};

export const RestrictedContent = (props: RestrictedContentProps) => {
  const { data: session } = useSession();
  const orgId = session?.user?.orgId;

  if (session?.user && orgId != null) {
    return props.children;
  }

  if (session?.user && orgId == null) {
    return (
      <Card variant={'outline'} py={4} px={2}>
        <HStack>
          <Image boxSize="12" src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-lock" alt="lock" mx={8} />
          <Stack>
            <Heading as="h3" size="md">
              Restricted
            </Heading>
            <Text>
              The account you&apos;re using is <b>not</b> currently linked to an organization or you are using an <b>Sitecore ID</b> account.
            </Text>
            <Text>This content is available exclusively to customers and partners with a Sitecore Cloud Portal account linked to their organization.</Text>
            <Wrap>
              <Link href="/login?redirect=/roadmap">Logout or switch credentials</Link>
            </Wrap>
          </Stack>
        </HStack>
      </Card>
    );
  }

  return (
    <Card variant={'outline'} py={4} px={2}>
      <HStack>
        <Image boxSize="12" src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-lock" alt="lock" mx={8} />
        <Stack>
          <Heading as="h3" size="md">
            Restricted
          </Heading>
          <Text>You don&apos;t have permission to access this content.</Text>
          <Text>
            This content is available exclusively to customers and partners with a <b>Sitecore Cloud Portal</b> account linked to their organization. Please log in with your <b>Sitecore Cloud Portal</b> credentials.
          </Text>
          <Wrap>
            <Button variant="link" onClick={() => signIn('sitecore')}>
              Login
            </Button>
          </Wrap>
        </Stack>
      </HStack>
    </Card>
  );
};
