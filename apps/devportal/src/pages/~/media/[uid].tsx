import { getDownloadUrl } from '@/src/lib/downloads';
import { Box, Button, Center, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * Retrieves the value from a query parameter.
 *
 * @param query - The query parameter value.
 * @returns The value of the query parameter as a string.
 */
export const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';
  return Array.isArray(query) ? query[0] : query;
};

const UidPage = () => {
  const router = useRouter();
  const uid = getQueryValue(router.query.uid);
  const url = getDownloadUrl(uid);

  useEffect(() => {
    if (url) {
      router.push(url);
    }
  }, [uid, router]);

  return (
    <Box height={'calc(100vh - 200px)'}>
      <Center layerStyle="section.main" h="full">
        <Stack align="center" textAlign="center" spacing="6" maxW="sm">
          <Image boxSize="32" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5bf9fd27c404416953020f5f832aaa5" alt="map-search" />
          <Stack>
            <Heading as="h1">Download redirect</Heading>
            <Text variant="small">You should be redirected to your download automatically.</Text>
            <Text variant="small">
              Please note that the <Link href="/downloads">Sitecore Downloads</Link> site has changed. Update your links to prevent issues in the near future.
            </Text>
          </Stack>
          <Stack>
            <Button variant="link">
              <Link href={url}>Click here if the redirect doesn't work</Link>
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
};

export default UidPage;
