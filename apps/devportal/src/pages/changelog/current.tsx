import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { Alert, AlertIcon, Box, Heading, Text } from '@chakra-ui/react';
import { CenteredContent, Hero, LinkItem, Row, VerticalGroup } from '@scdp/ui/components';
import Layout from '@src/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';

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
                  <LinkItem title="Sitecore Content Hub" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/release-notes.html" />
                  <LinkItem title="Sitecore OrderCloud" link="https://ordercloud.io/release-notes/" />
                  <LinkItem title="Sitecore XM/XP" link="https://dev.sitecore.net/en/Downloads/Sitecore%20Experience%20Platform/103/Sitecore%20Experience%20Platform%20103/Release%20Notes" />
                  <LinkItem title="Sitecore Experience Commerce" link="https://sitecoredev.azureedge.net/~/media/47247BF2909D42A4A58941F604DC5B7B.ashx?date=20230612T211713" />
                </Row>
              </Box>
            </CenteredContent>
          </VerticalGroup>
        </Layout>
      </TrackPageView>
    </>
  );
}
