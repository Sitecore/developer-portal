import { getLatestNewsletter } from '@/src/lib/newsletter';
import { Box, Button, Center, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export async function getStaticProps() {
  const page = await getLatestNewsletter();

  return {
    props: {
      page: page,
    },
  };
}

export default function Latest({ page }: { page: string }) {
  const router = useRouter();

  useEffect(() => {
    if (page) {
      router.push(page);
    }
  }, [page, router]);

  return (
    <Box height={'calc(100vh - 200px)'}>
      <Center layerStyle="section.main" h="full">
        <Stack align="center" textAlign="center" spacing="6" maxW="sm">
          <Image boxSize="32" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5bf9fd27c404416953020f5f832aaa5" alt="map-search" />
          <Stack>
            <Heading as="h1">Newsletter</Heading>
            <Text variant="small">You should be redirected to the latest newsletter automatically</Text>
          </Stack>
          <Stack>
            <Button variant="link">
              <Link href={page}>Click here if the redirect doesn't work</Link>
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
}
