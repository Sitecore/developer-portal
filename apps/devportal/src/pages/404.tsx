import { Box, Center, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ButtonLink } from '@scdp/ui/components';
import SearchInput from '../components/sitecore-search/SearchInput';
import Layout from '../layouts/Layout';

export default function Custom404() {
  return (
    <Layout title={'This page is not available'} description={'The link you have followed might be broken, or the page has been removed'}>
      <Box height={'calc(100vh - 215px)'}>
        <Center layerStyle="section.main" h="full">
          <Stack align="center" textAlign="center" spacing="6" maxW="lg">
            <Image boxSize="32" src="https://sitecorecontenthub.stylelabs.cloud/api/public/content/d5bf9fd27c404416953020f5f832aaa5" alt="map-search" />
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
              <ButtonLink rightIcon={undefined} variant="link" href="/" text="Go to homepage" />
            </Stack>
          </Stack>
        </Center>
      </Box>
      {/* 
      <VerticalGroup height={'calc(100vh - 478px)'}>
        <CenteredContent>
          <Stack maxW={'lg'}>
            <Heading size="md" mb="0">
              Maybe you can search to find what you are looking for?
            </Heading>
            <HStack>
              <SearchInput showButton />
            </HStack>
          </Stack>
        </CenteredContent>
      </VerticalGroup>*/}
    </Layout>
  );
}
