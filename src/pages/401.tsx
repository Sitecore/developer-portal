import { Box, Button, Center, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from '../layouts/Layout';

export default function Custom401() {
  const router = useRouter();
  const file: string = (router?.query['file'] as string) ?? '';

  return (
    <Layout title={'This page is not available'} description={'The link you have followed might be broken, or the page has been removed'}>
      <Box height={'calc(100vh - 215px)'}>
        <Center layerStyle="section.main" h="full">
          <Stack align="center" textAlign="center" spacing="6" maxW="lg">
            <Image boxSize="32" src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-stop" alt="stop" />
            <Stack>
              <Heading as="h1">Unauthorized</Heading>
              <Text variant="small">Error 401</Text>
            </Stack>
            <Stack maxW={'lg'}>
              <Heading variant="section" mb="0">
                To access this page, please use your Sitecore ID (Okta)
              </Heading>
            </Stack>
            <Stack>
              <Button variant="link" onClick={() => signIn('okta', { callbackUrl: file != null ? `/api/download?file=${file}` : '/downloads' })}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </Layout>
  );
}
