import { Button, Card, Heading, Icon, Stack, Text, Tooltip, Wrap } from '@chakra-ui/react';
import { mdiLogout } from '@mdi/js';
import { iconSitecore } from '@sitecore/blok-theme';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const SwitchAuthentication = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { redirect = '/', file, page } = router.query;
  const redirectUrl = file != null && page != null ? `/downloads/redirect?file=${file}&redirect=${page}` : (redirect as string);

  if (session?.user == null) {
    return null;
  }
  console.log(redirect);
  return (
    <Stack align="center" textAlign="center" spacing="6" maxW="lg">
      <Stack maxW={'lg'}>
        <Heading variant="section" mb="0" fontSize="xl">
          Welcome back
        </Heading>
      </Stack>
      <Card variant={'elevated'}>
        <Stack py={10} px={4}>
          <Text>You are currently logged in using {session?.provider == 'okta' ? 'Sitecore ID' : 'Sitecore Cloud Portal'} credentials.</Text>
          <Wrap justify="center" mt={8}>
            <Tooltip label={`Sign in using your ${session?.provider == 'sitecore' ? 'Sitecore ID' : 'Sitecore Cloud Portal'} credentials`}>
              <Button
                variant="outline"
                leftIcon={
                  <Icon boxSize="icon.md" color="red">
                    <path d={iconSitecore} />
                  </Icon>
                }
                onClick={() => signIn(session?.provider == 'sitecore' ? 'okta' : 'sitecore', { callbackUrl: redirectUrl })}
              >
                Switch to {session?.provider == 'sitecore' ? 'Sitecore ID' : 'Sitecore Cloud Portal'}
              </Button>
            </Tooltip>
          </Wrap>
        </Stack>
      </Card>
      <Button
        leftIcon={
          <Icon>
            <path d={mdiLogout} />
          </Icon>
        }
        variant="link"
        colorScheme="neutral"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Logout
      </Button>
    </Stack>
  );
};
