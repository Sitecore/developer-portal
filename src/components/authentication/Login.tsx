import { AbsoluteCenter, Box, Button, Card, Divider, Heading, Icon, Stack, Text, Tooltip, Wrap } from '@chakra-ui/react';
import { iconSitecore } from '@sitecore/blok-theme';
import { signIn } from 'next-auth/react';

interface LoginProps {
  redirectUrl?: string;
}

export const Login = ({ redirectUrl = '/' }: LoginProps) => {
  return (
    <Stack align="center" textAlign="center" spacing="6" maxW="lg">
      <Stack>
        <Heading as="h1">Login</Heading>
      </Stack>
      <Stack maxW={'lg'}>
        {!redirectUrl.startsWith('/downloads') && (
          <Heading variant="section" mb="0" fontSize="xl">
            Choose your preferred sign-in method
          </Heading>
        )}
      </Stack>
      <Card variant={'elevated'}>
        <Stack py={10} px={4}>
          <Text variant="small" mb={8}>
            To access the downloads, please sign in using your Sitecore ID
          </Text>
          <Wrap justify="center">
            <Tooltip label="Sign in using your Sitecore ID to get access to the downloads">
              <Button
                variant="outline"
                leftIcon={
                  <Icon boxSize="icon.md" color="red">
                    <path d={iconSitecore} />
                  </Icon>
                }
                onClick={() => signIn('okta', { callbackUrl: redirectUrl })}
              >
                Sitecore ID
              </Button>
            </Tooltip>
          </Wrap>
          {!redirectUrl.startsWith('/downloads') && (
            <>
              <Box position="relative" py={10} px={4}>
                <Divider />
                <AbsoluteCenter bg="chakra-body-bg" px="4" color="neutral.400">
                  OR
                </AbsoluteCenter>
              </Box>
              <Text variant="small">To access the roadmap, please sign in using your Sitecore Cloud Portal account</Text>
              <Wrap justify="center" align="center">
                <Tooltip label="Sign in using your Sitecore ID to get access to the roadmap">
                  <Button
                    variant="outline"
                    leftIcon={
                      <Icon boxSize="icon.md" color="red">
                        <path d={iconSitecore} />
                      </Icon>
                    }
                    onClick={() => signIn('sitecore', { callbackUrl: redirectUrl })}
                  >
                    Sitecore Cloud Portal
                  </Button>
                </Tooltip>
              </Wrap>
            </>
          )}
        </Stack>
      </Card>
    </Stack>
  );
};
