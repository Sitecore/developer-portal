import Link from 'next/link';
import Head from 'next/head';
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Info } from 'lucide-react';
import { LinkItem } from '@/src/components/cards';
import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { CenteredContent, Hero, Row, VerticalGroup } from '@/src/components/ui/sections';
import Layout from '@src/layouts/Layout';

export default function ChangelogCurrent() {

  const title = 'Changelog';
  const description = 'Learn more about new versions, changes and improvements';

  return (
    <>
      <Head>
        <link rel="preload" href="/api/changelog/v1/all?" as="fetch" crossOrigin="anonymous" />
      </Head>
      <TrackPageView>
        <Layout title={title} description={description}>
          <Hero title={title} description={description} />
          <VerticalGroup>
            <CenteredContent>
              <Alert variant="default">
                <Info className="h-4 w-4" />
                <AlertTitle>
                  <Link href="/changelog" className="hover:underline">You are viewing the release notes for Sitecore products that have not been added to the Changelog yet. To access the changelog of Sitecore Cloud products, click here.</Link>
                </AlertTitle>
              </Alert>

              <div>
                <h3 className="text-xl font-heading mb-2">Current release notes</h3>
                <p className="mb-4">Please check this list to find the current release notes per product</p>

                <Row columns={2}>
                  <LinkItem title="Sitecore XM/XP" link="/downloads/Sitecore_Experience_Platform/104/Sitecore_Experience_Platform_104/Release_Notes" />
                  <LinkItem title="Sitecore Experience Commerce" link="https://scdp.blob.core.windows.net/downloads/Sitecore%20Commerce/103/Sitecore%20Experience%20Commerce%20103/Non-secure/Sitecore%20XC10.3%20Release%20Notes.pdf" />
                </Row>
              </div>
            </CenteredContent>
          </VerticalGroup>
        </Layout>
      </TrackPageView>
    </>
  );
}
