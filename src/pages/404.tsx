import { Box, Center, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

import { LinkButton } from '../components/links';

import { SearchInput } from '../components/integrations/sitecore-search';
import Layout from '../layouts/Layout';

export default function Custom404() {
  return (
    <Layout title={'This page is not available'} description={'The link you have followed might be broken, or the page has been removed'}>
      <Box height={'calc(100vh - 215px)'}>
        <Center layerStyle="section.main" h="full">
          <Stack align="center" textAlign="center" spacing="6" maxW="lg">
            <Image boxSize="32" src="https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/spot-map-search" alt="map-search" />
            <Stack>
              <Heading as="h1">This page is not available</Heading>
              <Text variant="small">Error 404</Text>
            </Stack>
            <Stack maxW={'lg'}>
              <Heading variant="section" mb="0">
                Maybe you can search to find what you are looking for?
              </Heading>
              <HStack>
                <SearchInput showButton />
              </HStack>
            </Stack>
            <Text>The page you are looking for cannot be found.</Text>
            <Stack>
              <LinkButton rightIcon={undefined} variant="link" href="/" text="Go to homepage" />
            </Stack>
          </Stack>
        </Center>
      </Box>
    </Layout>
  );
}
