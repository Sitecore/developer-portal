import { TokenCustomClaimKeysEnum } from '@/src/lib/auth0';
import { UserContext, useUser } from '@auth0/nextjs-auth0/client';
import { Card, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { LinkButton } from '../links';

export type RestrictedContentProps = {
  children?: React.ReactNode | Array<React.ReactNode>;
};

export const RestrictedContent = (props: RestrictedContentProps) => {
  const user: UserContext = useUser();
  const router = useRouter();

  const orgId = user.user?.[TokenCustomClaimKeysEnum.ORG_ID];

  const returnUrl = '/api/auth/login?returnTo=' + encodeURIComponent(router.asPath);
  const logoutUrl = '/api/auth/logout';

  if (user.user && orgId != null) {
    return props.children;
  }

  if (user.user && orgId == null) {
    return (
      <Card variant={'outline'} py={4} px={2}>
        <HStack>
          <Image boxSize="12" src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-lock" alt="lock" mx={8} />
          <Stack>
            <Heading as="h3" size="md">
              Restricted
            </Heading>
            <Text>
              The account you&apos;re using is <b>not</b> currently linked to an organization.
            </Text>
            <Text>
              This content is available exclusively to customers and partners with a Cloud Portal account linked to their organization. Please log in with your <b>Sitecore Cloud Portal</b> credentials.
            </Text>
            <LinkButton variant="link" href={logoutUrl} text={'Logout'} showIcon={false} />
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
            This content is available exclusively to customers and partners with a Cloud Portal account linked to their organization. Please log in with your <b>Sitecore Cloud Portal</b> credentials.
          </Text>
          <LinkButton variant="link" href={returnUrl} text={'Login'} showIcon={false} />
        </Stack>
      </HStack>
    </Card>
  );
};
