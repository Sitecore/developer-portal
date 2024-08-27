import { Alert, AlertIcon, Box, Heading, Text } from '@chakra-ui/react';
import Layout from '@src/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';

import { LinkItem } from '@/src/components/cards';
import { Hero } from '@/src/components/common';
import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { CenteredContent, Row, VerticalGroup } from '@/src/components/ui';

export default function ChangelogCurrent() {
  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/v1/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <TrackPageView>
        <Layout title="Sitecore's global changelog" description="Learn more about new versions, changes and improvements">
          <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
          <VerticalGroup>
            <CenteredContent>
              <Alert status="info" alignItems="center">
                <AlertIcon />
                <Link href="/changelog">You are viewing the release notes for Sitecore products that have not been added to the Changelog yet. To access the changelog of Sitecore Cloud products, click here.</Link>
              </Alert>

              <Box>
                <Heading as="h3">Current release notes</Heading>
                <Text>Please check this list to find the current release notes per product</Text>

                <Row columns={2}>
                  <LinkItem title="Sitecore Content Hub" link="https://doc.sitecore.com/ch/en/users/content-hub/what-s-new-in-content-hub.html" />
                  <LinkItem title="Sitecore OrderCloud" link="https://ordercloud.io/release-notes/" />
                  <LinkItem title="Sitecore XM/XP" link="/downloads/Sitecore_Experience_Platform/104/Sitecore_Experience_Platform_104/Release_Notes" />
                  <LinkItem title="Sitecore Experience Commerce" link="https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/103/Sitecore%20Experience%20Commerce%20103/Non-secure/Sitecore%20XC10.3%20Release%20Notes.pdf" />
                </Row>
              </Box>
            </CenteredContent>
          </VerticalGroup>
        </Layout>
      </TrackPageView>
    </>
  );
}
